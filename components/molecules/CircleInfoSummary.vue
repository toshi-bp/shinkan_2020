<template>
  <TheContainer>
    <div class="summary__box">
      <h2 class="summary__heading">
        <fa icon="user-clock" fixed-width />
        活動情報
      </h2>
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

      <h2 class="summary__heading">
        <fa icon="user-friends" fixed-width />
        サークル概要
      </h2>
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

      <h2 class="summary__heading">
        <fa icon="mobile-alt" fixed-width />
        公式アカウント
      </h2>
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

export default {
  components: {
    TheContainer,
    LinkButton
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
    padding: 2rem 1rem; // &__child と合わせて横 2rem
    &__child {
      display: block;
      padding: 0 0 2rem 0;
      &:last-child {
        padding: 0 0 0 0rem;
      }
    }
  }

  &__heading {
    font-size: 1.5rem;
    font-family: $theme-font;
  }

  &__smallheading {
    font-size: 1rem;
    padding: 0 0;
    font-weight: normal;
    font-family: $sub-font;
  }

  &__text {
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
