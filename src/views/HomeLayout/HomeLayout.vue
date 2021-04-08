<template>
  <div class="home">
    <main-container />
    <intro-container />
    <blog-container />
    <tokamak-info-container />
    <roadmap-container />
    <backed-container />
  </div>
</template>

<script>
import BackedContainer from "./containers/BackedContainer";
import BlogContainer from "./containers/BlogContainer";
import IntroContainer from "./containers/IntroContainer";
import MainContainer from "./containers/MainContainer";
import RoadMapContainer from "./containers/RoadMapContainer";
import TokamakInfoContainer from "./containers/TokamakInfoContainer";

export default {
  components: {
    "backed-container": BackedContainer,
    "blog-container": BlogContainer,
    "intro-container": IntroContainer,
    "main-container": MainContainer,
    "roadmap-container": RoadMapContainer,
    "tokamak-info-container": TokamakInfoContainer,
  },
};
</script>

<style lang="scss" scoped>
@import "HomeLayout.scss";
</style>
