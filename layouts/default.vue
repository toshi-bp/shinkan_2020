<template>
  <div>
    <GlobalHeader />
    <nuxt />
    <p>フッターだよ</p>
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
