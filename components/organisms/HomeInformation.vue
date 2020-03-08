<template>
  <div class="information">
    <TheContainer>
      <TheSection class="information__box">
        <template #title>
          INFORMATION
        </template>
        <template #titleSmall>
          新歓の開催概要
        </template>
        <TheRow>
          <TheColumn pcsize="6" spsize="12" class="information__box__child">
            <h2 class="information__subtitle">
              <fa icon="door-open" fixed-width /> 開催日時
            </h2>
            <p class="information__article">
              2020年4月11日<small class="information__article__small"
                >(土曜日)</small
              ><br />
              11:00～15:00
            </p>
            <h2 class="information__subtitle">
              <fa icon="door-open" fixed-width /> 場所
            </h2>
            <p class="information__article">
              <small
                class="information__article__small information__article__small--is-block"
                >東京理科大学野田キャンパス</small
              >
              講義棟<br>
              森戸記念体育館<small class="information__article__small"
                >ほか</small
              >
            </p>
          </TheColumn>
          <TheColumn pcsize="6" spsize="12" class="information__box__child">
            <h2 class="information__subtitle">
              <fa icon="door-open" fixed-width /> テーマ
            </h2>
            <p class="information__article">
              扉
              <small class="information__article__small"
                >〜開いた向こうに、見えるもの。〜</small
              >
            </p>
            <h2 class="information__subtitle">
              <fa icon="door-open" fixed-width /> 公式Twitter
            </h2>
            <p class="information__article">
              <a href="https://twitter.com/tusnodashinkan" target="blank">
                <fa :icon="['fab', 'twitter']" fixed-width />
                @tusnodashinkan
              </a>
            </p>
          </TheColumn>
        </TheRow>
      </TheSection>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"
import TheSection from "~/components/atoms/TheSection.vue"
import TheColumn from "~/components/atoms/TheColumn.vue"
import TheRow from "~/components/atoms/TheRow.vue"

export default {
  components: {
    TheContainer,
    TheSection,
    TheColumn,
    TheRow
  }
}
</script>

<style lang="scss" scoped>
.information {
  padding: 0 0 3rem 0;
  @include media-breakpoint-down(sm) {
    padding: 0 0 2rem 0;
  }

  &__title {
    text-align: left;
    margin-bottom: 0.5rem;
    font-family: $theme-font;
    font-size: 1.5rem;
    color: $brown;
    &__small {
      font-size: 1rem;
      font-family: $sans-serif;
    }
  }

  &__subtitle {
    margin: 0;
    font-size: 1rem;
    font-family: $sub-font;
    margin: 0 0 0.5rem;
    color: $theme-color;
  }

  &__article {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 2rem;

    &__small {
      font-size: 1rem;
      color: $muted;

      &--is-block {
        display: block;
      }
    }

    &:last-child {
      @include media-breakpoint-up(md) {
        margin: 0;
      }
    }
  }

  &__box {
    width: 100%;
  }
}
</style>
