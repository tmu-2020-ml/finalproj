<script lang="ts">
  export let classnames: string = '';
</script>

<div class={classnames}>
  <slot />
</div>

<style>
  div :global(thead) {
    border-top: 1px solid;
    border-bottom: 1px solid;
  }

  div :global(tbody) {
    border-bottom: 1px solid;
  }
</style>
