<template>
  <div class="plasma">
    <div class="plasma-section">
      <div class="contents">
        <img src="@/assets/solution_img01.png" />
        <div class="title">{{ $t("solutions.plasma.plasma1.title") }}</div>
        <div class="content">
          {{ $t("solutions.plasma.plasma1.content") }}
        </div>
      </div>
      <div class="contents">
        <img src="@/assets/solution_img02.png" />
        <div class="title">{{ $t("solutions.plasma.plasma2.title") }}</div>
        <div class="content">
          {{ $t("solutions.plasma.plasma2.content") }}
        </div>
      </div>
      <div class="contents">
        <img src="@/assets/solution_img03.png" />
        <div class="title">{{ $t("solutions.plasma.plasma3.title") }}</div>
        <div class="content">
          {{ $t("solutions.plasma.plasma3.content") }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapState } from "vuex";

export default {
  // computed: {
  //   ...mapState(["plasma"]),
  // },
};
</script>
<style lang="scss" scoped>
@import "PlasmaContainer.scss";
</style>
