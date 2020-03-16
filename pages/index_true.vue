<template class="index">
  <div>
    <HomeHead />
    <HomeTheme />
    <HomeAbout />
    <TheContainer>
      <HomeEvents />
    </TheContainer>
    <HomeInformation />
    <!-- <TheContainer>
      <HomeTwitter />
    </TheContainer> -->
  </div>
</template>

<script>
import makeHead from "~/utils/makeHead.js"
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
    HomeTwitter
  },
  head() {
    return makeHead()
  }
}
</script>

<style lang="scss" scoped></style>
