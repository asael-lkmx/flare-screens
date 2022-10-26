<template>
    <div class="layout">
        <header>
            <Columns modeM="full">
                <Block>Screen</Block>
            </Columns>
        </header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'ScreensList',
    props: {
      screens: {
        type: Array,
        required: true
      }
    },
    methods: {
      getScreen(screen) {
        return screen.replaceAll(" ", "_")
      }
    }
  };
</script>
  
<style lang="scss" scoped>
  .layout {
    display: grid;
    grid-template-rows: auto 1fr;
  }
  </style>