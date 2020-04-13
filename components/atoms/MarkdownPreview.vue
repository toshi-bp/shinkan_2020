<template>
  <div
    class="markdown-preview"
    :class="{'markdown-preview--no-strong-highlight': noStrongHighlight}"
    v-html="markdownHtml"
  />
</template>

<script>
export default {
  props: {
    markdownHtml: {
      type: String,
      required: true,
    },
    noStrongHighlight: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.markdown-preview {
  line-height: 1.7;
  font-feature-settings: normal;
  // 以下の padding-top を取り払うと、Markdown 本文の一番最初に見出しがある場合で、
  // かつ、sub-header の次に markdown-preview が配置されている場合、
  // sub-header のレイアウトが崩れてしまう
  padding-top: 1px;

  &:not(&--no-strong-highlight) {
    /deep/ strong,
    /deep/ b {
      $mark-color: rgba($yellow, 0.5);
      background: linear-gradient(to bottom, #fff, #fff 70%, $mark-color 70%, $mark-color);
    }
  }

  /deep/ h2,
  /deep/ h3 {
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  /deep/ h2 {
    // font-family: $sub-font;
    padding-top: #{$global-header-height + 1rem};
    margin-top: -$global-header-height;
    font-feature-settings: "palt";
    font-size: 1.5rem;

    // a {
    //   @include ten-mincho();
    // }
  }

  /deep/ h3 {
    font-size: 1.1rem;
    margin: 1.5rem 0 0.75rem;

    &:first-child {
      margin-top: 0;
    }
  }

  /deep/ hr {
    border: 0;
    height: 1px;
    border-top: 1px solid #ccc;
    margin: 1rem 0;
  }

  /deep/ ol,
  /deep/ ul {
    padding-left: 1.5rem;
  }

  /deep/ li {
    margin-bottom: 0.5rem;
  }

  /deep/ img {
    display: block;
    width: 100%;
    height: auto;
    //border-radius: 0.5rem;
    margin: 0 auto 1.5rem;
  }

  /deep/ table {
    display: inline-block;
    text-align: center;
    padding: 0.5rem 0rem;
  }

  /deep/ th,
  /deep/ td {
    border: $color solid;
    padding: 0rem 0.5rem;
  }
}
</style>
