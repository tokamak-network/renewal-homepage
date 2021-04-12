<template>
  <div id="app">
    <header-container />
    <router-view />
    <footer-container />
  </div>
</template>

<script>
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

export default {
  name: "App",
  components: {
    "header-container": Header,
    "footer-container": Footer,
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

  flex-direction: column;
  display: flex;
  align-items: center;
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
