<template>
  <header>
    <TheContainer>
      <div class="info-header">
        <img src="~/assets/image/symbol.png" alt="画像よ" class="info-header__img">
        <ul class="info-heder__info">
          <li
          class="info-header__info__title"
          >
            <slot name="title" />
          </li>
          <li
          class="info-header__info__item"
          >
            <!--fa icon="star" fixed-width class="info-header__icon"/-->
            <slot name="lead" />
          </li>
          <li
          class="info-header__info__item"
          >
            <fa icon="map-pin" fixed-width class="info-header__icon"/>
            <slot name="place" />
          </li>
        </ul>
      </div>
    </TheContainer>
  </header>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue";

export default {
  components: {
    TheContainer,
  }
}
</script>

<style lang="scss" scoped>
.info-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.7rem solid rgba($blue, $alpha: 1.0);
  border-bottom: none;
  &__info {
    list-style: none;
    padding: 0 0;
    &__title {
      font-family: $sub-font;
      list-style: none;
      font-size: 1.5rem;
      color: $brown;
      margin-bottom: 0;
    }

    &__item {
      font-family: $sub-font;
      list-style: none;
      font-size: 1rem;
      margin-bottom: 0;
    }
  }

  &__img {
    width: 15rem;
  }
  &__icon {
    opacity: 0.8;
  }
}
</style>
