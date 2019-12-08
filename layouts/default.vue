<template>
  <div>
    <GlobalHeader />
    <nuxt />
    <p>フッターだよ</p>
  </div>
</template>

<script>
import GlobalHeader from "~/components/organisms/GlobalHeader.vue";

export default {
  components: {
    GlobalHeader,
  }
}
</script>

<style>
</style>
