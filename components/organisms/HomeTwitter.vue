<template>
   <div class="twitter">
          <h2 class="twitter__title">
            <fa :icon="['fab', 'twitter']" fixed-width />Twitter
          </h2>
          <a
            class="twitter-timeline"
            data-width="500"
            data-height="1000"
            href="https://twitter.com/tusnodashinkan?ref_src=twsrc%5Etfw"
          >Tweets by tusnodashinkan</a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
        </div>
</template>

<style lang="scss" scoped>
.twitter {
  text-align: center;
  margin-bottom: 3rem;
  &__title {
    text-align: left;
    margin-bottom: 0.5rem;
    font-family: $theme-font;
    font-size: 1.5rem;
    color: $brown;
  }
}

.twitter-timeline {
  color: $brown;
  @include media-breakpoint-down(sm) {
    width: 300;
    height: 600;
  }
}
</style>