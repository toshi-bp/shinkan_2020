<template>
  <div>
    <footer class="footer">
    <div>
      <img src="~/assets/image/symbol.png" class="footer__logo">
      <p class="footer__welcome">入れ。</p>
    </div>
    <div class="footer__copyright">
      <p>2020年度野田地区新入生歓迎ガイダンス実行委員会</p>
    </div>
    <div class="footer__list">
      <ul>
        <li class="footer__list__item"><fa :icon="['fab', 'twitter']" fixed-width/></li>
        <li class="footer__list__item"><fa icon="envelope" fixed-width/></li>
      </ul>
    </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position:relative;
  height: 14rem;
  background: $color;
  // bottom:0 今後残すか考える;
  z-index: $z-index-global-footer;
  @include media-breakpoint-down(sm){
    height: 3.2rem;
  }
   @include media-breakpoint-down(md){
    height: 3.6rem;
  }
  
  &__logo{
    width: 10rem;
    margin: 2rem 0 1rem 2rem ;

  }
  &__copyright{
    color:#fff;
    font-family:$theme-font;
    font-size:15px;    
    display:inline-block;
    margin: 0 0 1.15rem 2rem;
      @include media-breakpoint-down(sm){
        font-size:20px;
        margin:0.6rem 0 0.6rem 1.5rem;
      }
       @include media-breakpoint-down(md){
        font-size:22px;
        margin:0.7rem 0 0.6rem 1.5rem;
      }
  }
  &__welcome{
    color:#fff;
    font-family:$theme-font;
    font-size:30px;    
    display:inline-block;
    margin: 0 0 1.15rem 4rem;
      @include media-breakpoint-down(sm){
        font-size:20px;
        margin:0.6rem 0 0.6rem 1.5rem;
      }
       @include media-breakpoint-down(md){
        font-size:22px;
        margin:0.7rem 0 0.6rem 1.5rem;
      }
 }
  &__list{
  position:absolute;
  top:4rem;
  right: 2rem;
  //margin:0 2rem 0 0;
  display:inline-block;

    &__item{
    list-style:none;
    color:#fff;
    
    }
  }
  
}
</style>
