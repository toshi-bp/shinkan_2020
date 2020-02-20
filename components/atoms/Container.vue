<template>
  <div class="container" :class="{'container--fluid': fluid}">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .container{
   width:100%;
 }
</style>
