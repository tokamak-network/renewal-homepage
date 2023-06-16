<template>
  <div class="home">
    <main-container />
    <div class="line-main" />
    <intro-container />
    <div class="line" />
    <l2-promo-container />
    <div class="line" />
    <blog-container />
    <div class="line" />
    <tokamak-info-container />
    <div class="line" />
    <roadmap-container />
    <div class="line" />
    <supporter-container />
  </div>
</template>

<script>
import SupporterContainer from "./containers/SupporterContainer";
import BlogContainer from "./containers/BlogContainer";
import IntroContainer from "./containers/IntroContainer";
import MainContainer from "./containers/MainContainer";
import RoadMapContainer from "./containers/RoadMapContainer";
import TokamakInfoContainer from "./containers/TokamakInfoContainer";
import L2PromoContainer from "./containers/L2PromoContainer";

export default {
  components: {
    "supporter-container": SupporterContainer,
    "blog-container": BlogContainer,
    "intro-container": IntroContainer,
    "l2-promo-container": L2PromoContainer,
    "main-container": MainContainer,
    "roadmap-container": RoadMapContainer,
    "tokamak-info-container": TokamakInfoContainer,
  },
  created() {
    this.$store.dispatch("launch");
  },
};
</script>

<style lang="scss">
@import "HomeLayout.scss";
@import "HomeLayout-1280.scss";
@import "HomeLayout-tablet.scss";
@import "HomeLayout-mobile.scss";
</style>
