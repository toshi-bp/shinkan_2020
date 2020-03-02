<template>
   <div class="theme">
      <div class="theme__back">
        <TheContainer>
          <div class="theme__box">
            <div class="theme__header">
              <h2 class="theme__title">
                THEME
              </h2>
              <p class="theme__tobira">
                「扉」
              </p>
            </div>
            <div class="theme__body">
              <p class="theme__msg">
                今年の新歓テーマは「扉」です。<br >
                新入生の皆さんには<br >
                想像を超える<br >
                新しい生活が待っているかと思います。
              </p>
              <p class="theme__msg">
                今年度のテーマである「扉」には、<br >
                これから始まる自分だけの新生活への扉を開いて<br >
                歩み出してほしいという願いを込めました。
              </p>
            </div>
          </div>
        </TheContainer>
      </div>
    </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"

export default {
  components: {
    TheContainer,
  }
}
</script>

<style lang="scss" scoped>
.theme {
  width: 100%;
  display: flex;
  $box-width: 50rem; //二つの箱の幅
  $shift-width: 5rem; //移動する距離
  $header-size: 15rem; //前面の四角の大きさ
  $header-sm-size: 11rem; //スマホ版の弁面の四角の大きさ

  &__back {
    background-image: url(~@/assets/image/back.svg);
    background-size: cover;
    width: 100%;
    padding: 4rem 0;
    @include media-breakpoint-down(sm) {
      background-image: url(~@/assets/image/back_sm.svg);
    }
  }

  &__title {
    text-align: center;
    font-family: $theme-font;
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
    color: $brown;
  }

  &__box {
    display: flex;
    position: relative;
    text-align: center;
  }

  &__header {
    display: flex;
    flex: 0 0 15rem;
    flex-direction: column; //要素を縦並びにする
    align-items: stretch; //要素の幅を親要素と同じにする
    justify-content: center;
    width: $header-size;
    height: $header-size;
    box-shadow: 1rem 1rem 0 rgba($theme-color, 0.3);
    padding: 1rem;
    background-color: #fff;
    z-index: 2;
    @include media-breakpoint-down(sm) {
      // margin: 0 calc(#{$box-width} - #{$header-sm-size} / 2);
      width: $header-sm-size;
      height: $header-sm-size;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    width: calc(#{$box-width} - #{- 10rem + 5rem});
    background-color: #fff;
    box-shadow: 1rem 1rem 0 rgba($yellow, 0.6);
    z-index: 1;
    margin: 2.5rem 0 0 #{-$shift-width};
    padding: 2rem 1rem 2rem calc(#{$shift-width} + 1rem);
    @include media-breakpoint-down(sm) {
      padding: 2rem;
      width: $box-width;
      margin: 2.5rem 0 0 0;
    }
  }

  &__tobira {
    font-size: 3rem;
    display: inline-block;
    color: $brown;
    font-family: $theme-font;
    margin: 0;
    @include media-breakpoint-down(sm) {
      font-size: 2.5rem;
    }
  }

  &__msg {
    font-size: 1rem;
    display: inline-block;
    margin: 0 0 1rem;
    text-align: center;
    color: #000;
    font-family: $sub-font;
    &:last-child {
      //msgが最後になった場合
      margin: 0;
    }
  }
}
</style>