<template>
  <div>
    <SubHeader>
      <template v-slot:title>
        サークル紹介
      </template>
    </SubHeader>
    <TheContainer>
      <div class="circle__types">
        <LinkButton
          v-for="(circles, type) in {
            physical: yellow,
            musical: blue,
            cultual: green
          }"
          :key="type"
          component-is="a"
          :href="`/2020/circles/#heading-${type}`"
          :type="
            {
              physical: 'yellow',
              musical: 'blue',
              cultual: 'green'
            }[type]
          "
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
          <TheColumn v-for="circle in circles" :key="circle.id">
            <CircleCard
              to="/circles/sample/"
              :image-url="
                circle.imageFilename
                  ? require(`~/assets/image/${circle.imageFilename}`)
                  : undefined
              "
              :label-type="circle.type"
              :title="circle.title"
              :place="circle.place"
            />
          </TheColumn>
        </TheRow>
        <div class="circle__section__footer">
          <LinkButton
            v-if="!isMoreVisible[type]"
            component-is="button"
            :type="
            {
              physical: 'yellow',
              musical: 'blue',
              cultual: 'green'
            }[type]"
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
    LinkButton
  },
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isMoreVisible: {
        physical: false,
        musical: false,
        cultual: false
      }
    }
  },
  computed: {
    physicalCircles() {
      return sliceCirclesIfNeeded(
        circles.filter(item => item.type === "physical"),
        this.isMoreVisible.physical
      )
    },
    cultualCircles() {
      return sliceCirclesIfNeeded(
        circles.filter(item => item.type === "cultual"),
        this.isMoreVisible.cultual
      )
    },
    musicalCircles() {
      return sliceCirclesIfNeeded(
        circles.filter(item => item.type === "musical"),
        this.isMoreVisible.musical
      )
    }
  },

  methods: {
    onClickMore(type) {
      this.isMoreVisible = {
        ...this.isMoreVisible,
        [type]: !this.isMoreVisible[type]
      }
    }
  },
  head() {
    return makeHead("サークル紹介", "理科大のサークルが大集合")
  }
}
</script>

<style lang="scss" scoped>
.circle {
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
      padding: #{$global-header-height + 1rem} 0 0;
      margin: -#{$global-header-height + 1rem} 0 1rem;
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
