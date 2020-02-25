<template class="index">
  <div>
    <div class="theme">
      <img src="~/assets/image/symbol.svg" class="theme__logo">
      <h1 class="theme__catchcopy">
        <div class="theme__catchcopy__1">開いた向こうに、</div>
        <div class="theme__catchcopy__2"> 見えるもの</div>
      </h1>
    </div>
    <div class="concept">
      <div class="back">
        <TheContainer>
            <div class="concept__box">
              <div class="concept__header">
                <h2 class="concept__title">CONCEPT</h2>
                <p class="concept__tobira">「扉」</p>
              </div>
              <div class="concept__body">
                <p class="concept__msg">
                  新入生の皆さんには、<br>
                  想像を超える<br>
                  新しい生活が待っています。<br><br>

                  自分だけの扉を開いて<br>
                  歩み出してみましょう。
                </p>
              </div>
            </div>
        </TheContainer>
      </div>
    </div>
      <div class="body">
      <TheContainer>
        <div class="information">
          <h2 class="information__title">INFORMATION</h2>
            <div class="information__main">
              <nuxt-link to="/circle/" class="information__box information__circle" >
                <p class="information__circle__title">サークル紹介</p>
                <p class="information__circle__acticle">各サークルが講義棟の教室にて勧誘を行います。<br>00:00~00:00<br>@講義棟</p>
                <!-- 矢印マークのアイコンが欲しい -->
              </nuxt-link>
              <nuxt-link to="/group/" class="information__box information__group">
                <p class="information__group__title">団体紹介ステージ</p>
                <p class="information__group__acticle">新歓参加団体がステージにて実演を行います。<br>00:00~00:00<br>@体育館</p>
              </nuxt-link>
            </div>
          </div>
        <div class="twitter">
          <h2 class="twitter__title"><fa :icon="['fab', 'twitter']" fixed-width/>Twitter</h2>
          <a class="twitter-timeline" data-width="500" data-height="1000" href="https://twitter.com/tusnodashinkan?ref_src=twsrc%5Etfw">Tweets by tusnodashinkan</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
     </TheContainer>
   </div>
  </div>

</template>
  

<script>
  import TheContainer from "~/components/atoms/TheContainer.vue";

  export default {
    components: {
      TheContainer,
    }
  }
</script>

<style lang="scss" scoped>
  .back {
    background-image: url(~@/assets/image/back.svg);
    background-size: cover;
    width: 100%;
    padding: 6%;
    @include media-breakpoint-down(sm) {
      background-image: url(~@/assets/image/back_sm.svg);
    }
  }

  // .container{
  //   margin:0 auto;
  //   width:100%;
  //   text-align:center;
  //   padding:4% 3rem;
  //   @include media-breakpoint-down(sm){
  //    margin:0 0;
  //    }
  // }

  .theme {
    display: flex;
    text-align: center;
    height: calc(100vh - #{$global-header-height});
    align-items: center;
    justify-content: center;
    @include media-breakpoint-down(sm){
      flex-direction: column;
    }
    
    &__logo {
      display: inline-block;
      width: 20%;
      @include media-breakpoint-down(sm) {
        width: 40%;
      }
    }

    &__catchcopy {
      font-size: 35px;
      font-family: $theme-font;
      color: $brown;
      display: inline-block;
      padding-left: 10rem;
      width: 50%;
      @include media-breakpoint-down(sm){
        font-size: 30px;
        width: 70%;
        margin: 0 auto;
        padding: 0;
      }
      &__1{
        display: inline-block;
      }
      &__2{
        display: inline-block;
      }
    }
  }

  .concept {
    width: 100%;
    display:flex;
    $box-width: 50rem;//二つの箱の幅
    $shift-width: 5rem;//移動する距離
    $header-size: 40rem;//前面の四角の大きさ
    
    &__title {
      text-align:left;
      margin: 0 0 0.5rem;
      font-family: $theme-font;
      color:$brown;
    }

    &__box {
      display: flex;
      position: relative;
      margin: 0 0 5rem;
      text-align: center;
    }

    &__header {
      position: absolute;
      size: $header-size;
      background-color: $yellow;
      z-index:2;
      @include media-breakpoint-down(sm) {
        background-color: rgba($yellow, 0.8);
      }
    }

    &__body {
      position: absolute;
      width: calc(#{$box-width} - #{ - 10rem + 5rem});
      background-color: rgba($yellow, 0.8);
      z-index:1;
      margin:2.5rem 0 0 $shift-width;
      padding: 2rem 1rem 2rem calc(#{$header-size} - 1rem - #{$shift-width});
      @include media-breakpoint-down(sm){
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0.5;
      }     
    }
  
    &__tobira {
      // position:absolute;
      // top:6rem;
      // left:10rem;
      font-size: 3rem;
      display: inline-block;
      color: #fff;
      font-family: $theme-font;
      @include media-breakpoint-down(sm){
        position: absolute;
        top: 1rem;
        margin: 0 auto;
        font-size: 40px;
      }
    }
 
    &__msg {
      // position:absolute;
      // top:4rem;
      // left:32rem;
      font-size:1rem;
      display:inline-block;
      margin-bottom:-16px;
      text-align:center;
      color:#fff;
      font-family: $sub-font;
      @include media-breakpoint-down(sm){
        color: #fff;
        position: absolute;
        top: 5rem;
        left: 8rem;
      }
    }
  }
  
.information{
  
   &__title{
      text-align:left;
      margin-bottom:0.5rem;
      font-family: $theme-font;
      color:$brown;
    }
.information{
  
   &__title{
      text-align:left;
      margin-bottom:0.5rem;
      font-family: $theme-font;
      color:$brown;
    }
.information{
  
   &__title{
      text-align:left;
      margin-bottom:0.5rem;
      font-family: $theme-font;
      color:$brown;
    }

   &__main{
    // position:relative;
    @include media-breakpoint-down(sm){
       flex-direction:column;
     }
   }

    &__box{
     height:16rem;
     width:42%;
     background-color:$blue;
     color:#fff;
     display:inline-block;
     opacity:1;
     margin-bottom:10%;
     transition:all 0.2s;
     @include media-breakpoint-down(sm){
       width:100%;
       margin-bottom:1%;
     }
    }
    
    &__box:hover{
      opacity:0.7;
      text-decoration: none;
    }

   &__circle{
    // position:absolute;
    &__title{
      margin-top:4rem;
      text-align:center;
      font-size:1.8rem;
      font-family: $sub-font;
    }
    &__article{
      font-size:1.2rem;
      text-align:center;
      @include media-breakpoint-down(sm){
       font-size:0.8rem;
     }
    }
   }

   &__group{
    //  position:absolute;
    //  left:34.1rem; 
    margin-bottom:10%;
    &__title{
      margin-top:4rem;
      text-align:center;
      font-size:1.8rem;
      font-family: $sub-font;
    }
    &__article{
      font-size:1.2rem;
      text-align:center;
      @include media-breakpoint-down(sm){
       font-size:0.8rem;
     }
    }
    
   }
 
  }

.twitter{
  text-align:center;
  margin-left:8%;
  margin-bottom:3rem;
  &__title{
      text-align:left;
      margin-bottom:0.5rem;
      font-family: $theme-font;
      color:$brown;
    }
}
.twitter-timeline{
   color:$brown;
  @include media-breakpoint-down(sm){
    width: 300;
    height: 600;
  }
}
</style>
