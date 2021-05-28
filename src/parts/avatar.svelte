<script lang="ts">
  export let name: string = '';
  export let image: string = '/images/user.svg';
</script>

<figure>
  <div class="avatar rounded-full">
    <img src={image} alt="the avatar of {name}" />
  </div>
  <figcaption class="pt-5 text-left">
    <address>{name}</address>
  </figcaption>
</figure>

<style>
  div.avatar {
    width: 100px;
    height: 100px;
    overflow: hidden;
  }
</style>
