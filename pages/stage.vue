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
            団体紹介ステージは、新入生へ向けて団体を紹介するイベントです。今年も素敵な部活やサークルが勢揃い！魅力的なパフォーマンスを見に体育館へ行こう！<br >
            ※掲載されている情報は予告なく変更になる場合があります。
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
            10:45 ～ 12:30
          </p>
        </TheSection>
        <TheSection class="stage__box" type="blue">
          <template #title>
            <fa :icon="['far', 'clock']" fixed-width />TIME TABLE
          </template>
          <template #titleSmall>
            タイムテーブル
          </template>
          <dl class="stage__box__child">
            <dt class="stage__box__time">
              10:45 ～ 11:05
            </dt>
            <dd class="stage__box__text">
              開会式
            </dd>

            <template v-for="stage in stages">
              <dt :key="`${stage.circle_id}_dt`" class="stage__box__time">
                {{ stage.start_at }}
                ～
                {{ stage.end_at }}
              </dt>
              <dd :key="`${stage.circle_id}_dd`" class="stage__box__text">
                <component
                  :is="stage.circleInfoUrl ? 'nuxt-link' : 'span'"
                  :to="stage.circleInfoUrl || undefined"
                >
                  {{ stage.name }}
                </component>
              </dd>
            </template>
          </dl>
        </TheSection>
      </TheContainer>
    </header>
  </div>
</template>

<script>
import makeHead from "~/utils/makeHead.js"
import TheContainer from "~/components/atoms/TheContainer.vue"
import SubHeader from "~/components/organisms/SubHeader.vue"
import TheSection from "~/components/atoms/TheSection.vue"

import circles from "~/circles/circleList.json"
import stages from "~/circles/stageList.json"

export default {
  components: {
    TheContainer,
    SubHeader,
    TheSection
  },
  computed: {
    stages() {
      return stages.map(stage => {
        const circle = circles.find(
          circle => circle.circle_id == stage.circle_id
        )
        if (!circle) {
          return stage
        }
        return {
          ...stage,
          circleInfoUrl: `/circles/${stage.circle_id}/`
        }
      })
    }
  },
  head() {
    return makeHead("団体紹介ステージ", "ステージでパフォーマンスを披露")
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

    &__text {
      color: #333;
      font-size: 1rem;
      padding: 0 0 1.2rem 8rem;
      margin: 0 0 1.2rem;
      text-decoration: none;
      &:last-child {
        margin: 0;
      }
      border-bottom: 1.5px solid #333;
    }
  }
}
</style>
