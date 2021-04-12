<template>
  <div class="home">
    <main-container />
    <intro-container />
    <blog-container />
    <tokamak-info-container />
    <roadmap-container />
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
