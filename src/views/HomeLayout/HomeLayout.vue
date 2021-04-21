<template>
  <div class="home">
    <main-container />
    <div class="line" />
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

export default {
  components: {
    "supporter-container": SupporterContainer,
    "blog-container": BlogContainer,
    "intro-container": IntroContainer,
    "main-container": MainContainer,
    "roadmap-container": RoadMapContainer,
    "tokamak-info-container": TokamakInfoContainer,
  },
  created() {
    this.$store.dispatch("launch");
  },
};
</script>

<style lang="scss" scoped>
@import "HomeLayout.scss";
</style>
