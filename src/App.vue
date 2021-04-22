<template>
  <div id="app">
    <div class="line" />
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
#app {
  font-family: "Open Sans", sans-serif;
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
  width: 100%;

  height: 4px;
  margin-bottom: 22px;
  background-color: #2a72e5;
}

.layout {
  max-width: 90%;
}
@media all and (min-width: 376px) and (max-width: 1024px) {
  #app {
    font-family: "Open Sans", sans-serif;
    font-stretch: normal;
    font-style: normal;
    color: #2c3e50;
    width: 100%;

    flex-direction: column;
    display: flex;
    align-items: center;
  }
  .line {
    width: 100%;

    height: 4px;
    margin-bottom: 22px;
    background-color: #2a72e5;
  }

  .layout {
    width: 100%;
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

.align-center {
  align-items: center;
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
  column-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 30px;
  justify-content: center;
  row-gap: 50px;
}
</style>
