<template>
  <TheContainer>
    <div class="summary__box">
      <TheSection :type="typeColorDict[circleType]">
        <template #title>
          <fa icon="user-clock" fixed-width />
          活動情報
        </template>
        <dl class="summary__box__child">
          <dt class="summary__smallheading">
            活動内容
          </dt>
          <dd class="summary__text">
            <slot name="summary" />
          </dd>
          <dt class="summary__smallheading">
            活動日
          </dt>
          <dd class="summary__text">
            <slot name="days" />
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
          <dd class="summary__text">
            <slot name="club_dues" />
          </dd>
        </dl>
      </TheSection>
      <TheSection :type="typeColorDict[circleType]">
        <template #title>
          <fa icon="user-friends" fixed-width />
          サークル概要
        </template>
        <dl class="summary__box__child">
          <dt class="summary__smallheading">
            所属人数
          </dt>
          <dd class="summary__text">
            <slot name="people_all" />
            (男子 : <slot name="people_male" />、女子 :
            <slot name="people_female" />)
          </dd>
          <dt class="summary__smallheading">
            代表者氏名
          </dt>
          <dd class="summary__text">
            <slot name="leader" />
          </dd>
          <template v-if="$slots.qualification">
            <dt class="summary__smallheading">
              入部条件
            </dt>
            <dd class="summary__text">
              <slot name="qualifications" />
            </dd>
          </template>
        </dl>
      </TheSection>
      <TheSection
        v-if="
          twitter_ids_with_link ||
            $slots.url ||
            $slots.email ||
            $slots.instagram_ids
        "
        :type="typeColorDict[circleType]"
      >
        <template #title>
          <fa icon="mobile-alt" fixed-width />
          公式アカウント
        </template>
        <dl class="summary__box__child">
          <template v-if="twitter_ids_with_link">
            <dt class="summary__smallheading">
              Twitter
            </dt>
            <dd class="summary__text" v-html="twitter_ids_with_link" />
          </template>
          <template v-if="$slots.url">
            <dt class="summary__smallheading">
              ホームページ
            </dt>
            <dd class="summary__text">
              <a
                :href="$slots.url[0].text.trim()"
                target="_blank"
                rel="noopener"
              >
                {{ $slots.url[0].text.trim() }}
              </a>
            </dd>
          </template>
          <template v-if="$slots.email">
            <dt class="summary__smallheading">
              新入生連絡先
            </dt>
            <dd class="summary__text">
              <a
                :href="`mailto:${$slots.email[0].text.trim()}`"
                target="_blank"
                rel="noopener"
              >
                {{ $slots.email[0].text.trim() }}
              </a>
            </dd>
          </template>
          <template v-if="$slots.instagram_ids">
            <dt class="summary__smallheading">
              Instagram
            </dt>
            <dd class="summary__text">
              <slot name="instagram_ids" />
            </dd>
          </template>
        </dl>
      </TheSection>
    </div>
    <div class="linkbutton">
      <LinkButton to="/circles/" :type="typeColorDict[circleType]">
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
  },
  props: {
    circleType: {
      type: String
    }
  },
  computed: {
    twitter_ids_with_link() {
      if (!this.$slots.twitter_ids) {
        return null
      }

      let raw_text = this.$slots.twitter_ids[0].text.trim()
      return raw_text.replace(
        /@(\w+)/gm,
        '<a href="https://twitter.com/$1" target="_blank" rel="noopener">@$1</a>'
      )
    },
    typeColorDict() {
      return {
        physical: "yellow",
        musical: "blue",
        cultual: "green"
      }
    }
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
