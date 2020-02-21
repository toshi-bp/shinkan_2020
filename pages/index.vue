<template class="index">
  <div>
    <div class="theme">
     <img src="~/assets/image/symbol.svg" class="theme__logo">
     <h1 class="theme__concept">開いた向こうに、見えるもの</h1>
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
        <a class="twitter-timeline" data-width="800" data-height="1600" href="https://twitter.com/tusnodashinkan?ref_src=twsrc%5Etfw">Twitter by tusnodashinkan</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
       </div>
     </div>
  </div>

</template>
  

<script>

</script>

<style lang="scss" scoped>
  .container{
    margin:1rem;
  }

  .theme{
    display:block;
    text-align:center;
    margin:7rem 0;
    &__logo{
    width:20%;
    display:inline-block;
    // margin:4rem;
    }
    &__concept{
      font-size:35px;
      font-family: $theme-font;
      color:$brown;
      display:inline-block;
      padding-left:10rem;
      // margin:4rem;
      }
  }
.concept{
   &__tytle{
      margin-bottom:0.5rem;
      margin-left:3rem;
      font-family: $theme-font;
      color:$brown;
    }

   &__box{
      position:relative;
      height:20rem;
      margin-left:3rem;
    }

   &__box1{
      position:absolute;
      top:0rem;
      left:0rem;
      height:15rem;
      width:60rem;
      background-color:$theme-color;
      opacity:0.6;
       display:inline-block;
    }

   &__box2{
      position:absolute;
      top:2rem;
      left:2rem;
      height:15rem;
      width:60rem;
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
    }
  }

span{
        font-size:3.5rem;
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
   }

    &__box{
     height:16rem;
     width:31rem;
     background-color:$theme-color;
     color:#fff;
     display:inline-block;
     opacity:0.6;
    } 

   &__circle{
    position:absolute;
    margin-left:3rem;
    margin-right:1rem;
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
</style>
