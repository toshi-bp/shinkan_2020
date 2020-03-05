<template>
  <section class="section">
    <h2 class="section__title">
      <slot name="title" />
      <small v-if="$slots.titleSmall" class="section__title__small">
        <slot name="titleSmall" />
      </small>
    </h2>
    <div
      class="section__box"
      :class="{
        'section__box--is_green': type === 'green',
        'section__box--is_blue': type === 'blue',
        'section__box--is_yellow': type === 'yellow'
      }"
    >
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "green"
    }
  }
}
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

    &--is_green {
      border: 3px solid $theme-color;
      box-shadow: 0.25rem 0.25rem 0 rgba($theme-color, 0.5);
    }

    &--is_blue {
      border: 3px solid $blue;
      box-shadow: 0.25rem 0.25rem 0 rgba($blue, 0.5);
    }

    &--is_yellow {
      border: 3px solid $yellow;
      box-shadow: 0.25rem 0.25rem 0 rgba($yellow, 0.5);
    }
  }
}
</style>
