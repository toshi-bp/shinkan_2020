<template>
  <TheContainer>
    <div class="intro" :class="{'intro--active': show}">
      <div class="intro__bg" @click="closeIntro"></div>
      <h1 class="intro__title">
        <button @click="closeIntro" class="intro__close">
          <fa icon="chevron-left" fixed-width/>
        </button>
        {{ area }}
      </h1>
      <section v-if="establishmentsList.length > 0">
        <div
        class="intro__content"
        v-for="item in establishmentsList"
        :key="item.name"
        >
          <EstablishmentInfo
            v-if="item.name == area"
            :imageUrl="item.imageUrl ? require(`~/assets/image/establishments/${item.imageUrl}`) : ''"
            :name="item.name"
            :description="item.description"
          />
        </div>
      </section>
    </div>
  </TheContainer>
</template>

<script>
import EstablishmentInfo from "~/components/CampusMap/EstablishmentInfo.vue"
import TheContainer from "~/components/atoms/TheContainer.vue";

import establishmentsList from "./json/establishmentsList.json"

var area = area

// const AREA_PARAMS = [
//   'コミュニケーション棟',
//   '生協',
//   '講義棟',
//   '7号館',
//   '図書館',
//   '体育館',
//   '中庭',
//   'セブンイレブン',
//   'カナル'
// ];

export default {
  props: {
    show: {
      type: Boolean
    },
    area: {
      type: String
    },
    name: {
      type: String,
    }
  },
  components: {
    EstablishmentInfo,
    TheContainer
  },
  methods: {
    closeIntro() {
      this.$emit('closeIntro');
    },
    closeIfNotAllowedArea() {
      if (!AREA_PARAMS.includes(this.area)) {
        // 許可されていない area パラメータなので、表示しない
        this.closeIntro();
      }
    },
    processAreaName() {
      let area = this.area;
      return area
    }
  },
  computed: {
    establishmentsList() {
      const area = this.processAreaName();

      return establishmentsList.filter(item => {
        return item.name.indexOf(area) !== -1;
      });
    }
   }
}
</script>

<style lang="scss" scoped>
.intro {
  $timing-function: cubic-bezier(1, 0, 0, 1);
  $content-width: 60vw;
  $content-width-md: 100vw;
  $title-height: 3.75rem;

  &__bg {
    z-index: $z-index-map-booths-list-bg;
    position: fixed;
    background: rgba($color, 0.25);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    transition: 0.3s #{$timing-function} all;
    visibility: hidden;
    opacity: 0;

    @at-root {
      .intro--active & {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__title {
    font-family: $sub-font;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: $content-width;
    height: $title-height;
    z-index: $z-index-map-booths-list-header;
    padding: 0 1.5rem;
    background: #fff;

    @include media-breakpoint-down(md) {
      width: $content-width-md;
    }

    transition: 0.3s #{$timing-function} all;
    transform: translateX(100%);

    @at-root {
      .intro--active & {
        transform: translateX(0);
      }
    }
  }

  &__content {
    z-index: $z-index-map-booths-list-content;
    position: fixed;
    background: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    width: $content-width;
    box-shadow: 1px 0 6px 1px rgba(#000, 0.16);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: #{$title-height} 1.5rem 1.5rem;

    @include media-breakpoint-down(md) {
      width: $content-width-md;
    }

    transition: 0.3s #{$timing-function} all;
    transform: translateX(100%);

    @at-root {
      .intro--active & {
        transform: translateX(0);
      }
    }
  }

  &__close {
    appearance: none;
    border: 0;
    background: 0;
    font-size: 1.25rem;
    padding: 0 1rem;
    margin-left: -1rem;
    color: $blue;
    outline: 0;

    &:hover,
    &:focus {
      opacity: 0.75;
    }
  }
}
</style>
