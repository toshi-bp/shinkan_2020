<template>
  <div class="row">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 #{-$row-gutter};
}
</style>
