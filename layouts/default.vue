<template>
  <div>
    <GlobalHeader />
    <nuxt />
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from "~/components/organisms/GlobalHeader.vue";
import GlobalFooter from "~/components/organisms/GlobalFooter.vue";

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
  }
}
</script>

<style>
</style>
