<script lang="ts">
  export let name: string = '';
</script>

<figure>
  <div class="rounded-full">
    <img src="/images/user.svg" alt="the avatar of {name}" />
  </div>
  <figcaption class="pt-5 text-left">
    <address>{name}</address>
  </figcaption>
</figure>

<style>
  img {
    width: 100px;
    height: 100px;
  }
</style>
