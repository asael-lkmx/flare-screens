<template>
  <div v-for="(screen, index) in screens" :key="index" :class="`screen ${getScreen(screen)}`">
    <h5>{{screen}}</h5>
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
.screen {
  padding: 1rem;
  border-radius: .5rem;
  background-color: #1324A0;
  height: 100px;
  display: none;
  align-items: center;
  justify-items: center;
  h5 { color: white }
}
</style>