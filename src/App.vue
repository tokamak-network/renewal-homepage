<template>
  <div id="app">
    <div class="line" />
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
font-family: 'Open Sans', sans-serif;
  font-stretch: normal;
  font-style: normal;
  color: #2c3e50;
  max-width: 1920px;
  width: 100%;

  flex-direction: column;
  display: flex;
  align-items: center;
}
.line {
  width: 1920px;

  height: 4px;
  margin-bottom: 22px;
  background-color: #2a72e5;
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

.flex {
  display: flex;
}

.flex-rows {
  flex-direction: row;
}

.flex-cols {
  flex-direction: column;
}
.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.text-center {
  text-align: center;
}

.grid {
  display: grid;
  column-gap: 66px;
  grid-template-columns: repeat(auto-fit, 128px);
  justify-content: center;
  row-gap: 68px;
}

</style>
