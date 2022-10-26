<template>
  <Page class="columns">

    <h2>Mode: Full</h2>
    <h3>weight: Normal</h3>
    <Column number="2" mode="full">
      <Block>Column 1</Block>
      <Block>Column 2</Block>
    </Column>

    <h3>weight: right</h3>
    <Column number="2" mode="full" weight="right">
      <Block>Column 1</Block>
      <Block>Column 2</Block>
    </Column>

    <h2>Mode: Normal</h2>
    <h3>weight: Normal</h3>
    <Column number="2">
      <Block>Column 1</Block>
      <Block>Column 2</Block>
    </Column>

    <h3>weight: right</h3>
    <Column number="2" weight="right">
      <Block>Column 1</Block>
      <Block>Column 2</Block>
    </Column>

    <h2>Mode: Slim</h2>
    <h3>weight: Normal</h3>
    <Column number="2" mode="slim">
      <Block>Column 1</Block>
      <Block>Column 2</Block>
    </Column>

    <h3>weight: right</h3>
    <Column number="2" mode="slim" weight="right">
      <Block>Column 1</Block>
      <Block>Column 2</Block>
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
    &:first-child {
      background-color: #0B0E29;
    }
    &:last-child {
      background-color: #1324A0;
    }
  }
}
</style>
