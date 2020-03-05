<template>
  <component
    :is="componentIs"
    :to="to"
    :href="href"
    class="link-button"
    tabindex="0"
    :class="{
      'link-button--is-yellow': type === 'yellow',
      'link-button--is-blue': type === 'blue',
      'link-button--is-green': type === 'green'
    }"
    @click="onClick"
  >
    <div
      class="link-button__inner"
      :class="{
        'link-button__inner--is-no-horizontal-padding': noHorizontalPadding
      }"
    >
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
    },
    type: {
      type: String,
      default: "theme"
    },
    noHorizontalPadding: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    labelColor() {
      const typesDict = {
        physical: "#8ed0e3",
        musical: "#e9d431",
        cultual: "97c031"
      }

      if (this.type in typesDict) {
        return typesDict[this.type]
      }
      return typesDict["theme"]
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e)
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
  box-shadow: 0.25rem 0.25rem 0 rgba($theme-color, 0.5);
  color: $brown;

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
    text-align: center;
    line-height: 1;
    position: relative;
    z-index: 2;

    &--is-no-horizontal-padding {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &:hover {
    text-decoration: none;
    box-shadow: 0 0 0 rgba($theme-color, 0.2);
    transform: translate(0.25rem, 0.25rem);
    color: #fff;

    &::before {
      transform: translateX(0);
    }
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

  &--is-yellow {
    border: 2px solid $yellow;
    box-shadow: 0.25rem 0.25rem 0 rgba($yellow, 0.5);
    //color: $yellow;

    &::before {
      background: $yellow;
    }
    &:hover {
      box-shadow: 0 0 0 rgba($yellow, 0.2);
    }
    &:active {
      $darken: darken(
        $color: $yellow,
        $amount: 5
      );
      //上で設定した色を定める。明度、％
      background: $darken;
      border-color: $darken;
      color: #ffffff;
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba($color: $yellow, $alpha: 0.3);
    }
  }

  &--is-blue {
    border: 2px solid $blue;
    box-shadow: 0.25rem 0.25rem 0 rgba($blue, 0.5);
    //color: $blue;

    &::before {
      background: $blue;
    }

    &:hover {
      box-shadow: 0 0 0 rgba($blue, 0.2);
    }

    &:active {
      $darken: darken(
        $color: $blue,
        $amount: 5
      );
      //上で設定した色を定める。明度、％
      background: $darken;
      border-color: $darken;
      color: #ffffff;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba($color: $blue, $alpha: 0.3);
    }
  }
}
</style>
