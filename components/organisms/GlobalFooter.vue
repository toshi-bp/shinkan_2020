<template>
  <div>
    <footer class="footer">
      <div>
        <img src="~/assets/image/symbol.svg" class="footer__logo">
      </div>
      <div class="footer__copyright">
        <p>
          2020年度 東京理科大学野田地区
          <br>新入生歓迎ガイダンス実行委員会
        </p>
      </div>
      <p class="footer__welcome">
        一緒に理大祭を作りませんか？
      </p>
      <div class="footer__list">
        <ul>
          <li class="footer__list__item">
            <fa icon="desktop" fixed-width /><a href="" target="blank">理大祭新歓ウェブサイト</a>
          </li>
          <li class="footer__list__item">
            <fa :icon="['fab', 'twitter']" fixed-width /><a
              href="https://twitter.com/noda_ridaisai"
              target="blank"
            >理大祭公式Twitter</a>
          </li>
          <li class="footer__list__item">
            <fa icon="envelope" fixed-width /><a
              href="mailto:festival@ed.tus.ac.jp"
              @click="$ga.event('link', 'click', 'email', 1)"
            >festival@ed.tus.ac.jp</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  height: 14rem;
  background: $color;
  // bottom:0 今後残すか考える;
  z-index: $z-index-global-footer;

  @include media-breakpoint-down(md) {
    height: 9.5rem;
  }

  @include media-breakpoint-down(sm) {
    height: 20rem;
    display: block;
  }

  &__logo {
    width: 7rem;
    margin: 2rem 0 1rem 2rem;

    @include media-breakpoint-down(md) {
      width: 5rem;
      margin: 1.5rem 0 0.8rem 1.5rem;
    }

    @include media-breakpoint-down(sm) {
      width: 5rem;
      display: block;
      margin: 0rem auto 1rem auto;
      padding-top: 1rem;
      //position: absolute;
      //top: 1rem;
    }
  }
  &__copyright {
    position: absolute;
    color: #fff;
    font-family: $theme-font;
    font-size: 15px;
    display: block;
    top: 2.3rem;
    left: 11em;

    @include media-breakpoint-down(md) {
      padding-right: 28%;
      font-size: 11px;
      top: 1.6rem;
      left: 7.5rem;
    }

    @include media-breakpoint-down(sm) {
      padding-right: 0;
      display: block;
      font-size: 10px;
      text-align: center;
      position: static;
      //left: 2rem;
    }
  }
  &__welcome {
    position: absolute;
    color: #fff;
    font-family: $theme-font;
    font-size: 30px;
    display: inline-block;
    top: 2rem;
    left: 35rem;

    @include media-breakpoint-down(md) {
      font-size: 20px;
      top: 1.4rem;
      left: 23rem;
    }

    @include media-breakpoint-down(sm) {
      font-size: 18px;
      display: block;
      position: static;
      text-align: center;
      //top: 11rem;
      //left: 25%;
      margin-top: 0.5rem;
    }
  }
  &__list {
    position: absolute;
    top: 5.5rem;
    left: 32.5rem;
    //margin:0 2rem 0 0;
    display: inline-block;

    &__item {
      list-style: none;
      color: #fff;
      margin-bottom: 1rem;
    }
  }

  @include media-breakpoint-down(md) {
    &__list {
      position: absolute;
      top: 4rem;
      left: 20.5rem;
      //margin:0 2rem 0 0;
      display: inline-block;

      &__item {
        list-style: none;
        color: #fff;
        margin-bottom: 0.3rem;
        font-size: 14px;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    &__list {
      //position:absolute;
      //top:14rem;
      //left: 25%;
      margin: 0 auto 0 auto;
      padding-right: 2rem;
      position: static;
      display: block;
      text-align: center;

      &__item {
        list-style: none;
        color: #fff;
        display: block;
        text-align: center;
        //margin-bottom:1rem;
      }
    }
  }
}
</style>
