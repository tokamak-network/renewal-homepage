<template>
  <div id="app">
    <header-container />
    <router-view />
  </div>
</template>

<script>
import Header from "@/containers/Header";

export default {
  name: "App",
  components: {
    "header-container": Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: OpenSans;
  font-stretch: normal;
  font-style: normal;
  color: #2c3e50;
  width: 1920px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #2a72e5;
    }
  }
}
</style>
