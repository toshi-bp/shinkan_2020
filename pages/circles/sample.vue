<template>
  <CircleInfo :image-url="require(`~/assets/image/symbol.png`)">
    <template #title>
      サークル名
    </template>

    <template #lead>
      サークル概要
    </template>

    <template #booth>
      ブース
    </template>

    <template #day>
      活動日
    </template>

    <template #place>
      活動場所
    </template>

    <template #content>
      活動内容
    </template>

    <template #leader>
      代表者氏名
    </template>

    <template #people>
      人数
    </template>

    <template #male>
      男
    </template>

    <template #female>
      女
    </template>

    <template #cost>
      部費
    </template>

    <template #condition>
      入部条件
    </template>

    <template #twitter>
      Twitterリンク
    </template>

    <template #homepage>
      ホームページ
    </template>

    <template #contact>
      メール
    </template>

    <template #instagram>
      Instagram
    </template>

    <template #remarks>
      備考
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
      "サークル名",
      "サークル概要",
      require("~/assets/image/symbol.png")
    )
  }
}
</script>

<style lang="scss" scoped></style>
