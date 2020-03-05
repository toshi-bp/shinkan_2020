<template>
  <span
    class="circle-card-label"
    :style="{
      backgroundColor: labelColor
    }"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "theme"
    }
  },
  computed: {
    labelColor() {
      const typesDict = {
        cultual: "#97c031", //文化系
        //color: "#3b3636",
        musical: "#e9d431", //音楽系
        //cream: "#f8e994",
        physical: "#8ed0e3" //運動系
      }

      if (this.type in typesDict) {
        return typesDict[this.type]
      }
      return typesDict["theme"]
    }
  }
}
</script>

<style lang="scss" scoped>
.circle-card-label {
  display: inline-block;
  color: #fff;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 2;
  padding: 0 0.5rem;
}
</style>
