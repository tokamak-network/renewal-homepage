<template>
  <div class="main-container">
    <div class="description">
      {{ $t("home.main.description1") }}<br />
      {{ $t("home.main.description2") }}
    </div>
    <div class="image">
      <div class="text">{{ $t("home.main.img") }}</div>
    </div>
    <div class="line" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
@import "MainContainer.scss";
</style>
