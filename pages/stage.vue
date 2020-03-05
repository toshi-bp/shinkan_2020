<template>
  <div>
    <SubHeader>
      <template #title>
        団体紹介ステージ
      </template>
    </SubHeader>
    <header>
      <TheContainer>
        <TheSection class="stage__header">
          <h2 class="stage__header__subtitle">
            <fa icon="door-open" fixed-width /> 団体紹介ステージとは
          </h2>
          <p class="stage__header__description">
            団体紹介ステージは、新入生へ向けて団体を紹介するイベントです。今年も素敵な部活やサークルが勢揃い！魅力的なパフォーマンスを見に体育館へ行こう！
          </p>
          <h2 class="stage__header__subtitle">
            <fa icon="door-open" fixed-width /> 場所
          </h2>
          <p class="stage__header__article">
            森戸記念体育館
          </p>
          <h2 class="stage__header__subtitle">
            <fa icon="door-open" fixed-width /> 時間帯
          </h2>
          <p class="stage__header__article">
            10:45～00:00
          </p>
        </TheSection>
        <!-- <div class="stage__timetable"> -->
          
        <!-- </div> -->
        <TheSection class="stage__box" type="blue">
          <template #title>
          <fa :icon="['far', 'clock']" fixed-width />TIME TABLE
          </template>
          <template #titleSmall>
            タイムテーブル3/5ver
          </template>
          <dl class="stage__box__child">
            <dt class="stage__box__time">
              10:45～11:05
            </dt>
            <dd class="stage__box__text">
              開会式
            </dd>
            <dt class="stage__box__time">
              11:05～11:10
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                VOICE TRAINING部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:10～11:15
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学 ギター部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:15～11:20
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学Ⅰ部体育局 野田合気道部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:20～11:25
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                Ⅰ部文化会 和太鼓サークル樹部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:25～11:30
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学Ⅰ部体育局 少林寺拳法部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:30～11:35
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学Ⅰ部体育局 吹奏楽部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:35～11:40
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学Ⅰ部体育局 アメリカンフットボール部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:40～11:45
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学 Yosakoiソーラン部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:45～11:50
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学 ストリートダンスサークル GASSES
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:50～11:55
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学 ジャグリング DOMINUS SOMNI
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              11:55～12:00
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学Ⅰ部体育局 男子ラクロス部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              12:00～12:05
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学Ⅰ部体育局 女子ラクロス部
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              12:05～12:10
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                アイドルコピーダンスサークル
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              12:10～12:15
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                K-POPダンス KOOLGEM
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              12:15～12:20
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                東京理科大学 チアリーディング部 SIRIUS
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              12:20～12:25
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                TUSフラサークル
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
            <dt class="stage__box__time">
              12:25～
            </dt>
            <dd class="stage__box__text">
              <nuxt-link to="/circles/sample/" class="stage__box__link">
                2020年度東京理科大学 野田地区理大祭実行委員会
                <fa icon="angle-right" fixed-width />
              </nuxt-link>
            </dd>
          </dl>
        </TheSection>
      </TheContainer>
    </header>
  </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"
import SubHeader from "~/components/organisms/SubHeader.vue"
import TheSection from "~/components/atoms/TheSection.vue"

export default {
  components: {
    TheContainer,
    SubHeader,
    TheSection
  }
}
</script>

<style lang="scss" scoped>
.stage {
  &__header {
    margin: 0 0 4rem;

    &__subtitle {
      margin: 0;
      font-size: 1rem;
      font-family: $sub-font;
      margin: 0 0 0.5rem;
      color: $theme-color;
    }

    &__description {
      font-size: 1rem;
      // font-weight: bold;
      margin: 0 0 2rem;
    }

    &__article {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0 0 2rem;
      &:last-child {
        margin: 0;
      }

      &__small {
        font-size: 1rem;
        color: $muted;
      }
    }
  }

  &__timetable {
    margin: 0 0 0.5rem;
    font-family: $theme-font;
    font-size: 1.5rem;
    color: $brown;

    &__small {
      font-size: 1rem;
      font-family: $sans-serif;
    }
  }

  &__box {
    margin: 0 0 4rem;

    &__child {
      margin: 0;
    }

    &__time {
      font-size: 1rem;
      float: left;
    }

    &__link {
      color: #333;
    }

    &__text {
      font-size: 1rem;
      padding: 0 0 1.2rem 8rem;
      margin: 0 0 1.2rem;
      &:last-child {
        margin: 0;
      }
      border-bottom: 1.5px solid #333;
    }
  }
}
</style>
