<template>
  <div class="column">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.column {
  padding: 0 $row-gutter;
  flex: 0 0 calc(100% / 3);
  max-width: calc(100% / 3);

  @include media-breakpoint-down(md) {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>
