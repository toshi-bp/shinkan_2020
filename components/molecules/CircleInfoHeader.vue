<template>
  <div>
    <SubHeader>
      <template #title>
        サークル紹介
      </template>
    </SubHeader>
    <header>
      <TheContainer>
        <div class="info-header">
          <figure
            :style="{
              'background-image': `url(${require('~/assets/image/symbol.png')})`
            }"
            class="info-header__img"
          />
          <div class="info-header__info">
            <h2 class="info-header__info__title">
              <slot name="title" />
            </h2>
            <p class="info-header__info__item">
              <!--fa icon="star" fixed-width class="info-header__icon"/-->
              <slot name="lead" />
            </p>
            <p class="info-header__info__item">
              <fa icon="map-pin" fixed-width class="info-header__icon" />
              <slot name="booth" />
            </p>
          </div>
        </div>
      </TheContainer>
    </header>
  </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"
import SubHeader from "~/components/organisms/SubHeader.vue"

export default {
  components: {
    TheContainer,
    SubHeader
  }
}
</script>

<style lang="scss" scoped>
.info-header {
  display: flex;
  align-items: center;
  margin: 0 0 3rem;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }

  &__info {
    margin: 0;
    flex: 1;
    padding: 0 0 0 1.5rem;

    @include media-breakpoint-down(sm) {
      padding: 1rem 0 0;
      text-align: center;
    }

    &__item {
      font-family: $sub-font;
      font-size: 1rem;
      margin: 0;
    }

    &__title {
      font-family: $theme-font;
      font-size: 1.5rem;
      margin: 0;
    }
  }

  &__img {
    width: 15rem;
    height: 15rem;
    background: center center / contain no-repeat;
    border: 1px solid $muted;
    margin: 0;
  }

  &__icon {
    opacity: 0.8;
  }
}
</style>
