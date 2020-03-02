<template>
  <CircleInfo
    :imageUrl="require(`~/assets/image/symbol.png`)"
  >
    <template #title>
      金村の会
    </template>
  </CircleInfo>
</template>

<script>
import CircleInfo from "~/components/organisms/CircleInfo.vue";

export default {
  components: {
    CircleInfo,
  }
}
</script>

<style lang="scss" scoped>

</style>
