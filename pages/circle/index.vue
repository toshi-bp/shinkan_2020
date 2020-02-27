<template>
  <TheContainer>
    <div class="circle__title">
      <div class="circle__title__line__2"></div>
      <h1 class="circle__title">サークル紹介</h1>
      <div class="circle__title__line__1"></div>
    </div>
  </TheContainer>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue";

export default {
  components: {
    TheContainer,
  }
}
</script>

<style lang="scss" scoped>
.circle{

  &__title{
    position: relative;
    font-family: $theme-font;
    color: $brown;
    text-align: left;
    font-size: 2rem;
    z-index: 2;

    &__line{
      &__1{
        width: 14rem;
        height: 1rem;
        background: $theme-color;
        opacity: 0.8;
        z-index: 1;
        //box-shadow: 1rem 1rem 0 rgba($color, 0.7);
      }

      &__2{
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
