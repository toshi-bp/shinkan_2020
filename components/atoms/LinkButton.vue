<template>
  <component
    :is="componentIs"
    :to="to"
    :href="href"
    class="link-button"
    tabindex="0"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
    },
    href: {
      type: String,
    },
    componentIs: {
      type: String,
      default: 'nuxt-link',
    }
  }
}
</script>

<style lang="scss" scoped>
.link-button{
  display: inline-block;
  padding: 0.8rem 2.5rem;
  border: 2px solid $theme-color;
  color: $theme-color;
  font-weight: bold;
  text-align: center;
  transition: 0.15s ease all;
  line-height: 1;
  background: #ffffff;

  &:hover {
    background: $theme-color;
    color: #ffffff;
    text-decoration: none;
  }

  &:active {
    $darken: darken($color: $theme-color, $amount: 5);
    //上で設定した色を定める。明度、％
    background: $darken;
    border-color: $darken;
    color:  #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($color: $theme-color, $alpha: 0.3);
  }
}
</style>
