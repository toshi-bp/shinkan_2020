<template>
  <header class="sub-header">
    <TheContainer>
      <div class="sub-header__title">
        <div class="sub-header__title__line__2" />
        <h1 class="sub-header__title">
          <!--:class="{'sub-header__title--no-margin': !$slots.lead}"-->
          <slot name="title" />
        </h1>
        <div class="sub-header__title__line__1" />
      </div>
    </TheContainer>
  </header>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"

export default {
  components: {
    TheContainer
  }
}
</script>

<style lang="scss" scoped>
.sub-header {
  &__title {
    position: relative;
    font-family: $theme-font;
    color: $brown;
    text-align: left;
    font-size: 2rem;
    z-index: 2;

    &__line {
      &__1 {
        width: 14rem;
        height: 1rem;
        background: $theme-color;
        opacity: 0.8;
        z-index: 1;
      }

      &__2 {
        width: 1rem;
        height: 7rem;
        background: $theme-color;
        opacity: 0.6;
        z-index: 2;
        margin: 0 0 -6rem 12rem;
      }
    }
  }
}
</style>
