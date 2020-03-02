<template>
  <div class="information">
      <TheContainer>
        <h2 class="information__title">
          INFORMATION
        </h2>
        <div class="information__box">
          <div class="information__box__child">
            <h2 class="information__subtitle">
              <fa icon="door-open" fixed-width /> 開催日時
            </h2>
            <p class="information__article">
              2020年4月11日土曜日
            </p>
            <h2 class="information__subtitle">
              <fa icon="door-open" fixed-width /> 場所
            </h2>
            <p class="information__article">
              <small class="information__article__small">東京理科大学野田キャンパス</small><br />
              講義棟<br />
              森戸記念体育館
            </p>
          </div>
          <div class="information__box__child">
            <h2 class="information__subtitle">
              <fa icon="door-open" fixed-width /> テーマ
            </h2>
            <p class="information__article">
              扉
            </p>
            <h2 class="information__subtitle">
              <fa icon="door-open" fixed-width /> 公式SNS
            </h2>
            <p class="information__article">
              <a
                href="https://twitter.com/tusnodashinkan"
                target="blank"
              >
                <fa :icon="['fab', 'twitter']" fixed-width />
                @tusnodashinkan
              </a>
            </p>
          </div>
        </div>
      </TheContainer>
    </div>
</template>

<style lang="scss" scoped>
.information {
  padding: 4rem 0;
  background-color: rgba($theme-color, 1);
  margin: 0 0 3rem 0;

  &__title {
    text-align: left;
    margin-bottom: 0.5rem;
    font-family: $theme-font;
    font-size: 1.5rem;
    color: $brown;
  }

  &__subtitle {
    margin: 0;
    font-size: 1rem;
    font-family: $sub-font;
    margin: 0 0 0.5rem;
    color: $theme-color;
  }

  &__article {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 2rem;

    &__small {
      font-size: 1rem;
      color: $muted;
    }

    &:last-child {
      margin: 0;
    }
  }

  &__box {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 center;
    background-color: #fff;
    padding: 2rem;

    &__child {
      width: 50%;
      text-align: left;
    }
  }
}
</style>