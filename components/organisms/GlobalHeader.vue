<template>
  <div>
    <header class="header">
    <nuxt-link to="/" class="header__title">理科大野田地区 新歓２０２０</nuxt-link>
    <!-- <nuxt-link to="/about/">新館って何？</nuxt-link> -->
    <div class="header__date">
      <span class="header__date__number">４</span>月<span class="header__date__number">11</span>日（土）
    </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header {
  box-shadow: 0 1px 6px 1px rgba(#000, 0.16);
  height: $global-header-height;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-index-global-header;
  background: $theme-color;
  @include media-breakpoint-down(sm){
    height: 3.2rem;
  }
   @include media-breakpoint-down(md){
    height: 3.6rem;
  }
  &__title{
    color:#fff;
    font-family:$theme-font;
    font-size:24px;    
    display:inline-block;
    margin: 0.8rem 0 1.15rem 2rem;
    text-decoration: none;
      @include media-breakpoint-down(sm){
        font-size:20px;
        margin:0.6rem 0 0.6rem 1.5rem;
      }
       @include media-breakpoint-down(md){
        font-size:22px;
        margin:0.7rem 0 0.6rem 1.5rem;
      }
  }
  &__date{
    color:#fff;
    font-family:$theme-font;
    font-size:16px;    
    display:inline-block;
    //float:right;
    margin: 0 0 1.15rem 2rem;
     @include media-breakpoint-down(sm){
        font-size:14px;
        margin:0.6rem 0 0.6rem 1.5rem;
      }
       @include media-breakpoint-down(md){
        // font-size:16px;
        margin:0.6rem 0 0.6rem 1.5rem;
      }
  &__number{
    font-size:22px;
     @include media-breakpoint-down(sm){
        font-size:18px;
      }
     @include media-breakpoint-down(md){
        font-size:20px;
      }
    }
  }
}
</style>
