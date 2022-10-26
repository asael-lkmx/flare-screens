<template>
  <Page class="columns">

    <h2>Mode: Full</h2>
    <h3>weight: Normal</h3>
    <Column number="2" mode="full">
      <Block class="left" ref="columnLeft0Width">{{ columnLeft0Width }} px</Block>
      <Block class="right" ref="columnRight0Width">{{ columnRight0Width }} px</Block>
    </Column>

    <h3>weight: right</h3>
    <Column number="2" mode="full" weight="right">
      <Block class="left" ref="columnLeft1Width">{{ columnLeft1Width }} px</Block>
      <Block class="right" ref="columnRight1Width">{{ columnRight1Width }} px</Block>
    </Column>

    <h2>Mode: Normal</h2>
    <h3>weight: Normal</h3>
    <Column number="2">
      <Block class="left" ref="columnLeft2Width">{{ columnLeft2Width }} px</Block>
      <Block class="right" ref="columnRight2Width">{{ columnRight2Width }} px</Block>
    </Column>

    <h3>weight: right</h3>
    <Column number="2" weight="right">
      <Block class="left" ref="columnLeft3Width">{{ columnLeft3Width }} px</Block>
      <Block class="right" ref="columnRight3Width">{{ columnRight3Width }} px</Block>
    </Column>

    <h2>Mode: Slim</h2>
    <h3>weight: Normal</h3>
    <Column number="2" mode="slim">
      <Block class="left" ref="columnLeft4Width">{{ columnLeft4Width }} px</Block>
      <Block class="right" ref="columnRight4Width">{{ columnRight4Width }} px</Block>
    </Column>

    <h3>weight: right</h3>
    <Column number="2" mode="slim" weight="right">
      <Block class="left" ref="columnLeft5Width">{{ columnLeft5Width }} px</Block>
      <Block class="right" ref="columnRight5Width">{{ columnRight5Width }} px</Block>
    </Column>

  </Page>
</template>
<script>

export default {
  name: 'Columns',
  data() {
    return {
      columnLeft0Width: 0,
      columnLeft1Width: 0,
      columnLeft2Width: 0,
      columnLeft3Width: 0,
      columnLeft4Width: 0,
      columnLeft5Width: 0,
      columnLeft6Width: 0,

      columnRight0Width: 0,
      columnRight1Width: 0,
      columnRight2Width: 0,
      columnRight3Width: 0,
      columnRight4Width: 0,
      columnRight5Width: 0,
      columnRight6Width: 0
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  mounted() {
    this.myEventHandler();
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      let thiz = this;
      for (let index = 0; index < 6; index++) {
        if(this.$refs[`columnLeft${index}Width`].$el) {
          thiz[`columnLeft${index}Width`] = this.$refs[`columnLeft${index}Width`].$el.firstChild.firstChild.offsetWidth;
          console.log(this.$refs[`columnLeft${index}Width`].$el.firstChild.firstChild.offsetWidth);
        }
        if(this.$refs[`columnRight${index}Width`].$el) {
          thiz[`columnRight${index}Width`] = this.$refs[`columnRight${index}Width`].$el.firstChild.firstChild.offsetWidth;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.columns {
  * { text-align: center }
  h2, h3 { margin: 1rem 0 }
  .--flare-block {
    color: white;
    font-weight: bold;
    background-color: #00D0F6;
    &.left :last-child {
      background-color: #0B0E29;
    }
    &.right :last-child {
      background-color: #1324A0;
    }
  }
}
</style>
