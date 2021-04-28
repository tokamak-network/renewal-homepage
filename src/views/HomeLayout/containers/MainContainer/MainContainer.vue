<template>
  <div class="main-container">
    <div class="description">
      {{ $t("home.main.description1") }}
    </div>
    <div class="image">
      <div class="sub-description">
        {{ $t("home.main.description2") }}
      </div>
      <div class="line-tablets" />
      <!-- <div class="text">{{ $t("home.main.img") }}</div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
@import "MainContainer.scss";
@import "MainContainer-tablet.scss";
@import "MainContainer-mobile.scss";
</style>
