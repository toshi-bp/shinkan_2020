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
}
</style>
