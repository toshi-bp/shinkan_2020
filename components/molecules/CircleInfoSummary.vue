<template>
  <TheContainer>
    <div class="summary__box">
      <TheSection>
        <template #title>
          <fa icon="user-clock" fixed-width />
          活動情報
        </template>
        <dl class="summary__box__child">
          <dt class="summary__smallheading">
            活動内容
          </dt>
          <dd class="summary__text">
            <slot name="content" />
          </dd>
          <dt class="summary__smallheading">
            活動日
          </dt>
          <dd class="summary__text">
            <slot name="day" />
          </dd>
          <dt class="summary__smallheading">
            活動場所
          </dt>
          <dd class="summary__text">
            <slot name="place" />
          </dd>
          <dt class="summary__smallheading">
            部費
          </dt>
          <dd v-if="year" class="summary__text">
            年あたり<slot name="cost" />円
          </dd>
          <dd v-else-if="month" class="summary__text">
            月あたり<slot name="cost" />円
          </dd>
          <dd v-else class="summary__text">半年あたり<slot name="cost" />円</dd>
        </dl>
      </TheSection>
      <TheSection>
        <template #title>
          <fa icon="user-friends" fixed-width />
          サークル概要
        </template>
        <dl class="summary__box__child">
          <dt class="summary__smallheading">
            所属人数
          </dt>
          <dd class="summary__text">
            <slot name="people" />
          </dd>
          <dt class="summary__smallheading">
            代表者氏名
          </dt>
          <dd class="summary__text">
            <slot name="leader" />
          </dd>
          <dt class="summary__smallheading">
            入部条件
          </dt>
          <dd class="summary__text">
            <slot name="condition" />
          </dd>
          <dt class="summary__smallheading">
            備考
          </dt>
          <dd class="summary__text">
            <slot name="remarks" />
          </dd>
        </dl>
      </TheSection>
      <TheSection>
        <template #title>
          <fa icon="mobile-alt" fixed-width />
          公式アカウント
        </template>
        <dl class="summary__box__child">
          <dt class="summary__smallheading">
            Twitter
          </dt>
          <dd class="summary__text">
            <slot name="twitter" />
          </dd>
          <dt class="summary__smallheading">
            ホームページ
          </dt>
          <dd class="summary__text">
            <slot name="homepage" />
          </dd>
          <dt class="summary__smallheading">
            新入生連絡先
          </dt>
          <dd class="summary__text">
            <slot name="contact" />
          </dd>
          <dt class="summary__smallheading">
            Instagram
          </dt>
          <dd class="summary__text">
            <slot name="instagram" />
          </dd>
        </dl>
      </TheSection>
    </div>
    <div class="linkbutton">
      <LinkButton to="/circles/">
        サークル一覧
      </LinkButton>
    </div>
  </TheContainer>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"
import LinkButton from "~/components/atoms/LinkButton.vue"
import TheSection from "~/components/atoms/TheSection.vue"

export default {
  components: {
    TheContainer,
    LinkButton,
    TheSection
  }
}
</script>

<style lang="scss" scoped>
.summary {
  &__title {
    font-family: $theme-font;
  }

  &__box {
    width: 100%;
    margin: 0 center;
    &__child {
      display: block;
      margin: 0;
    }
  }

  &__smallheading {
    margin: 0;
    font-size: 1rem;
    font-family: $sub-font;
    margin: 0 0 0.5rem;
  }

  &__text {
    margin: 0 0 1rem;

    &:last-child {
      margin: 0;
    }
  }
}

.linkbutton {
  text-align: center;
  padding: 0 0 2rem;
}
</style>
