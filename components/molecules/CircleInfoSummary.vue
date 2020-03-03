<template>
  <TheContainer>
    <div>
      <h2 class="summary__title">
        金村さん最高w
      </h2>
      <p class="summary__day">
        <slot name="day" />
      </p>
    </div>
  </TheContainer>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"

export default {
  components: {
    TheContainer
  }
}
</script>

<style lang="scss" scoped>
.summary {
  &__title {
    font-family: $sub-font;
  }
}
</style>
