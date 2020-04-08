<template>
  <div>
    <FeatureArticle>
      <template v-slot:title>
        金村の会に入ってみたwww
      </template>
      <!-- </template> -->
      <template v-slot:body>
        <MarkdownPreview :markdownHtml="special"/>
      </template>
    </FeatureArticle>
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead';
import FeatureArticle from '~/components/organisms/FeatureArticle.vue';
import MarkdownPreview from '~/components/atoms/MarkdownPreview.vue';
import special from '~/assets/markdown/special.md';

export default {
  head() {
    return makeHead(
      '奏メシ',
      '理大祭にはいろんな食べ物がいっぱい！',
    );
  },
  components: {
    FeatureArticle,
    MarkdownPreview,
  },
  computed: {
    special() {
      return special;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
