<template>
  <div id="app">
    <div
      style="
        width: 100%;
        height: 4px;
        margin-bottom: 22px;
        background-color: #2a72e5;
      "
      class="top-line"
    />
    <div class="layout">
      <header-container />
      <router-view />
      <footer-container />
    </div>
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

<style lang="scss" scoped>
// @media all and (min-width: 1025px) {
#app {
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  > .top-line {
    width: 100%;

    height: 4px;
    margin-bottom: 22px;
    background-color: #2a72e5;
  }
}

@media all and (min-width: 1697px) {
  .layout {
    height: 100vh;
    width: 90%;
  }
}

@media all and (min-width: 376px) and (max-width: 1024px) {
  #app {
    font-stretch: normal;
    font-style: normal;
    color: #2c3e50;
    width: 100%;

    flex-direction: column;
    display: flex;
    align-items: center;
  }

  .layout {
    width: 100%;
    height: 100vh;
  }
}
</style>
