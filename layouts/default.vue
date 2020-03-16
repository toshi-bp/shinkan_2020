<template>
  <div>
    <GlobalHeader />
    <nuxt />
    <GlobalBaum />
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from "~/components/organisms/GlobalHeader.vue"
import GlobalFooter from "~/components/organisms/GlobalFooter.vue"
import GlobalBaum from "~/components/organisms/GlobalBaum.vue"

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    GlobalBaum
  }
}
</script>

<style></style>
