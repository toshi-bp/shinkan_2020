<template>
  <div class="information">
    <TheContainer>
      <h2 class="information__title">
        INFORMATION
        <small class="information__title__small">新歓の開催概要</small>
      </h2>
      <div class="information__box">
        <div class="information__box__child">
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
            森戸記念体育館
          </p>
        </div>
        <div class="information__box__child">
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
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"

export default {
  components: {
    TheContainer
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
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 center;
    background-color: #fff;
    padding: 2rem 1rem; // &__child と合わせて横 2rem
    border: 3px solid $theme-color;
    box-shadow: 0.25rem 0.25rem 0 rgba($theme-color, 0.5);

    &__child {
      flex: 0 0 50%;
      max-width: 50%;
      text-align: left;
      padding: 0 1rem;

      @include media-breakpoint-down(md) {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }
}
</style>

