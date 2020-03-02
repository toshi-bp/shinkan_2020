<template>
  <component
    :is="linkComponentIs"
    :to="to || undefined"
    :href="href || undefined"
    class="circle-card"
    :class="{'circle-card--is-link': !!(to || href)}"
    :target="linkTarget"
    :rel="linkTarget === '_blank' ? 'noopener' : undefined"
  >
    <figure
      class="circle-card__img"
      :style="{
        backgroundImage: imageUrl ? `url(${imageUrl})` : '',
        backgroundSize: isImageContain ? 'contain' : 'cover',
      }"
    />
    <div class="circle-card__body">
      <CircleCardLabel
        class="circle-card__label"
        :type="labelType"
        v-if="labelText"
      >
        {{ labelText }}
      </CircleCardLabel>
      <h3 class="circle-card__title">{{ title }}</h3>
      <p class="circle-card__lead">{{ lead }}</p>
      <p class="circle-card__place"><fa icon="map-pin" fixed-width />{{ place }}</p>
    </div>
  </component>
</template>

<script>
import CircleCardLabel from '~/components/atoms/CircleCardLabel.vue';

export default {
  components: {
    CircleCardLabel,
  },
  props: {
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    isImageContain: {
      type: Boolean,
      default: false,
    },
    labelType: {
      type: String,
      default: 'theme',
    },
    labelText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    lead: {
      type: String,
      default: '',
    },
    place: {
      type: String,
      default: '',
    },
    linkTarget: {
      type: String,
      default: '',
    }
  },
  computed: {
    linkComponentIs() {
      switch (true) {
        case !!this.to:
          return 'nuxt-link';
        case !!this.href:
          return 'a';
        default:
          return 'div';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.circle-card{
  display: block;
  margin: 0 0 2rem;
  color: $color;
  text-decoration: none;
  transition: 0.3s ease all;

  &--is-link:hover{
    opacity: 0.8;
  }

  &__img{
    background: center center / cover no-repeat;
    background-color: #ccc;//後で変える必要あるかも
    width: 100%;
    position: relative;
    margin-bottom: 1rem;
    box-shadow: 0 0.25rem 0 rgba(#000, 0.1);

    &::before {
      content: "";
      display: block;
      padding-top: calc(100% * (2 / 3));
    }
  }

  &__label {
    margin-bottom: 0.25rem;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: 0;
  }

  &__lead {
    margin-bottom: 0;
    font-size: 1rem;
  }

  &__place {
    margin-bottom: 0;
    font-size: 1rem;
  }
}
</style>
