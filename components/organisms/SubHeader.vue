<template>
  <header class="sub-header">
    <TheContainer>
      <h1 class="sub-header__title">
      <!--:class="{'sub-header__title--no-margin': !$slots.lead}"-->
        <slot name="title" />
      </h1>
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
  padding: 4rem 0;

  &__title {
    position: relative;
    font-family: $theme-font;
    color: $brown;
    text-align: left;
    font-size: 2rem;
    z-index: 2;
    display: inline-block;

    &::before{
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      right: -3rem;
      bottom: -1rem;
      background: $theme-color;
      z-index: 1;
      height: 1rem;
      opacity: 0.8;
    }
    &::after{
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: -2rem;
      right: -2rem;
      background: $theme-color;
      z-index: 2;
      width: 1rem;
      opacity: 0.6;
    }
  }
}
</style>
