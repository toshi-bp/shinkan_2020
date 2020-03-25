<template>
  <CircleInfo :imageUrl="circle.image_filename
                  ? require(`~/assets/image/circles/${circle.image_filename}`)
                  : require('~/assets/image/symbol.png')" :circle-id="circle.circle_id" type="circle.type">
    <template #name>
      circle.name
    </template>

    <template #subtitle>
      circle.subtitle
    </template>

    <template #booth>
      circle.booth
    </template>

    <template #days>
      circle.days
    </template>

    <template #place>
      circle.place
    </template>

    <template #summary>
      circle.summary
    </template>

    <template #leader>
      circle.leader
    </template>

    <template #people_all>
      circle.people_all
    </template>

    <template #people_male>
      circle.people_male
    </template>

    <template #people_female>
      circle.people_female
    </template>

    <template #club_dues>
      circle.club_dues
    </template>

    <template #qualifications>
      circle.qualifications
    </template>

    <template #twitter_ids>
      circle.twitter_ids
    </template>

    <template #url>
      circle.url
    </template>

    <template #email>
      circle.email
    </template>

    <template #instagram_ids>
      circle.instagram_ids
    </template>

  </CircleInfo>
</template>

<script>
import CircleInfo from "~/components/organisms/CircleInfo.vue"
import makeHead from "~/utils/makeHead.js"

import circles from "~/circles/circleList.json"

export default {
  components: {
    CircleInfo
  },
  computed: {
    circle: function() {
      return circles.find(circle => parseInt(this.$route.params.id, 10) === parseInt(circle.circle_id, 10));
    }
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  head() {
    return makeHead(
      this.circle.name,
      this.circle.subtitle,
      this.circle.image_filename
        ? require(`~/assets/image/circles/${this.circle.image_filename}`)
        : require('~/assets/image/symbol.png')
    )
  }
}

</script>

<style lang="scss" scoped></style>
