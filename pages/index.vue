<template class="index">
  <div>
    <div class="theme">
     <img src="~/assets/image/symbol.svg" class="theme__logo">
     <h1 class="theme__concept">
       <div class="theme__concept__1">開いた向こうに、
       </div>
       <div class="theme__concept__2"> 見えるもの
       </div>
       </h1>
   </div>
   <div class="body">
     <div class="container">
       <div class="concept">
         <h2 class="concept__tytle">CONCEPT</h2>
          <div class="concept__box">
            <div class="concept__box1">
            </div>
            <div class="concept__box2">
            </div>
            <div class="concept__box__text">
             <p class="concept__tobira">「<span>扉</span>」</p>
             <p class="concept__msg">
               新入生の皆さんには、<br>
               想像を超える<br>
               新しい生活が待っています。<br><br>

               自分だけの扉を開いて<br>
               歩み出してみましょう。
             </p>
            </div>
          </div>
       </div>
       <div class="information">
         <h2 class="information__tytle">INFORMATION</h2>
          <div class="information__main">
            <nuxt-link to="/circle/" class="information__box information__circle" >
              <p class="information__circle__tytle">サークル紹介</p>
              <!-- 矢印マークのアイコンが欲しい -->
            </nuxt-link>
            <nuxt-link to="/group/" class="information__box information__group">
              <p class="information__group__tytle">団体紹介ステージ</p>
            </nuxt-link>
          </div>
        </div>
       </div>
       <div class="twitter">
        <a class="twitter-timeline" data-width="500" data-height="1000" href="https://twitter.com/tusnodashinkan?ref_src=twsrc%5Etfw">Tweets by tusnodashinkan</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
       </div>
      </div>
  </div>

</template>
  

<script>

</script>

<style lang="scss" scoped>
  .container{
    margin:0 auto;
    @include media-breakpoint-down(sm){
     margin:0;
     }
  }

  .theme{
    display:block;
    text-align:center;
    margin:7.5rem 0;
    flex-wrap:wrap;
    @include media-breakpoint-down(sm){
    flex-direction:column;
     }
    &__logo{
    display:inline-block;
    width:20%;
    @include media-breakpoint-down(sm){
    width:40%;
     }
    }
    &__concept{
      font-size:35px;
      font-family: $theme-font;
      color:$brown;
      display:inline-block;
      padding-left:10rem;
      width:40%;
      @include media-breakpoint-down(sm){
      font-size:30px;
      width:70%;
      margin:0 auto;
      padding:0;
      }
      &__1{
        display:inline-block;
      }
      &__2{
        display:inline-block;
      }
    }
  }
.concept{
    // display:flex;
   &__tytle{
      margin-bottom:0.5rem;
      margin-left:3rem;
      font-family: $theme-font;
      color:$brown;
    }

   &__box{
      position:relative;
      width:100%;
      height:20rem;
      margin-left:3rem;
      display:block;
      padding:0 auto;
      text-align:center;
      @include media-breakpoint-down(sm){
        margin-left: 0;
      }
    }

   &__box1{
      position:absolute;
      top:0rem;
      left:0rem;
      height:15rem;
      width:80%;
      background-color:$theme-color;
      opacity:0.6;
      display:inline-block;
      @include media-breakpoint-down(sm){
       width:100%;
     }
    }

   &__box2{
      position:absolute;
      top:2rem;
      left:2rem;
      @include media-breakpoint-down(sm){
       top:0;
       left:0;
       width:100%;
     }
      height:15rem;
      width:80%;
      padding:2rem;
      margin-bottom:5rem;
      background-color:$theme-color;
      opacity:0.6;      
    }

   &__tobira{
      position:absolute;
      top:6rem;
      left:10rem;
      font-size:3rem;
      display:inline-block;
      color:#fff;
      font-family: $theme-font;
      @include media-breakpoint-down(sm){
        position: absolute;
        top: 1rem;
        margin: 0 auto;
        font-size: 40px;
      }
    }
 
   &__msg{
      position:absolute;
      top:4rem;
      left:32rem;
      font-size:1rem;
      display:inline-block;
      margin-bottom:-16px;
      text-align:center;
      color:#fff;
      font-family: $sub-font;
      @include media-breakpoint-down(sm){
        color: $brown;
        position: absolute;
        top: 5rem;
        left: 8rem;
      }
    }
  }

span{
    font-size: 40px;
  }

.information{
  
   &__tytle{
      margin-bottom:0.5rem;
      margin-left:3rem;
      font-family: $theme-font;
      color:$brown;
    }

   &__main{
    height:19rem;
    position:relative;
    @include media-breakpoint-down(sm){
       flex-direction:column;
     }
   }

    &__box{
     height:16rem;
     width:40%;
     background-color:$theme-color;
     color:#fff;
     display:inline-block;
     opacity:0.6;
    } 

   &__circle{
    position:absolute;
    margin-right:1%;
    &__tytle{
      margin-top:4rem;
      text-align:center;
      font-size:1.5rem;
      font-family: $sub-font;
    }
   }

   &__group{
     position:absolute;
     left:34.1rem;
    &__tytle{
      margin-top:4rem;
      text-align:center;
      font-size:1.5rem;
      font-family: $sub-font;
    }
   }
 
  }

.twitter{
  text-align:center;
  margin-bottom:3rem;
}
.twitter-timeline{
  @include media-breakpoint-down(sm){
    width: 300;
    height: 600;
  }
}
</style>
