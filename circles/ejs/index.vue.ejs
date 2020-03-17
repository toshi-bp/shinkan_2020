<template>
  <div>
    <SubHeader>
      <template v-slot:title>
        サークル紹介
      </template>
    </SubHeader>
    <TheContainer>
      <TheSection class="circle__header">
        <h2 class="circle__header__subtitle">
          <fa icon="door-open" fixed-width /> サークル紹介とは
        </h2>
        <p class="circle__header__description">
          みなさんの入りたいサークルはなんですか？もしかしたら新たな出会いもあるかもしれません。この後に書いてある様々な団体の紹介を見て気になるブースに行ってみよう！<br />
          ※掲載されている情報は予告なく変更になる場合があります。
        </p>
        <fa icon="map-pin" fixed-width /> … 新入生歓迎ガイダンス(4/11(土))当日における各団体の勧誘場所
      </TheSection>
      <div class="circle__types">
        <LinkButton
          v-for="(color, type) in typeColorDict"
          :key="type"
          component-is="a"
          :href="`/2020/circles/#heading-${type}`"
          :type="color"
          class="circle__types__button"
          no-horizontal-padding
        >
          {{
            {
              physical: "運動系",
              musical: "音楽系",
              cultual: "文化系"
            }[type]
          }}
          <fa icon="angle-down" />
        </LinkButton>
      </div>

      <div
        v-for="(circles, type) in {
          physical: physicalCircles,
          musical: musicalCircles,
          cultual: cultualCircles
        }"
        :key="type"
        class="circle__section"
      >
        <h2
          :id="`heading-${type}`"
          class="circle__section__title"
          :class="{
            'circle__section__title--is-physical': type === 'physical' ,
            'circle__section__title--is-musical': type === 'musical' ,
            'circle__section__title--is-cultual': type === 'cultual'
          }"
        >
          {{
            {
              physical: "運動系",
              musical: "音楽系",
              cultual: "文化系"
            }[type]
          }}
        </h2>
        <TheRow>
          <TheColumn v-for="circle in circles" :key="circle.circle_id">
            <CircleCard
              :to="`/circles/${circle.circle_id}/`"
              :image-url="
                circle.image_filename
                  ? require(`~/assets/image/circles/${circle.image_filename}`)
                  : undefined
              "
              :label-type="circle.type"
              :title="circle.name"
              :booth="circle.booth"
            />
          </TheColumn>
        </TheRow>
        <div class="circle__section__footer">
          <LinkButton
            v-if="!$store.state.circleList.isMoreVisible[type]"
            component-is="button"
            :type="typeColorDict[type]"
            class='circle__button'
            @click="onClickMore(type)"
          >
            もっと表示する
          </LinkButton>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import makeHead from "~/utils/makeHead.js"
import SubHeader from "~/components/organisms/SubHeader.vue"
import CircleCard from "~/components/molecules/CircleCard.vue"
import TheContainer from "~/components/atoms/TheContainer.vue"
import TheRow from "~/components/atoms/TheRow.vue"
import TheColumn from "~/components/atoms/TheColumn.vue"
import LinkButton from "~/components/atoms/LinkButton.vue"
import TheSection from "~/components/atoms/TheSection.vue"

import circles from "~/circles/circleList.json"

function sliceCirclesIfNeeded(circles, isMoreVisible) {
  if (isMoreVisible) {
    return circles
  }
  return circles.slice(0, 6)
}

export default {

  components: {
    SubHeader,
    CircleCard,
    TheContainer,
    TheRow,
    TheColumn,
    LinkButton,
    TheSection
  },
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  computed: {
    physicalCircles() {
      return sliceCirclesIfNeeded(
        circles.filter(item => item.type === "physical"),
        this.$store.state.circleList.isMoreVisible.physical
      )
    },
    cultualCircles() {
      return sliceCirclesIfNeeded(
        circles.filter(item => item.type === "cultual"),
        this.$store.state.circleList.isMoreVisible.cultual
      )
    },
    musicalCircles() {
      return sliceCirclesIfNeeded(
        circles.filter(item => item.type === "musical"),
        this.$store.state.circleList.isMoreVisible.musical
      )
    },
    typeColorDict() {
      return {
        physical: 'yellow',
        musical: 'blue',
        cultual: 'green'
      }
    }
  },

  methods: {
    onClickMore(type) {
      this.$store.commit('circleList/setVisible', type)
    }
  },
  head() {
    return makeHead("サークル紹介", "理科大のサークルが大集合")
  }
}
</script>

<style lang="scss" scoped>
.circle {
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

  &__types {
    display: flex;
    margin: 0 0 2rem;

    &__button {
      flex: 0 0 calc(100% / 3);
      max-width: calc(100% / 3);
    }
  }

  &__section {
    margin-bottom: 3rem;

    &__title {
      font-family: $theme-font;
      color: $brown;
      padding: #{$global-header-height + 1rem } 0 0;
      margin: -#{$global-header-height + 1rem } 0 1rem;
      border-bottom: 4px solid;

      &--is-physical {
        border-color: rgba($yellow, 0.5);
      }

      &--is-musical {
        border-color: rgba($blue, 0.5);
      }

      &--is-cultual {
        border-color: rgba($theme-color, 0.5);
      }
    }

    &__footer {
      text-align: center;
    }
  }
}
</style>
