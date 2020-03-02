<template class="index">
  <div>
    <HomeHead />
    <HomeTheme />
    <HomeInformation />
    <div class="body">
      <TheContainer>
        <HomeEvents />
        <HomeTwitter />
      </TheContainer>
    </div>
  </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"
import LinkButton from "~/components/atoms/LinkButton.vue"
import HomeHead from "~/components/organisms/HomeHead.vue"
import HomeTheme from "~/components/organisms/HomeTheme.vue"
import HomeInformation from "~/components/organisms/HomeInformation.vue"
import HomeEvents from "~/components/organisms/HomeEvents.vue"
import HomeTwitter from "~/components/organisms/HomeTwitter.vue"

export default {
  components: {
    TheContainer,
    LinkButton,
    HomeHead,
    HomeTheme,
    HomeInformation,
    HomeEvents,
    HomeTwitter,
  }
}
</script>

<style lang="scss" scoped>

</style>
