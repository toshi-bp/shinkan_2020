<template>
  <div>
    <FeatureArticle>
      <template v-slot:title>
        理大祭ってどんなイベント？
      </template>
      <!-- </template> -->
      <template v-slot:body>
        <MarkdownPreview :markdownHtml="ridaisai"/>
      </template>
    </FeatureArticle>
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead';
import FeatureArticle from '~/components/organisms/FeatureArticle.vue';
import MarkdownPreview from '~/components/atoms/MarkdownPreview.vue';
import ridaisai from '~/assets/markdown/ridaisai.md';

export default {
  head() {
    return makeHead(
      '理大祭ってどんなイベント？',
      '新歓実行委員が理大祭について説明します！',
      require("~/assets/image/articles/ridaisai.jpg")
    );
  },
  components: {
    FeatureArticle,
    MarkdownPreview,
  },
  computed: {
    ridaisai() {
      return ridaisai;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
