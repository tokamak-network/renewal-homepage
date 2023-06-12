<template>
  <div class="solutions-layout">
    <div class="solutions-title">
      {{ $t("solutions.title") }}
    </div>
    <div class="solutions-subtitle">
      {{ $t("solutions.sub-title") }}
    </div>
    <challenge-container />
    <solution-container />
    <!-- <layer2-container /> -->
    <!-- <comparison-container /> -->
  </div>
</template>

<script>
import ChallengeContainer from "./containers/ChallengeContainer";
// import Layer2Container from "./containers/Layer2Container";
import SolutionContainer from "./containers/SolutionContainer";

export default {
  components: {
    "challenge-container": ChallengeContainer,
    // "layer2-container": Layer2Container,
    "solution-container": SolutionContainer,
  },
};
</script>

<style lang="scss">
@import "SolutionsLayout.scss";
@import "SolutionsLayout-mobile.scss";
</style>
