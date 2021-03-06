<script lang="ts">
  import { onMount } from 'svelte';
  import { default as vegaEmbed } from 'vega-embed';

  export let id: string;

  function makeData(raw: Record<'g' | 'v', number>[]) {
    return {
      gc: raw.filter((e) => e.g).map((e) => e.v),
      'non-gc': raw.filter((e) => !e.g).map((e) => e.v),
    };
  }

  async function fetchGene(
    id: string
  ): Promise<Record<'gc' | 'value', number>[]> {
    const filename = id[0].toLowerCase();
    if (window.tmu2020genes?.[filename]?.[id]) {
      return window.tmu2020genes[filename][id];
    }

    const api = await fetch(`/genes/${filename}.tsv`);
    const content = (await api.text()).split('\n').map((el) => el.split('\t'));

    if (!window.tmu2020genes) {
      window.tmu2020genes = {};
    }

    for (const [key, ...value] of content) {
      if (!window.tmu2020genes?.[filename]) {
        window.tmu2020genes[filename] = {};
      }
      window.tmu2020genes[filename][key] = JSON.parse(value.join('\t'));
    }

    return window.tmu2020genes[filename][id];
  }

  const rawData: Record<'gc' | 'value', number>[] = [];

  let vegares;
  let data = makeData(rawData);
  let isloading = false;
  // let title = `${
  //   (data || []).length
  // } genes's p-value are smaller than ${lessthan}`;

  $: if (vegares && id) {
    isloading = true;
    fetchGene(id).then((gene) => {
      isloading = false;
      const changeset = vegares.view
        .changeset()
        .remove(() => true)
        .insert(makeData(gene));
      vegares.view.change('data', changeset).run();
    });
  }

  const config = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: {
      values: data,
      name: 'data',
    },
    transform: [{ flatten: ['gc', 'non-gc'] }, { fold: ['gc', 'non-gc'] }],
    mark: 'bar',
    encoding: {
      x: { field: 'value', type: 'quantitative', axis: { format: '.4f' } },
      y: {
        field: 'value',
        type: 'quantitative',
        aggregate: 'count',
        stack: null,
        format: 'd',
      },
      color: { field: 'key', type: 'nominal', title: 'category' },
    },
  };

  onMount(async () => {
    if (id) {
      const raw = await fetchGene(id);
      data = makeData(raw);
      config.data.values = data;
    }

    vegaEmbed(`#${id}`, config, { actions: false })
      .then((res) => {
        vegares = res;
        isloading = false;
      })
      .catch((error) => console.log(error));
  });
</script>

<figure class="text-center flex flex-col justify-center">
  {#if isloading}
    <img src="/loading.svg" alt="loading {id}" />
  {:else}
    <figcaption>{id}</figcaption>
  {/if}
  <div {id} class={(isloading && 'invisible') || ''} />
</figure>
