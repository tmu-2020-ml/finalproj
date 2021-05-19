<script lang="ts">
  import pvalues from '../../public/pvalue.csv';
  import { onMount } from 'svelte';
  import { default as vegaEmbed } from 'vega-embed';

  export let id: string;
  export let lessthan: number = 1e-38;

  const rawData: { sample: string; pvalue: number; foldchange: number }[] =
    pvalues;

  let vegares;
  let data = rawData.filter((e) => e.pvalue && e.pvalue < lessthan);
  // let title = `${
  //   (data || []).length
  // } genes's p-value are smaller than ${lessthan}`;

  $: if (vegares && lessthan) {
    const nextNum = Number(lessthan);
    if (
      typeof nextNum === 'number' &&
      !Number.isNaN(nextNum) &&
      nextNum !== 0
    ) {
      data = rawData.filter((e) => e.pvalue && e.pvalue < nextNum);
      const changeset = vegares.view
        .changeset()
        .remove(() => true)
        .insert(data);
      vegares.view.change('data', changeset).run();
    }
  }

  const config = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: { values: data, name: 'data' },
    title: 'Total genes',
    width: 'container',
    layer: [
      {
        mark: {
          type: 'text',
          y: -10,
          baseline: 'middle',
          text: 'total genes',
        },
        encoding: {
          text: {
            field: 'pvalue',
            type: 'quantitative',
            aggregate: 'count',
          },
        },
      },
      {
        mark: 'bar',
        encoding: {
          tooltip: [
            {
              aggregate: 'count',
              type: 'quantitative',
              title: 'genes',
            },
          ],
          x: {
            bin: { maxbins: 50 },
            field: 'pvalue',
            title: 'p-value',
            axis: { format: '.1e' },
          },
          y: { aggregate: 'count', title: 'genes' },
        },
      },
    ],
  };

  onMount(() => {
    vegaEmbed(`#${id}`, config, { actions: false })
      .then((res) => {
        vegares = res;
      })
      .catch((error) => console.log(error));
  });
</script>

<div {id} />
