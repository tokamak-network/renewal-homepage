<template>
  <div class="challenge-container">
    <img src="@/assets/challenge-img.png" class="challenge-img" />
    <div class="challenge">
      <div class="challenge-title">{{ $t("solutions.challenge.title") }}</div>
      <div class="challenge-content">
        <div class="challenge-intro">
          {{ $t("solutions.challenge.content1") }}
        </div>
        <div class="list">
          <img src="@/assets/x-icon.svg" class="x_icon" />
          <div>{{ $t("solutions.challenge.list1") }}</div>
        </div>
        <div class="list">
          <img src="@/assets/x-icon.svg" class="x_icon" />
          <div>{{ $t("solutions.challenge.list2") }}</div>
        </div>
        <div class="list">
          <img src="@/assets/x-icon.svg" class="x_icon" />
          <div>{{ $t("solutions.challenge.list3") }}</div>
        </div>
        <div class="challenge-explain">
          {{ $t("solutions.challenge.content2") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "ChallengeContainer.scss";
</style>
