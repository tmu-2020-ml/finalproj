<script lang="ts">
  import gastricMap from '../../public/maps/gastric_94.json';

  export let data: Unknown[];
  const map: number[][] = gastricMap;
  let count = -1;

  function getGene() {
    count += 1;
    return data[count];
  }

  function getCount() {
    return count;
  }
</script>

<div class="hidden xl:block">
  {#each map as row}
    <div class="flex flex-row">
      {#each row as cell}
        {#if cell == 1}
          <span
            class="cell flex flex-col p-3 text-center justify-center items-center hover:bg-secondary hover:text-danger"
          >
            <span class="text-xl ordinal">{getCount() + 2}</span>
            <span class="text-xs">{getGene()}</span>
          </span>
        {:else}
          <span class="cell invisible" />
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  span.cell {
    width: 4rem;
    height: 4rem;
    word-break: break-word;
  }

  span.cell:not([data-show]):hover {
    border-radius: 100%;
  }
</style>
