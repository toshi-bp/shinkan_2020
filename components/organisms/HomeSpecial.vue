<template>
  <div class="special">
    <h2 class="special__title">
      SPECIAL
      <small class="special__title__small">特集</small>
    </h2>
    <div class="special__main">
      <nuxt-link to="/articles/Registration/" class="special__box">
        <p class="special__box__title">
          履修登録のすゝめ
        </p>
        <p class="special__box__description">
          履修登録の方法などを紹介します！
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.special {
  padding: 0 0 3rem;
  @include media-breakpoint-down(sm) {
    padding: 0 0 2rem;
  }

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
    border: 3px solid $yellow;
    box-shadow: 0.25rem 0.25rem 0 rgba($yellow, 0.5);
    transition: 0.15s ease all;

    @include media-breakpoint-down(sm) {
      width: 100%;
      &:last-child {
        margin: 1rem 0 0 0;
      }
    }

    &__title {
      text-align: center;
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
      font-family: $sub-font;
      color: $yellow;
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
      text-align: center;
      margin: 0;
    }

    &__place {
      text-align: center;
      margin: 0;
    }

    &:hover {
      background-color: $yellow;
      color: #fff;
      text-decoration: none;
      box-shadow: 0 0 0 rgba($yellow, 0.2);
      transform: translate(0.25rem, 0.25rem);
    }

    &:hover &__title {
      color: #fff;
    }
  }
}
</style>
