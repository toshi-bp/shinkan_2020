<template>
  <div>
    <SubHeader>
      <template v-slot:title>サークル紹介</template>
    </SubHeader>
    <TheContainer>
      <div class="circle__types">
        <nuxt-link to="/" class="circle__types__link">運動系</nuxt-link>
        <nuxt-link to="/" class="circle__types__link">運動系</nuxt-link>
        <nuxt-link to="/" class="circle__types__link">運動系</nuxt-link>
      </div>
      <TheRow>
        <TheColumn v-for="i in 23" :key="i">
          <CircleCard
            to="/circles/"
            imageUrl="~/assets/image/symbol.png"
            labelType="blue"
            labelText="KANEMURASAN"
            title="金村の会"
            place="RHK本部"
          />
        </TheColumn>
      </TheRow>
      <LinkButton to="/">もっと表示する</LinkButton>
    </TheContainer>
  </div>
</template>

<script>
import makeHead from "~/utils/makeHead.js";
import SubHeader from "~/components/organisms/SubHeader.vue";
import CircleCard from "~/components/molecules/CircleCard.vue";
import TheContainer from "~/components/atoms/TheContainer.vue";
import TheRow from "~/components/atoms/TheRow.vue";
import TheColumn from "~/components/atoms/TheColumn.vue";
import LinkButton from "~/components/atoms/LinkButton.vue";

export default {
  head() {
    return makeHead("サークル紹介", "理科大のサークルが大集合");
  },
  components: {
    SubHeader,
    CircleCard,
    TheContainer,
    TheRow,
    TheColumn,
    LinkButton,
  }
}
</script>

<style lang="scss" scoped>
.circle {
  &__types {
    display: block;
    height: 3rem;
    background: $theme-color;
    margin: 2rem 0;

    &__link {
      color: #fff;
      text-decoration: none;
    }
  }

  &__more{
    border-color: $theme-color;
    border-width: 5px;
    font-size: 1rem;
  }
}
</style>
