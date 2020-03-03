<template>
  <footer class="footer">
    <TheContainer>
      <div class="footer__row">
        <div class="footer__head">
          <img src="~/assets/image/symbol.svg" class="footer__logo" />
          <p class="footer__copyright">
            2020年度 東京理科大学野田地区
            <br >新入生歓迎ガイダンス実行委員会
          </p>
        </div>
        <div class="footer__ridaisai">
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
        </div>
      </div>
    </TheContainer>
  </footer>
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
.footer {
  position: relative;
  background: $color;
  padding: 2rem 0;

  &__row {
    display: flex;

    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__head {
    flex: 0 0 14rem;
  }

  &__logo {
    display: block;
    width: 7rem;
    margin: 0 auto 1rem;
  }

  &__copyright {
    color: #fff;
    font-family: $theme-font;
    display: block;
    font-size: 0.75rem;
    text-align: center;
  }
  &__welcome {
    color: #fff;
    font-family: $theme-font;
    font-size: 30px;

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
    &__item {
      list-style: none;
      color: #fff;
      margin-bottom: 1rem;
    }
  }

  @include media-breakpoint-down(md) {
    &__list {
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
