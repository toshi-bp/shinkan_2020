<template>
  <div class="head">
    <img src="~/assets/image/symbol.svg" class="head__logo">
    <h1 class="head__catchcopy">
      <div class="head__catchcopy__1">
        開いた向こうに、
      </div>
      <div class="head__catchcopy__2">
        見えるもの。
      </div>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.head {
  display: flex;
  text-align: center;
  height: calc(100vh - #{$global-header-height});
  align-items: center;
  justify-content: center;
  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }

  &__logo {
    display: inline-block;
    width: 20%;
    @include media-breakpoint-down(sm) {
      width: 40%;
    }
  }

  &__catchcopy {
    font-size: 35px;
    font-family: $theme-font;
    color: $brown;
    display: inline-block;
    padding-left: 10rem;
    width: 50%;
    @include media-breakpoint-down(sm) {
      font-size: 30px;
      width: 70%;
      margin: 0 auto;
      padding: 0;
    }
    &__1 {
      display: inline-block;
    }
    &__2 {
      display: inline-block;
    }
  }
}
</style>