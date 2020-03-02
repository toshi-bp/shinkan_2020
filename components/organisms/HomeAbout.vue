<template>
  <div class="about">
      <TheContainer>
         <div class="about__box">
            <div class="about__content">
              <h2 class="about__title">
                ABOUT
                <small class="about__title__small">新歓とは</small>
              </h2>
              <p class="about__article">
                新歓とは「新入生歓迎ガイダンス」の略称です。<br />
                講義棟では各サークルによる活動の紹介が各教室で行われます。<br />
                また体育館では、ステージ上でパフォーマンスが繰り広げられます。<br />
                全サークルが集まって新入生勧誘をするのは1年にこの日だけ！ 
              </p>
            </div>
          <img src="~/assets/image/AboutPhoto.jpg" class="about__photo">
        </div>
      </TheContainer>
    </div>
</template>

<script>
import TheContainer from "~/components/atoms/TheContainer.vue"

export default {
  components: {
    TheContainer,
  }
}
</script>

<style lang="scss" scoped>
.about {
  margin: 3rem 0 0;
  padding: 3rem 0;
  background: $blue;
  $box-width: 50rem; //二つの箱の幅
  $shift-width: 5rem; //移動する距離
  $header-size: 35rem; //前面の四角の大きさ

  &__box{
    width: 100%;
    display: flex;
    align-items: flex-start;
  }

  &__content{
    background-color: #fff;
    padding: 2rem;
    width: $header-size;
    margin: 0 -6rem 0 0;
    z-index: 1;
  }
 
  &__title {
    text-align: left;
    margin-bottom: 0.5rem;
    color: $brown;
    font-size: 1.5rem;
    font-family: $theme-font;

    &__small {
      font-size: 1rem;
      font-family: $sans-serif;
    }
  }

  &__article {
    margin: 0;
  }

  &__photo{
    display: block;
    width: 50%;
    height: auto;
    margin-top: 4rem;
    z-index: 0;
  }
  // &__box {
  //   display: flex;
  //   flex-direction: row;
  //   width: 100%;
  //   margin: 0 center;
  //   background-color: #fff;
  //   @include media-breakpoint-down(sm) {
  //     flex-direction: column;
  //   }
  // }
    
  }
</style>