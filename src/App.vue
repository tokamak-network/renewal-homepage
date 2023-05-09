<template>
  <div id="app">
    <mobile-tokamak-gnb v-if="width < 700" />
    <tokamak-gnb v-else />

    <mobile-header-container v-if="width < 700" />
    <header-tablet v-else-if="width <= 1441 && width > 701" />
    <header-container v-else />
    <div class="layout">
      <router-view />
    </div>
    <div v-if="width <= 700">
      <footer-mobile-container />
    </div>
    <div v-else-if="width <= 1270 && width > 701">
      <footer-tablet-container />
    </div>
    <div v-else>
      <footer-container />
    </div>
  </div>
</template>

<script>
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import MobileHeader from "@/containers/MobileHeader";
import FooterMobile from "@/containers/FooterMobile";
import FooterTablet from "@/containers/FooterTablet";
import TokamakGNB from "@/containers/GNB";
import HeaderTablet from "@/containers/HeaderTablet";
import MobileTokamakGNB from "@/containers/MobileGNB";

export default {
  name: "App",
  components: {
    "header-container": Header,
    "footer-container": Footer,
    "mobile-header-container": MobileHeader,
    "footer-mobile-container": FooterMobile,
    "footer-tablet-container": FooterTablet,
    "header-tablet": HeaderTablet,
    "tokamak-gnb": TokamakGNB,
    "mobile-tokamak-gnb": MobileTokamakGNB,
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
#app {
  overflow: hidden;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
@media all and (min-width: 1441px) {
  #app {
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;

    > .top-line {
      width: 100%;
      height: 4px;

      margin: 0 0 22px 0;
      background-color: #2a72e5;
    }
    .layout {
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

@media all and (min-width: 700px) and (max-width: 1270px) {
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
    // height: 100vh;
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
