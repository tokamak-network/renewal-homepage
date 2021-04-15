<template>
  <div class="solutions">
    <challenges-solutions-container />
    <plasma-container/>
  </div>
</template>
<script>
import ChallengesSolutionsContainer from "./containers/ChallengesSolutionsContainer";
import PlasmaContainer from "./containers/PlasmaContainer";
export default {
  components: {
    "challenges-solutions-container": ChallengesSolutionsContainer,
    "plasma-container": PlasmaContainer,
  },
};
</script>
<style lang="scss" scoped>
@import "SolutionsLayout.scss";
</style>
