<template>
  <nav>
    <router-link to="/">Screens</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/columns">Columns</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
#app {
  nav {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 2rem;
    background-color: #0B0E29;
    margin-bottom: 1rem;
    a {
      text-decoration: none;
      color: #00D0F6;
      font-size: 2rem;
      &:last-child {
        color: #FF0049;
      }
    }
  }
}
</style>