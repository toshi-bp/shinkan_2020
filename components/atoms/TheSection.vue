<template>
  <section class="section">
    <h2 class="section__title">
      <slot name="title" />
      <small class="section__title__small" v-if="$slots.titleSmall">
        <slot name="titleSmall" />
      </small>
    </h2>
    <div class="section__box">
      <slot />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 2rem;

  &__title {
    text-align: left;
    margin-bottom: 0.5rem;
    font-family: $theme-font;
    font-size: 1.5rem;
    color: $brown;
    font-weight: normal;
    &__small {
      font-size: 1rem;
      font-family: $sans-serif;
    }
  }

  &__box {
    width: 100%;
    margin: 0 center;
    background-color: #fff;
    padding: 2rem;
    border: 3px solid $theme-color;
    box-shadow: 0.25rem 0.25rem 0 rgba($theme-color, 0.5);
  }
}
</style>
