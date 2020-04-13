<template>
  <div class="info">
    <!-- タイトルと主催者と開催日を入力してください -->
    <SubHeader>
      <template #title>
        特集記事
      </template>
    </SubHeader>

    <FeatureArticleHeader>
      <template v-slot:title>
        <slot name="title" />
      </template>
    </FeatureArticleHeader>

    <TheContainer>
      <TheSection>
        <slot name="body" />
      </TheSection>
    </TheContainer>

    <div class="link-button">
      <LinkButton to="/">
        トップページへ
        <fa icon="chevron-right" size="xs"/>
      </LinkButton>
    </div>
  </div>
</template>

<script>
import FeatureArticleHeader from '~/components/molecules/FeatureArticleHeader.vue';
import MarkdownPreview from '~/components/atoms/MarkdownPreview.vue';
import LinkButton from '~/components/atoms/LinkButton.vue';
import SubHeader from '~/components/organisms/SubHeader.vue';
import TheSection from '~/components/atoms/TheSection.vue';
import TheContainer from '~/components/atoms/TheContainer.vue';

export default {
  components: {
    FeatureArticleHeader,
    MarkdownPreview,
    LinkButton,
    SubHeader,
    TheSection,
    TheContainer,
  },
}
</script>

<style lang="scss" scoped>
.info {
  padding-bottom: 1px;

  &__header {
    padding-top: 2rem;
  }
  &__eyecatch {
    position: relative;

    @include media-breakpoint-down(sm) {
      padding: 0;
      max-width: 100vw;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    background: center center / cover no-repeat;
    border-radius: 1rem;
    /* box-shadow: 0 0 1rem rgba($color, 0.1); */
    margin: 0;

    @include media-breakpoint-down(sm) {
      border-radius: 0;
      box-shadow: none;
    }

    &::before {
      content: "";
      display: block;
      padding-top: calc(100% * (2 / 3));
    }
  }

  &__summary {
    padding-bottom: 2rem;
    background-repeat: repeat-x;
    background-size: 15rem 15rem;
    background-position: bottom;
    background-image: linear-gradient(to bottom, rgba(#fff, 0), lighten($theme-color, 44));

    @include media-breakpoint-down(sm) {
      padding-bottom: 0;
    }
  }

  /deep/ &__body-container {
    max-width: $event-info-max-width;
   }
}
.link-button {
  text-align: center;
  margin: 1rem auto;
}
</style>
