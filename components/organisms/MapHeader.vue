<template>
  <header class="map-header" :class="{'map-header--show': show}">
    <h1 class="map-header__heading">キャンパスマップ</h1>
    <p class="map-header__para" v-if="!isTouchDevice">スクロールでズーム、ドラッグで移動できます。</p>
    <p class="map-header__para" v-else>ズームと移動が可能です。</p>
    <p class="map-header__para">建物・ブースを{{ clickActionName }}すると、そのエリアの企画一覧が表示されます。</p>
  </header>
</template>

<script>
const isTouchDevice = () => {
  if (process.client) {
    if (/android|ipad|iphone|ipod/i.test(navigator.userAgent)) {
      return true;
    }
    return false;
  }
};

export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    isTouchDevice() {
      return isTouchDevice();
    },
    clickActionName() {
      if (isTouchDevice()) {
        return 'タップ';
      }
      return 'クリック';
    }
  }
}
</script>

<style lang="scss" scoped>
.map-header {
  position: fixed;
  top: $global-header-height + 1.5rem;
  left: 1.5rem;
  background: #fff;
  padding: 1.5rem;
  box-shadow: 0 5px 0 rgba(#000, 0.1);

  transition: 1s ease visibility, 1s ease opacity;
  opacity: 0;
  visibility: hidden;

  &--show {
    opacity: 1;
    visibility: visible;
  }

  @include media-breakpoint-down(sm) {
    top: $global-header-height;
    left: 0;
    right: 0;
    border-radius: 0;
    padding: 1rem;
  }

  &__heading {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
  }

  &__para {
    margin: 0 0 0.5rem;

    &:last-child {
      margin: 0;
    }
  }

  &__label {
    color: $link-color;
  }
}
</style>
