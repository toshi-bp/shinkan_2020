<template>
  <CircleInfo :image-url="require(`~/assets/image/symbol.png`)">
    <template #title>
      金村の会
    </template>

    <template #lead>
      金村琢磨の時代が今、始まる。
    </template>

    <template #booth>
      RHK
    </template>

    <template #day>
      金
    </template>

    <template #place>
      金村の森
    </template>

    <template #content>
      金村後援会
    </template>

    <template #leader>
      金村琢磨
    </template>

    <template #people>
      1
    </template>

    <template #male>
      1
    </template>

    <template #female>
      0
    </template>

    <template #cost>
      3,000,000
    </template>

    <template #condition>
      なし
    </template>

    <template #twitter>
      Twitterリンク
    </template>

    <template #homepage>
      ほーむぺーじ
    </template>

    <template #contact>
      めーる
    </template>

    <template #instagram>
      いんすたぐらむ
    </template>

    <template #remarks>
      非公認
    </template>
  </CircleInfo>
</template>

<script>
import CircleInfo from "~/components/organisms/CircleInfo.vue"
import makeHead from "~/utils/makeHead.js"

export default {
  components: {
    CircleInfo
  },
  head() {
    return makeHead(
      "金村の会",
      "金村琢磨の時代が今始まる",
      require("~/assets/image/symbol.png")
    )
  }
}
</script>

<style lang="scss" scoped></style>
