<template>
  <div>
    <p class="comingsoon">
      COMING SOON
    </p>
    <div class="button">
      <LinkButton to="/">
        ホームに戻る
      </LinkButton>
    </div>
  </div>
</template>

<script>
import LinkButton from "~/components/atoms/LinkButton.vue"
import makeHead from "~/utils/makeHead.js";

export default {
  head() {
    return makeHead();
  },
  components: {
    LinkButton
  }
}
</script>

<style lang="scss" scoped>
.comingsoon {
  margin: 20% 0 3rem 0;
  font-family: $theme-font;
  color: $brown;
  font-size: 40px;
  text-align: center;
  animation: 1s header 0.2s ease both;

  @include media-breakpoint-down(sm) {
    font-size: 30px;
    margin: 30% 0 1.5rem 0;
  }

  @keyframes header {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.button {
  display: block;
  text-align: center;
  margin: 0 auto 20% auto;
  @include media-breakpoint-down(sm) {
    margin: 0 auto 30% auto;
  }
}
</style>
