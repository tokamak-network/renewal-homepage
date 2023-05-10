<template>
  <div class="home">
    <div class="carousel">
      <carousel
        :perPage="1"
        :paginationColor="'#1c1c1c'"
        :paginationPadding="5"
        :paginationActiveColor="'#2a72e5'"
      >
        <slide> <ad-container /> </slide>
        <slide><main-container /> </slide>
      </carousel>
    </div>

    <div class="line-main" />
    <intro-container />
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
import AdContainer from "./containers/AdContainer/AdContainer.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    "supporter-container": SupporterContainer,
    "blog-container": BlogContainer,
    "intro-container": IntroContainer,
    "main-container": MainContainer,
    "roadmap-container": RoadMapContainer,
    "tokamak-info-container": TokamakInfoContainer,
    "ad-container": AdContainer,
    Carousel,
    Slide,
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
