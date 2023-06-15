<template>
  <div class="main-container">
    <div class="description">L2 ON-DEMAND</div>
    <div class="mini-description">ETHEREUM PLATFORM</div>

    <div class="sub-description">
      {{ $t("home.main.description2") }}
    </div>
    <div class="button-container">
      <div class="titan">
        <div class="live">Live</div>
        <button class="titan-button">
          <div class="titan-text">TITAN</div>
          <div class="tok-container">
            <div class="tok-text">Tokamak</div>
            <div class="op-text">OP</div>
          </div>
        </button>
      </div>
      <button class="demand">L2 ON-DEMAND</button>
    </div>
    <div class="image">
      <!-- <div class="text">{{ $t("home.main.img") }}</div> -->
    </div>
    <div class="line-tablets" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
@import "MainContainer.scss";
@import "MainContainer-1280.scss";
@import "MainContainer-tablet.scss";
@import "MainContainer-mobile.scss";
</style>
