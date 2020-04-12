<template>
  <div class="intro" :class="{'intro--active': show}">
    <div class="intro__bg" @click="closeIntro"></div>
    <h1 class="intro__title">
      <button @click="closeIntro" class="intro__close">
        <fa icon="chevron-left" fixed-width/>
      </button>
      {{ area }}
    </h1>
    <div class="intro__content"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.intro {
  &__bg {

  }

  &__title {
    font-family: $theme-font;
    font-size: 1.5rem;
  }
}
</style>
