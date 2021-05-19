<script lang="ts">
  import pvalues from '../../public/pvalue.csv';
  import { onDestroy } from 'svelte';
  import GeneSummary from '../parts/gene_summary.svelte';

  const raw: { sample: string; pvalue: number; foldchange: number }[] = pvalues;
  const genes = raw.map((el) => el.sample);
  const maxGenes = 8;

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomGenes() {
    const nextSelected = [];
    while (nextSelected.length < maxGenes) {
      const numId = randomIntFromInterval(0, genes.length - 1);
      const gene = genes[numId];
      if (!nextSelected.includes(gene)) {
        nextSelected.push(gene);
      }
    }
    return nextSelected;
  }

  let selected: string[] = randomGenes();
  let timeout = false;
  let timeoutFunc;

  function handleClick() {
    selected = randomGenes();
    timeout = true;
    timeoutFunc = setTimeout(() => {
      timeout = false;
    }, 5000);
  }

  onDestroy(() => {
    if (timeoutFunc) {
      clearTimeout(timeoutFunc);
    }
  });
</script>

<div class="p-5">
  <button
    disabled={timeout}
    class="mb-3 p-3 border"
    on:click={() => handleClick()}
    >Click to pick {maxGenes} genes randomly.

    {(timeout && '(Waiting...)') || ''}
  </button>
  <ul
    class="flex flex-wrap xl:flex-nowrap overflow-x-auto relative"
    style="width: 100vw; left: calc(-50vw + 50%);"
  >
    {#each selected as gene}
      <li><GeneSummary id={gene} /></li>
    {/each}
  </ul>
</div>
