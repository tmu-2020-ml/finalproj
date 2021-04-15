<script lang="ts">
  import { onMount } from 'svelte';
  import { default as vegaEmbed } from 'vega-embed';

  export let data: [string, number][] = [];
  export let id: string;
  export let title: string;

  const pieData = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    title,
    data: { url: 'data/population.json' },
    spacing: 0,
    hconcat: [
      {
        transform: [{ filter: { field: 'gender', equal: 'Female' } }],
        title: 'Female',
        mark: 'bar',
        encoding: {
          y: {
            field: 'age',
            axis: null,
            sort: 'descending',
          },
          x: {
            aggregate: 'sum',
            field: 'people',
            title: 'population',
            axis: { format: 's' },
            sort: 'descending',
          },
          color: {
            field: 'gender',
            scale: { range: ['#675193', '#ca8861'] },
            legend: null,
          },
        },
      },
      {
        width: 20,
        view: { stroke: null },
        mark: {
          type: 'text',
          align: 'center',
        },
        encoding: {
          y: { field: 'age', type: 'ordinal', axis: null, sort: 'descending' },
          text: { field: 'age', type: 'quantitative' },
        },
      },
      {
        transform: [{ filter: { field: 'gender', equal: 'Male' } }],
        title: 'Male',
        mark: 'bar',
        encoding: {
          y: {
            field: 'age',
            title: null,
            axis: null,
            sort: 'descending',
          },
          x: {
            aggregate: 'sum',
            field: 'people',
            title: 'population',
            axis: { format: 's' },
          },
          color: {
            field: 'gender',
            legend: null,
          },
        },
      },
    ],
    config: {
      view: { stroke: null },
      axis: { grid: false },
    },
  };

  onMount(() => {
    vegaEmbed(`#${id}`, pieData, { actions: false }).catch((error) =>
      console.log(error)
    );
  });
</script>

<div {id} />
