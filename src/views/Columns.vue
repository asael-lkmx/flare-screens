<template>
  <Page class="columns">

    <h2>Mode: Full</h2>
    <h3>weight: Normal</h3>
    <Column number="2" mode="full">
      <Block class="left">Column 1</Block>
      <Block class="right">Column 2</Block>
    </Column>

    <h3>weight: right</h3>
    <Column number="2" mode="full" weight="right">
      <Block class="left">Column 1</Block>
      <Block class="right">Column 2</Block>
    </Column>

    <h2>Mode: Normal</h2>
    <h3>weight: Normal</h3>
    <Column number="2">
      <Block class="left">Column 1</Block>
      <Block class="right">Column 2</Block>
    </Column>

    <h3>weight: right</h3>
    <Column number="2" weight="right">
      <Block class="left">Column 1</Block>
      <Block class="right">Column 2</Block>
    </Column>

    <h2>Mode: Slim</h2>
    <h3>weight: Normal</h3>
    <Column number="2" mode="slim">
      <Block class="left">Column 1</Block>
      <Block class="right">Column 2</Block>
    </Column>

    <h3>weight: right</h3>
    <Column number="2" mode="slim" weight="right">
      <Block class="left">Column 1</Block>
      <Block class="right">Column 2</Block>
    </Column>

  </Page>
</template>
<script>

export default {
  name: 'Columns'
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
