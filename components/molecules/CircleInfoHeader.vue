<template>
  <header class="info-header">
    <TheContainer>
      <img src="~/assets/image/" alt="画像よ">
      <h1
       class="info-header__title"
      >
        <slot name="title" />
      </h1>
    </TheContainer>
  </header>
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
.info-header{
  &__title{
    font-family: $theme-font;
    font-size: 1.5rem;
    color: $brown;
    margin-bottom: 0;
  }
}
</style>
