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
      <div v-if="width < 1240">
        <footer-mobile-container />
      </div>
      <div v-else>
        <footer-container />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import FooterMobile from "@/containers/FooterMobile";

export default {
  name: "App",
  components: {
    "header-container": Header,
    "footer-container": Footer,
    "footer-mobile-container": FooterMobile,
  },
  data() {
    return {
      width: 0,
    };
  },
  created() {
    this.width = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
@media all and (min-width: 1025px) {
  #app {
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;

    > .top-line {
      width: 100%;
      max-width: 1920px;

      height: 4px;
      margin: 0 0 22px 0;
      background-color: #2a72e5;
    }
    .layout {
      height: 100vh;
      max-width: 1696px;
      width: 90%;
    }
  }
}

// @media all and (min-width: 1697px) {
//   .layout {
//     height: 100vh;
//     max-width: 1696px;
//     width: 90%;
//   }
// }

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
