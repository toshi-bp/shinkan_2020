<template>
  <div class="head">
    <TheContainer>
      <div class="head__flex">
        <img src="~/assets/image/symbol.svg" class="head__logo">
        <div class="head__main">
          <h1 class="head__catchcopy">
            <span class="head__catchcopy__text">
              開いた向こうに、
            </span>
            <span class="head__catchcopy__text">
              見えるもの。
            </span>
          </h1>
          <p class="head__lead">
            <span class="head__lead__text">2020年度東京理科大学</span><!--
            --><span class="head__lead__text">野田地区新入生歓迎ガイダンス</span><!--
            --><span class="head__lead__text">(課外活動ガイダンス)</span>
          </p>
          <p class="head__lead">
            2020年4月11日(土) 11:00〜15:00
          </p>
          <p class="comingsoon">
            近日公開
          </p>
          <p class="head__lead">
            <a href="https://twitter.com/tusnodashinan" target="_blank" rel="noopener">
                <fa :icon="['fab', 'twitter']" fixed-width />
                @tusnodashinkan
            </a>
          </p></p>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"
import LinkButton from "~/components/atoms/LinkButton.vue"
import HomeHead from "~/components/organisms/HomeHead.vue"
import HomeTheme from "~/components/organisms/HomeTheme.vue"
import HomeAbout from "~/components/organisms/HomeAbout.vue"
import HomeInformation from "~/components/organisms/HomeInformation.vue"
import HomeEvents from "~/components/organisms/HomeEvents.vue"
import HomeTwitter from "~/components/organisms/HomeTwitter.vue"

export default {
  components: {
    TheContainer,
    LinkButton,
    HomeHead,
    HomeTheme,
    HomeAbout,
    HomeInformation,
    HomeEvents,
    HomeTwitter,
  }
}
</script>

<style lang="scss" scoped>
.head {
  $logo-width: 15rem;

  &__flex {
    display: flex;
    height: calc(100vh - #{$global-header-height});
    align-items: center;
    justify-content: center;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }

  &__logo {
    flex: 0 0 $logo-width;
    max-width: $logo-width;
    display: block;
    width: 100%;
    height: auto;
    margin: 0 0 1rem;
    @include media-breakpoint-down(sm) {
      flex: none;
      max-width: 10rem;
    }
  }

  &__main {
    padding-left: 3rem;
    flex: 0 0 calc(100% - #{$logo-width});
    max-width: calc(100% - #{$logo-width});

    @include media-breakpoint-down(sm) {
      flex: none;
      padding: 0;
      max-width: 100%;
    }
  }

  &__catchcopy {
    font-size: 2rem;
    font-family: $theme-font;
    color: $brown;
    display: inline-block;
    line-height: 1.4;
    margin: 0 0 1rem;

    @include media-breakpoint-down(sm) {
      font-size: 1.5rem;
      padding: 0;
    }
    &__text {
      display: inline-block;
    }
  }

  &__lead {
    font-family: $sub-font;
    margin-bottom: 0.5rem;

    &__text {
      display: inline-block;
    }
  }
}

.comingsoon {
    color: $muted;
    font-family: $sub-font;
    font-size: 1rem;
}
</style>
