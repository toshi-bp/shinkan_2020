<template>
  <div>
    <div>
      <!-- <figure
      class="info__img"
      :style="{
        backgroundImage: imageUrl}"
      /> -->
      <img
        :src="imageUrl"
        class="info__img"
      />
      <h2>施設紹介</h2>
      <p class="info__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"

export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    area: {
      type:String,
    },
    name: {
      type: String,
    },
    description: {
      type: String
    }
  },
  components: {
    TheContainer
  },
  methods: {

  },
  // computed: {
  //   establishmentsList() {
  //     return establishmentsList.find(estabInfo => {
  //       establishmentsList.name === area
  //     })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.info {
  &__img {
    background: center center / cover no-repeat;
    background-color: #ccc;
    width: 100%;
    position: relative;
    box-shadow: 0 0.25rem 0 rgba(#000, 0.1);
    margin-bottom: 1rem;
  }
  &__descrition {
    font-size: 1rem;
  }
}
</style>
