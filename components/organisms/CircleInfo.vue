<template>
  <div class="info">
    <CircleInfoHeader>
      <template #title>
        <slot name="title" />
      </template>

      <template #lead>
        <slot name="lead" />
      </template>

      <template #booth>
        <slot name="booth" />
      </template>
    </CircleInfoHeader>

    <CircleInfoSummary :year="年" :month="月">
      <template #day>
        <slot name="day" />
      </template>

      <template #place>
        <slot name="place" />
      </template>

      <template #content>
        <slot name="content" />
      </template>

      <template #leader>
        <slot name="leader" />
      </template>

      <template #people>
        <slot name="people" />
      </template>

      <template #male>
        <slot name="male" />
      </template>

      <template #female>
        <slot name="female" />
      </template>

      <template #cost>
        <slot name="cost" />
      </template>

      <template #condition>
        <slot name="condition" />
      </template>

      <template #twitter>
        <slot name="twitter" />
      </template>

      <template #homepage>
        <slot name="homepage" />
      </template>

      <template #contact>
        <slot name="contact" />
      </template>

      <template #instagram>
        <slot name="instagram" />
      </template>

      <template #remarks>
        <slot name="remarks" />
      </template>
    </CircleInfoSummary>
  </div>
</template>

<script>
import CircleInfoHeader from "~/components/molecules/CircleInfoHeader.vue"
import CircleInfoSummary from "~/components/molecules/CircleInfoSummary.vue"

export default {
  components: {
    CircleInfoHeader,
    CircleInfoSummary
  },
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
