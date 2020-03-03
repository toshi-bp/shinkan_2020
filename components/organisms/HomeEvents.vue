<template>
  <div class="events">
    <h2 class="events__title">
      EVENTS
      <small class="events__title__small">イベント内容</small>
    </h2>
    <div class="events__main">
      <nuxt-link to="/circles/" class="events__box">
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
      </nuxt-link>
      <nuxt-link to="/stage/" class="events__box">
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
</template>

<style lang="scss" scoped>
.events {
  padding: 3rem 0;
  @include media-breakpoint-down(sm) {
    padding: 2rem 0;
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
    border: 3px solid $blue;
    box-shadow: 0.25rem 0.25rem 0 rgba($blue, 0.5);
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
      text-align: center;
      margin: 0;
    }

    &__place {
      text-align: center;
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
</style>
