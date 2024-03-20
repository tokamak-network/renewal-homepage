<template>
  <div class="main-container">
    <div class="description">L2 ON-DEMAND</div>
    <div class="mini-description">ETHEREUM PLATFORM</div>

    <div class="sub-description" v-html="$t('home.main.description2')"></div>

    <div class="button-container">
      <div class="titan">
        <div class="live">Live</div>
        <a
          target="_blank"
          class="titan-button"
          href="http://titan.tokamak.network/"
        >
          <div class="titan-text">TITAN</div>
          <div class="tok-container">
            <div class="tok-text">Tokamak</div>
            <div class="op-text">OP</div>
          </div>
        </a>
      </div>
      <a href="/#layer2" class="demand">L2 ON-DEMAND</a>
    </div>
    <div class="image">
      <!-- <div class="text">{{ $t("home.main.img") }}</div> -->
    </div>
    <div class="line-tablets" />
  </div>
</template>

<script>
export default {
  computed: {
    isTranslatedToKorean() {
      return this.$i18n.locale === "ko";
    },
  },
};
</script>

<style lang="scss" scope>
@import "MainContainer.scss";
@import "MainContainer-1280.scss";
@import "MainContainer-tablet.scss";
@import "MainContainer-mobile.scss";
</style>
