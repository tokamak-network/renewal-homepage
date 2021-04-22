<template>
  <div class="solution-container">
    <div class="solution">
      <div class="solution-title">{{ $t("solutions.solution.title") }}</div>
      <div class="solution-content">
        <div class="solution-intro">
          {{ $t("solutions.solution.content1") }}
        </div>
        <div class="list">
          <img src="@/assets/v-icon.svg" class="x_icon" />
          <div>{{ $t("solutions.solution.list1") }}</div>
        </div>
        <div class="list">
          <img src="@/assets/v-icon.svg" class="x_icon" />
          <div>{{ $t("solutions.solution.list2") }}</div>
        </div>
        <div class="list">
          <img src="@/assets/v-icon.svg" class="x_icon" />
          <div>{{ $t("solutions.solution.list3") }}</div>
        </div>
        <div class="list">
          <img src="@/assets/v-icon.svg" class="x_icon" />
          <div>{{ $t("solutions.solution.list4") }}</div>
        </div>
      </div>
    </div>
    <img src="@/assets/solution-img.png" class="solution-img" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "SolutionContainer.scss";
</style>
