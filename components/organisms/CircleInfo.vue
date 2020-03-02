<template>
  <div>
    <CircleInfoHeader>
      <template #title>
        <slot name="title" />
      </template>
    </CircleInfoHeader>

    <CircleInfoSummary>
    </CircleInfoSummary>
  </div>
</template>

<script>
import CircleInfoHeader from "~/components/molecules/CircleInfoHeader.vue";
import CircleInfoSummary from "~/components/molecules/CircleInfoSummary.vue";

export default {
  components: {
    CircleInfoHeader,
    CircleInfoSummary,
  },
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
