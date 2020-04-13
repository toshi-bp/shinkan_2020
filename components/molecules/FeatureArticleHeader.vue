<template>
  <header class="info-header">
  <TheContainer class="info-header__main">
    <h1
        class="info-header__title"
      >
        <slot name="title"/>
      </h1>
      <!-- <ul class="info-header__info">
        <li class="info-header__info__item">
          <fa icon="music" class="info-header__icon" fixed-width/>
          <slot name="organizer"/>
        </li>
      </ul> -->
    </TheContainer>
  </header>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue';
import SubHeader from '~/components/organisms/SubHeader.vue';

export default {
  components: {
    TheContainer,
    SubHeader,
  },
}
</script>

<style lang="scss" scoped>
.info-header {
  text-align: left;
  overflow: hidden;
  //padding-top: 2rem;
  //padding-bottom: 6rem;
  //background-color: $theme-color;
  color: rgba(255,255,255,0.85);

  &__main {
    // padding-top: 6rem;
    // padding-bottom: 6rem;

    // @include media-breakpoint-down(sm) {
    //   padding-top: 2.75rem;
    //   padding-bottom: 2.75rem;
    // }
  }

  &__icon {
    opacity: 0.5;
  }

  &__greenbox {
    display: inline-block;
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: bold;
    margin: 0 0 .75rem 0;
    color: $theme-color;
    line-height: 1;
    background: #fff;
  }

  &__title {
    font-family: $sub-font;
    line-height: 1.4;
    font-size: 1.5rem;
    margin: 0 0 .75rem;
    color:$brown;

  }

  &__info {
    $info-spacing: 0.5rem;
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -#{$info-spacing};
    font-size: 0.9rem;

    &__item {
      padding: 0 $info-spacing;
      border-right: 1px solid #ccc;
      margin-bottom: $info-spacing;


      &:last-child {
        border: 0;
      }

      @include media-breakpoint-down(sm) {
        border: 0;
      }
    }
    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }
}
</style>
