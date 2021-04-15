<script lang="ts">
  import { onMount } from 'svelte';
  import { default as vegaEmbed } from 'vega-embed';

  export let data: [string, number][] = [];
  export let id: string;
  export let title: string;

  const pieData = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    title,
    data: { values: data.map(([cancer, value]) => ({ cancer, value })) },
    layer: [{ mark: { type: 'arc', innerRadius: 50 } }],
    encoding: {
      theta: { field: 'value', type: 'quantitative' },
      color: { field: 'cancer', type: 'nominal' },
    },
    view: { stroke: null },
  };

  onMount(() => {
    vegaEmbed(`#${id}`, pieData, { actions: false }).catch((error) =>
      console.log(error)
    );
  });
</script>

<div {id} />
