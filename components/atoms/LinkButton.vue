<template>
  <component
    :is="componentIs"
    :to="to"
    :href="href"
    class="link-button"
    tabindex="0"
  >
    <div class="link-button__inner">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String
    },
    href: {
      type: String
    },
    componentIs: {
      type: String,
      default: "nuxt-link"
    }
  }
}
</script>

<style lang="scss" scoped>
.link-button {
  display: inline-block;
  border: 2px solid $theme-color;
  transition: 0.15s ease all;
  background: #fff;
  position: relative;
  overflow: hidden;
  font-family: $sub-font;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    bottom: -1px;
    z-index: 1;
    background: $theme-color;
    transform: translateX(-100%) translateX(-1px); //calc は IE で使えない
    transition: 0.15s ease all;
  }

  &__inner {
    padding: 0.8rem 2.5rem;
    color: $theme-color;
    text-align: center;
    line-height: 1;
    position: relative;
    z-index: 2;
  }

  &:hover {
    text-decoration: none;

    &::before {
      transform: translateX(0);
    }
  }

  &:hover &__inner {
    color: #fff;
  }

  &:active {
    $darken: darken(
      $color: $theme-color,
      $amount: 5
    );
    //上で設定した色を定める。明度、％
    background: $darken;
    border-color: $darken;
    color: #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($color: $theme-color, $alpha: 0.3);
  }
}
</style>
