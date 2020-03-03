<template>
  <div class="head">
    <TheContainer>
      <div class="head__flex">
        <img src="~/assets/image/symbol.svg" class="head__logo" >
        <div class="head__main">
          <h1 class="head__catchcopy">
            <span class="head__catchcopy__text">
              開いた向こうに、
            </span>
            <span class="head__catchcopy__text">
              見えるもの。
            </span>
          </h1>
          <p class="head__lead">
            2020年度東京理科大学野田地区新入生歓迎ガイダンス
          </p>
          <p class="head__lead">
            2020年4月11日(土) 11:00〜15:00
          </p>
        </div>
      </div>
    </TheContainer>
  </div>
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
.head {
  $logo-width: 15rem;

  &__flex {
    display: flex;
    height: calc(100vh - #{$global-header-height});
    align-items: center;
    justify-content: center;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
      text-align: center;
    }
  }

  &__logo {
    flex: 0 0 $logo-width;
    max-width: $logo-width;
    display: block;
    width: 100%;
    height: auto;
    @include media-breakpoint-down(sm) {
      flex: none;
      max-width: 10rem;
    }
  }

  &__main {
    padding-left: 3rem;
    flex: 0 0 calc(100% - #{$logo-width});
    max-width: calc(100% - #{$logo-width});

    @include media-breakpoint-down(sm) {
      flex: none;
      padding: 0;
      max-width: 100%;
    }
  }

  &__catchcopy {
    font-size: 2rem;
    font-family: $theme-font;
    color: $brown;
    display: inline-block;
    @include media-breakpoint-down(sm) {
      font-size: 1.5rem;
      margin: 0 auto;
      padding: 0;
    }
    &__text {
      display: inline-block;
    }
  }

  &__lead {
    font-family: $sub-font;
    margin-bottom: 0.25rem;
  }
}
</style>
