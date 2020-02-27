<template class="index">
  <div>
    <div class="theme">
      <img src="~/assets/image/symbol.svg" class="theme__logo" >
      <h1 class="theme__catchcopy">
        <div class="theme__catchcopy__1">
          開いた向こうに、
        </div>
        <div class="theme__catchcopy__2">
          見えるもの
        </div>
      </h1>
    </div>
    <div class="concept">
      <div class="back">
        <TheContainer>
          <div class="concept__box">
            <div class="concept__header">
              <h2 class="concept__title">
                CONCEPT
              </h2>
              <p class="concept__tobira">
                「扉」
              </p>
            </div>
            <div class="concept__body">
              <p class="concept__msg">
                今年の新歓テーマは「扉」です。<br />
                新入生の皆さんには<br />
                想像を超える<br />
                新しい生活が待っているかと思います。
              </p>
              <p class="concept__msg">
                今年度のテーマである「扉」には、<br />
                これから始まる自分だけの新生活への扉を開いて<br />
                歩み出してほしいという願いを込めました。
              </p>
            </div>
          </div>
        </TheContainer>
      </div>
    </div>
    <div class="body">
      <TheContainer>
        <div class="events">
          <h2 class="events__title">
            EVENTS
            <small class="events__title__small">イベント内容</small>
          </h2>
          <div class="events__main">
            <nuxt-link to="/circle/" class="events__box">
              <p class="events__box__title">
                サークル紹介
              </p>
              <p class="events__box__description">
                各サークルが講義棟の教室にて勧誘を行います。
              </p>
              <p class="events__box__time">
                00:00～00:00
              </p>
              <p class="events__box__place">
                @講義棟
              </p>
              <!-- 矢印マークのアイコンが欲しい -->
            </nuxt-link>
            <nuxt-link to="/group/" class="events__box">
              <p class="events__box__title">
                団体紹介ステージ
              </p>
              <p class="events__box__description">
                新歓参加団体がステージにて実演を行います。
              </p>
              <p class="events__box__time">
                00:00～00:00
              </p>
              <p class="events__box__place">
                @体育館
              </p>
            </nuxt-link>
          </div>
        </div>
        <div class="twitter">
          <h2 class="twitter__title">
            <fa :icon="['fab', 'twitter']" fixed-width />Twitter
          </h2>
          <a
            class="twitter-timeline"
            data-width="500"
            data-height="1000"
            href="https://twitter.com/tusnodashinkan?ref_src=twsrc%5Etfw"
          >Tweets by tusnodashinkan</a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
        </div>
      </TheContainer>
    </div>
  </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"
import LinkButton from "~/components/atoms/LinkButton.vue"

export default {
  components: {
    TheContainer,
    LinkButton
  }
}
</script>

<style lang="scss" scoped>
.back {
  background-image: url(~@/assets/image/back.svg);
  background-size: cover;
  width: 100%;
  //padding-bottom: 2rem;
  @include media-breakpoint-down(sm) {
    background-image: url(~@/assets/image/back_sm.svg);
  }
}

// .container{
//   margin:0 auto;
//   width:100%;
//   text-align:center;
//   padding:4% 3rem;
//   @include media-breakpoint-down(sm){
//    margin:0 0;
//    }
// }

.theme {
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

.concept {
  width: 100%;
  display: flex;
  $box-width: 50rem; //二つの箱の幅
  $shift-width: 5rem; //移動する距離
  $header-size: 15rem; //前面の四角の大きさ

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
    margin: 0 0 5rem;
    text-align: center;
  }

  &__header {
    //position: absolute;
    display: flex;
    flex: 0 0 15rem;
    flex-direction: column; //要素を縦並びにする
    align-items: stretch; //要素の幅を親要素と同じにする
    justify-content: center;
    width: $header-size;
    height: calc(#{$header-size} - 1.5rem);
    box-shadow: 1rem 1rem 0 rgba($theme-color, 0.3);
    padding: 1rem;
    background-color: #fff;
    z-index: 2;
    // @include media-breakpoint-down(sm) {
    //   background-color: rgba($yellow, 0.8);
    // }
  }

  &__body {
    //position: absolute;
    display: flex;
    flex-direction: column;
    width: calc(#{$box-width} - #{- 10rem + 5rem});
    background-color: #fff;
    box-shadow: 1rem 1rem 0 rgba($yellow, 0.6);
    z-index: 1;
    margin: 2.5rem 0 0 #{-$shift-width};
    padding: 2rem 1rem 2rem calc(#{$shift-width} + 1rem);
    @include media-breakpoint-down(sm) {
      // top: 0;
      // left: 0;
      // width: 100%;
    }
  }

  &__tobira {
    // position:absolute;
    // top:6rem;
    // left:10rem;
    font-size: 3rem;
    display: inline-block;
    color: $brown;
    font-family: $theme-font;
    margin: 0;
    @include media-breakpoint-down(sm) {
      // position: absolute;
      // top: 1rem;
      font-size: 2.5rem;
    }
  }

  &__msg {
    // position:absolute;
    // top:4rem;
    // left:32rem;
    font-size: 1rem;
    display: inline-block;
    margin: 0 0 1rem;
    text-align: center;
    color: #000;
    font-family: $sub-font;
    // @include media-breakpoint-down(sm){
    //   position: absolute;
    //   top: 5rem;
    //   left: 8rem;
    // }
    &:last-child {
      //msgが最後になった場合
      margin: 0;
    }
  }
}

.events {
  &__title {
    text-align: left;
    margin-bottom: 0.5rem;
    font-family: $theme-font;
    font-size: 1.5rem;
    color: $brown;

    &__small {
      font-size: 1rem;
      font-family: $sans-serif;
    }
  }

  &__main {
    display: flex;
    margin-bottom: 3rem;
    justify-content: space-between;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }

  &__box {
    width: calc(50% - 0.5rem);
    background-color: #fff;
    color: $color;
    padding: 3rem 1rem;
    opacity: 1;
    transition: all 0.2s;
    border: 3px solid $blue;
    box-shadow: 0.25rem 0.25rem 0 rgba($blue, 0.5);
    @include media-breakpoint-down(sm) {
      width: 100%;
      margin-bottom: 1%;
    }

    &__title {
      text-align: center;
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
      font-family: $sub-font;
      color: $blue;
      transition: 0.2s all;
    }

    &__description {
      text-align: center;
      margin: 0;
      @include media-breakpoint-down(sm) {
        font-size: 0.8rem;
      }
    }

    &__time {
      margin: 0;
    }

    &__place {
      margin: 0;
    }

    &:hover {
      background-color: $blue;
      color: #fff;
      text-decoration: none;
      box-shadow: 0 0 0 rgba($blue, 0.2);
      transform: translate(0.25rem, 0.25rem);
    }

    &:hover &__title {
      color: #fff;
    }
  }
}

.twitter {
  text-align: center;
  margin-bottom: 3rem;
  &__title {
    text-align: left;
    margin-bottom: 0.5rem;
    font-family: $theme-font;
    font-size: 1.5rem;
    color: $brown;
  }
}

.twitter-timeline {
  color: $brown;
  @include media-breakpoint-down(sm) {
    width: 300;
    height: 600;
  }
}
</style>
