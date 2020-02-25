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
   <div class="back">
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
              <p class="information__circle__acticle">各サークルが講義棟の教室にて勧誘を行います。<br>00:00~00:00<br>@講義棟</p>
              <!-- 矢印マークのアイコンが欲しい -->
            </nuxt-link>
            <nuxt-link to="/group/" class="information__box information__group">
              <p class="information__group__tytle">団体紹介ステージ</p>
              <p class="information__group__acticle">新歓参加団体がステージにて実演を行います。<br>00:00~00:00<br>@体育館</p>
            </nuxt-link>
          </div>
        </div>
       <div class="twitter">
         <h2 class="twitter__tytle"><fa :icon="['fab', 'twitter']" fixed-width/>Twitter</h2>
        <a class="twitter-timeline" data-width="500" data-height="1000" href="https://twitter.com/tusnodashinkan?ref_src=twsrc%5Etfw">Tweets by tusnodashinkan</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
       </div>
     </div>
    </div>
    <!--/div-->
   </div>
  </div>

</template>
  

<script>

</script>

<style lang="scss" scoped>

  .back{
    background-image: url(~@/assets/image/back.svg);
    background-size:cover;
    width: 100%;
    padding:6% 0;
    @include media-breakpoint-down(sm) {
      background-image: url(~@/assets/image/back_sm.svg);
    }
  }

  .container{
    margin:0 auto;
    width:100%;
    text-align:center;
    background-color:#fff;
    opacity:0.95;
    padding:4% 0;
    border-radius:3%;
    @include media-breakpoint-down(sm){
     margin:0 0;
     border-radius:20px;
     }
  }

  .theme{
    display:block;
    text-align:center;
    margin:10% 0;
    flex-wrap:wrap;
    @include media-breakpoint-down(sm){
    flex-direction:column;
    margin:30% 0 60% 0;
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
      width:50%;
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
      text-align:left;
      margin-bottom:0.5rem;
      margin-left:8%;
      font-family: $theme-font;
      color:$brown;
      }

   &__box{
      position:relative;
      height:20rem;
      margin-left:8%;
      margin-bottom:5%;
      display:block;
      padding:0 auto;
      text-align:center;
      @include media-breakpoint-down(sm){
        margin-left: 0;
      }
    }

   &__box1{
      position:absolute;
      top:0;
      left:0;
      height:15rem;
      width:84%;
      background-color:$yellow;
      opacity:0.8;
      display:inline-block;
      @include media-breakpoint-down(sm){
       width:100%;
       opacity:0.5;
     }
    }

   &__box2{
      position:absolute;
      top:10%;
      left:6%;
      height:15rem;
      width:84%;
      padding:2rem;
      margin-bottom:5rem;
      background-color:$yellow;
      opacity:0.8;
       @include media-breakpoint-down(sm){
       top:0;
       left:0;
       width:100%;
       opacity:0.5;
     }     
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
        color: #fff;
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
      text-align:left;
      margin-bottom:0.5rem;
      margin-left:8%;
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
    &__tytle{
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
    &__tytle{
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
  &__tytle{
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
