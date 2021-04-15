<script lang="ts">
  import { onMount } from 'svelte';
  import { default as vegaEmbed } from 'vega-embed';

  const data = [
    {
      region: 'Eastern Asia',
      males: 32.1,
      females: 13.2,
    },
    {
      region: 'Eastern Europe',
      males: 17.1,
      females: 7.5,
    },
    {
      region: 'South America',
      males: 12.7,
      females: 6.9,
    },
    {
      region: 'Western Asia',
      males: 11.3,
      females: 6,
    },
    {
      region: 'Southern Europe',
      males: 10.4,
      females: 5,
    },
    {
      region: 'Melanesia',
      males: 10.1,
      females: 6.4,
    },
    {
      region: 'Caribbean',
      males: 8.7,
      females: 5.1,
    },
    {
      region: 'Western Europe',
      males: 8.2,
      females: 3.7,
    },
    {
      region: 'Central America',
      males: 8.1,
      females: 6.3,
    },
    {
      region: 'Micronesia / Polynesia',
      males: 7.9,
      females: 4.1,
    },
    {
      region: 'South-Eastern Asia',
      males: 7.8,
      females: 4,
    },
    {
      region: 'South Central Asia',
      males: 7.2,
      females: 3.5,
    },
    {
      region: 'Australia / New Zealand',
      males: 6.4,
      females: 2.9,
    },
    {
      region: 'Northern Europe',
      males: 6.2,
      females: 3.1,
    },
    {
      region: 'Northern America',
      males: 5.6,
      females: 2.8,
    },
    {
      region: 'Middie Africa',
      males: 5.4,
      females: 4,
    },
    {
      region: 'Southern Africa',
      males: 5.4,
      females: 2.6,
    },
    {
      region: 'Westem Africa',
      males: 4.9,
      females: 3.8,
    },
    {
      region: 'Eastern Africa',
      males: 4.7,
      females: 4,
    },
    {
      region: 'Northern Africa',
      males: 4.7,
      females: 3,
    },
  ];

  export let id: string;
  export let title: string;

  const pieData = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    title,
    data: { values: data },
    spacing: 10,
    hconcat: [
      {
        title: 'Female',
        mark: 'bar',
        encoding: {
          y: {
            title: null,
            axis: null,
            field: 'region',
            sort: { field: 'females', order: 'descending' },
          },
          x: {
            aggregate: 'sum',
            title: null,
            field: 'females',
            axis: { format: '.1f' },
            sort: 'descending',
          },
          color: { value: 'red' },
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
          y: {
            field: 'region',
            type: 'ordinal',
            axis: null,
            sort: { field: 'females', order: 'descending' },
          },
          text: { field: 'region' },
        },
      },
      {
        title: 'Male',
        mark: 'bar',
        encoding: {
          y: {
            title: null,
            axis: null,
            field: 'region',
            sort: { field: 'females', order: 'descending' },
          },
          x: {
            aggregate: 'sum',
            field: 'males',
            title: null,
            axis: { format: '.1f' },
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
