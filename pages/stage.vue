<template>
  <div>
    <SubHeader>
      <template #title>
        団体紹介ステージ
      </template>
    </SubHeader>
    <header>
      <TheContainer>
        <TheSection class="stage__header">    
          <p class="stage__description">
            団体紹介ステージとはかくかくしかじか
        　</p>
          <h2 class="stage__subtitle">
            <fa icon="door-open" fixed-width /> 場所
          </h2>
            <p class="stage__article">
              森戸記念体育館
          　</p>
          <h2 class="stage__subtitle">
            <fa icon="door-open" fixed-width /> 時間帯
          </h2>
            <p class="stage__article">
              00:00～00:00
          　</p>
        </TheSection>
        <div class="stage__timetable">
          <fa :icon="['far', 'clock']" fixed-width />TIME TABLE
        </div>
        <TheSection class="stage__box" type="blue">
          <dl class="stage__box__child">
            <dt class="stage__time">
                00:00～00:00
            </dt>
            <dd class="stage__text">
                開会式
            </dd>
            <dt class="stage__time">
                00:00～00:00
            </dt>
            <dd class="stage__text">
                開会式
            </dd> <dt class="stage__time">
                00:00～00:00
            </dt>
            <dd class="stage__text">
                開会式
            </dd> <dt class="stage__time">
                00:00～00:00
            </dt>
            <dd class="stage__text">
                開会式
            </dd>
          </dl>
        </TheSection>
      </TheContainer>
    </header>
  </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"
import SubHeader from "~/components/organisms/SubHeader.vue"
import TheSection from "~/components/atoms/TheSection.vue"

export default {
  components: {
    TheContainer,
    SubHeader,
    TheSection
  }
}
</script>

<style lang="scss" scoped>
.stage{
    &__header {
      margin: 0 0 4rem;
    }

    &__subtitle {
      margin: 0;
      font-size: 1rem;
      font-family: $sub-font;
      margin: 0 0 0.5rem;
      color: $theme-color;
    }

    &__description{
      font-size: 1rem;
      margin: 0 0 2rem;
    }

    &__article {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0 0 2rem;
      &:last-child{
        margin: 0;
      }

      &__small {
        font-size: 1rem;
        color: $muted;
      }
    }

    &__timetable {
        margin: 0 0 0.5rem;
        font-family: $theme-font;
        font-size: 1.5rem;
        color: $brown;
      }

    &__box {
      margin: 0 0 4rem; 
     
      &__child{
        margin: 0;
      }
    }

    &__time {
      font-size: 1.2rem;
      float: left;
    }

    &__text {
      font-size: 1.2rem;
      padding: 0 0 0.5rem 10rem;
      margin: 0 0 1rem;
      &:last-child{
        margin: 0;
      }
      border-bottom: 2px solid #333;
    }
}
</style>
