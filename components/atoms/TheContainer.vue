<template>
  <div class="container" :class="{ 'container--fluid': fluid }">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 960px;
  padding: 4% 3rem;
  text-align: center;
  @include media-breakpoint-down(sm) {
    margin: 0 0;
    max-width: 100%;
  }
}
</style>
