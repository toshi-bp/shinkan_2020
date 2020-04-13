<template>
  <div>
    <FeatureArticle>
      <template v-slot:title>
        履修登録のすゝめ
      </template>
      <!-- </template> -->
      <template v-slot:body>
        <MarkdownPreview :markdownHtml="Registration"/>
      </template>
    </FeatureArticle>
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead';
import FeatureArticle from '~/components/organisms/FeatureArticle.vue';
import MarkdownPreview from '~/components/atoms/MarkdownPreview.vue';
import Registration from '~/assets/markdown/Registration.md';

export default {
  head() {
    return makeHead(
      '履修登録のすゝめ',
      '新歓実行委員が履修登録の手続き等を説明します！',
    );
  },
  components: {
    FeatureArticle,
    MarkdownPreview,
  },
  computed: {
    Registration() {
      return Registration;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
