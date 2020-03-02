<template>
  <CircleInfo
    :imageUrl="require(`~/assets/image/symbol.png`)"
  >
    <template #title>
      金村の会
    </template>

    <template #lead>
      金村琢磨の時代が今、始まる。
    </template>

    <template #place>
      金村の森
    </template>
  </CircleInfo>
</template>

<script>
import CircleInfo from "~/components/organisms/CircleInfo.vue";
import makeHead from "~/utils/makeHead.js";

export default {
    head() {
      return makeHead(
        '金村の会',
        '金村琢磨の時代が今始まる',
        require('~/assets/image/symbol.png')
      );
    },
  components: {
    CircleInfo,
  }
}
</script>

<style lang="scss" scoped>

</style>
