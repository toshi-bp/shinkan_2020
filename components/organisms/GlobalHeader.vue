<template>
  <div>
    <header class="header">
      <TheContainer class="header__container">
        <div class="header__inner">
          <nuxt-link to="/" class="header__title">
            <div class="header__title__sub">
              2020年度東京理科大学野田地区
            </div>
            <div class="header__title__main">
              新入生歓迎ガイダンス
            </div>
          </nuxt-link>
          <!-- <nuxt-link to="/about/">新館って何？</nuxt-link> -->
          <!-- <div class="header__date">
            <span class="header__date__number header__date__hidden-xs">2020</span>
            <span class="header__date__hidden-xs">年</span>
            <span class="header__date__number">4</span>
            月
            <span class="header__date__number">11</span>
            開催
          </div> -->
        </div>
      </TheContainer>
    </header>
    <div class="emergency">
      <TheContainer>
        <div class="emergency__article">
            新歓団体の皆様に延期とご連絡させていただいていた新入生歓迎ガイダンスですが、新型コロナウイルス感染拡大防止のため、今年度は中止とさせていただくことになりました。何卒ご理解のほどよろしくお願いいたします。
        </div>
      </TheContainer>
    </div>
    <!-- <div class="blank">
    </div> -->
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
.header {
  height: $global-header-height;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-index-global-header;
  background: $theme-color;

  &__container {
    height: 100%;
  }

  &__inner {
    display: flex;
    align-items: center;
    height: 100%;
  }

  @include media-breakpoint-down(sm) {
    height: 3.2rem;
  }
  @include media-breakpoint-down(md) {
    height: 3.6rem;
  }
  &__title {
    color: #fff;
    font-family: $theme-font;
    font-size: 1.5rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include media-breakpoint-down(md) {
      font-size: 1.3rem;
    }

    @include media-breakpoint-down(sm) {
      font-size: 1rem;
    }

    &__sub {
      font-size: 0.6rem;
      line-height: 1;
      margin-bottom: 0.3rem;
    }

    &__main {
      font-size: 1rem;
      line-height: 1;
    }
  }
  &__date {
    border: 1px solid #fff;
    color: #fff;
    padding: 0.25rem 0.5rem;
    line-height: 1;
    font-size: 0.75rem;
    display: inline-block;
    margin: 0 0 0 1rem;
    display: flex;
    align-items: flex-end;

    &__number {
      font-size: 1rem;
    }

    &__hidden-xs {
      @include media-breakpoint-down(xs) {
        display: none;
      }
    }
  }
}

.emergency {
  //position: fixed;
  width: 100%;
  padding: 1rem 0;
  background-color: #c13648;;
  color: #fff;
  box-shadow: 0 5px 0 rgba(#000, 0.1);
  margin-top: -0.3rem;
  &__article {
    font-size: 1rem;
    @include media-breakpoint-down(sm) {
      font-size: 0.7rem;
    }
  }
}

.blank {
  height: calc(#{$global-header-height} + 2rem);

  @include media-breakpoint-down(sm) {
    height: calc(#{$global-header-height} + 5rem);
  }

  // @include media-breakpoint-down(xs) {
  //   height: calc(#{$global-header-height} + 6rem);
  // }
}
</style>
