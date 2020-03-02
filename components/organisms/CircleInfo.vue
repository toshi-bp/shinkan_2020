<template>
  <div class="info">
    <CircleInfoHeader>
      <template #title>
        <slot name="title" />
      </template>

      <template #lead>
        <slot name="lead" />
      </template>

      <template #place>
        <slot name="place" />
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
