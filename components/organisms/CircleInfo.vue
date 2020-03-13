<template>
  <div class="info">
    <CircleInfoHeader :image-url="imageUrl" :circle-id="circleId" :type="circleType">
      <template #name>
        <slot name="name" />
      </template>

      <template #subtitle>
        <slot name="subtitle" />
      </template>

      <template #booth>
        <slot name="booth" />
      </template>
    </CircleInfoHeader>

    <CircleInfoSummary :type="circleType">
      <template #days>
        <slot name="days" />
      </template>

      <template #place>
        <slot name="place" />
      </template>

      <template #summary>
        <slot name="summary" />
      </template>

      <template #leader>
        <slot name="leader" />
      </template>

      <template #people_all>
        <slot name="people_all" />
      </template>

      <template #people_male>
        <slot name="people_male" />
      </template>

      <template #people_female>
        <slot name="people_female" />
      </template>

      <template #club_dues>
        <slot name="club_dues" />
      </template>

      <template #qualifications>
        <slot name="qualifications" />
      </template>

      <template #twitter_ids>
        <slot name="twitter_ids" />
      </template>

      <template #url>
        <slot name="url" />
      </template>

      <template #email>
        <slot name="email" />
      </template>

      <template #instagram_ids>
        <slot name="instagram_ids" />
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
    },
    circleId: {
      type: Number
    },
    circleType: {
      type: String,
    }
  },
}
</script>

<style lang="scss" scoped></style>
