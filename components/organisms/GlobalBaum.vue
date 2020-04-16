<template>
  <div class="global-nav">
    <button
      class="global-nav__toggle"
      :class="{ '--active': active }"
      @click="toggle"
    >
      <fa :icon="active ? 'times' : 'bars'" fixed-width />
      <span class="global-nav__toggle__tooltip">メニュー</span>
    </button>
    <div class="global-nav__toggle__square" />
    <div
      class="global-nav__bg"
      :class="{ '--active': active }"
      @click="close"
    />
    <nav class="global-nav__body" :class="{ '--active': active }">
      <ul class="global-nav__list">
        <li class="global-nav__list__item">
          <nuxt-link to="/" class="global-nav__list__item__link">
            <fa icon="home" class="global-nav__list__item__icon" fixed-width />
            ホーム
          </nuxt-link>
        </li>
        <li class="global-nav__list__item">
          <nuxt-link to="/circles/" class="global-nav__list__item__link">
            <fa icon="user" class="global-nav__list__item__icon" fixed-width />
            サークル紹介
          </nuxt-link>
        </li>
        <li class="global-nav__list__item">
          <nuxt-link to="/stage/" class="global-nav__list__item__link">
            <fa icon="star" class="global-nav__list__item__icon" fixed-width />
            団体紹介ステージ
          </nuxt-link>
        </li>
        <li class="global-nav__list__item">
          <nuxt-link to="/map/" class="global-nav__list__item__link">
            <fa icon="map" class="global-nav__list__item__icon" fixed-width />
            キャンパスマップ
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  },
  watch: {
    $route() {
      this.close()
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    },
    close() {
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
.global-nav {
  &__toggle {
    appearance: none;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: $z-index-global-nav-toggle;
    background: #ffffff;
    border: 2px solid #{$theme-color};
    line-height: 1;
    //border-radius: 5px;
    color: $theme-color;
    width: 3.5rem;
    height: 3.5rem;
    box-shadow: 0.1rem 0.1rem 0 rgba($color, 0.2);
    outline: none;
    transition: 0.2s ease background, 0.2s ease color;

    &.--active {
      background: #ffffff;
      color: $theme-color;
    }
    &:hover {
      background: $theme-color;
      color: #ffffff;
    }

    &:focus {
      box-shadow: 0.1rem 0.1rem 0 rgba($color, 0.2),
        0 0 0 0.1rem rgba($theme-color, 0.5);
    }

    &__square {
      appearance: none;
      position: fixed;
      bottom: 4.2rem;
      right: 4.3rem;
      background: #ffffff;
      border: solid $cream;
      border-width: 2px;
      width: 2rem;
      height: 2rem;
      box-shadow: 0.1rem 0.1rem 0 rgba($color, 0.1);
      z-index: 9450;
    }

    &__tooltip {
      $font-size: 0.9rem;
      $translate-x: translateX(-50%);
      position: absolute;
      line-height: 1;
      font-size: $font-size;
      top: calc(-#{$font-size} - 1.5rem);
      left: 50%;
      white-space: nowrap;
      color: $color;
      background: #fff;
      padding: 0.25rem 0.75rem;
      //border-radius: 0.5rem;
      box-shadow: 0 0 0.3rem rgba($color, 0.3);
      border: 1px solid #{$theme-color};
      animation: 3s ease tooltip both;

      @keyframes tooltip {
        from {
          transform: #{$translate-x} translateY(-0.5rem);
        }

        25% {
          transform: #{$translate-x} translateY(0);
        }

        50% {
          transform: #{$translate-x} translateY(-0.5rem);
        }

        75% {
          transform: #{$translate-x} translateY(0);
          opacity: 1;
          visibility: visible;
        }

        to {
          transform: #{$translate-x} translateY(-0.5rem);
          opacity: 0;
          visibility: hidden;
        }
      }

      &::before {
        $size: 10px;
        content: "";
        display: block;
        position: absolute;
        width: $size;
        height: $size;
        background: #fff;
        bottom: calc(-#{$size} / 2 - 1px);
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        border: 1px solid #{$theme-color};
        border-left: 0;
        border-top: 0;
      }
    }
  }

  &__body {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 300px;
    z-index: $z-index-global-nav-body;
    background: #fff;
    padding-bottom: 7rem;

    // animation
    transition: 0.3s ease all;
    transform: translateX(100%);
    &.--active {
      transform: translateX(0);
    }

    @include media-breakpoint-down(sm) {
      width: 100%;
      max-width: 100%;
      $max-height: 223px;
      top: calc(100% - #{$max-height});
      bottom: 0;
      left: 0;
      right: 0;

      z-index: $z-index-global-nav-body;
      background: #fff;
      padding: 0;

      // animation
      transition: 0.3s ease all;
      transform: translateY(100%);
      &.--active {
        transform: translateY(0);
      }
    }
  }

  &__list {
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &__item {
      height: 3.5rem;

      &__link {
        height: 100%;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        font-size: 1rem;
        color: $color;

        @include media-breakpoint-down(sm) {
          border-bottom: 0.5px solid rgba($color, 0.25);
        }

        &.nuxt-link-exact-active {
          font-weight: bold;
        }
      }

      &__icon {
        color: $color;
        margin-right: 0.75rem;
        font-size: 1.25rem;
        opacity: 0.5;
      }

      &__angle {
        color: $color;
        font-size: 1.25rem;
        opacity: 0.5;
      }
    }
  }

  &__bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba($color, 0.75);
    z-index: $z-index-global-nav-bg;

    // animation
    transition: 0.3s ease all;
    opacity: 0;
    visibility: hidden;
    &.--active {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
