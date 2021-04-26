<template>
  <div class="supporter-container">
    <div class="supporter-header">{{ $t("home.supporter.title1") }}</div>
    <div class="supporter-section">
      <div @click="supporterLink('EF')" class="supporter">
        <img
          class="img"
          src="@/assets/ethereum-fg.png"
          srcset="
            @/assets/ethereum-fg@2x.png 2x,
            @/assets/ethereum-fg@3x.png 3x
          "
        />
      </div>
      <div @click="supporterLink('maker')" class="supporter">
        <img
          class="img"
          src="@/assets/makerdao.png"
          srcset="@/assets/makerdao@2x.png 2x, @/assets/makerdao@3x.png 3x"
        />
      </div>
      <div @click="supporterLink('matic')" class="supporter">
        <img
          class="img"
          src="@/assets/matic.png"
          srcset="@/assets/matic@2x.png 2x, @/assets/matic@3x.png 3x"
        />
      </div>
      <div @click="supporterLink('meter')" class="supporter">
        <img
          class="img"
          src="@/assets/meter.png"
          srcset="@/assets/meter@2x.png 2x, @/assets/meter@3x.png 3x"
        />
      </div>
    </div>
    <div class="gap" />
    <div class="supporter-section">
      <div @click="supporterLink('dsrv')" class="supporter">
        <img
          class="img"
          src="@/assets/dsrv.png"
          srcset="@/assets/dsrv@2x.png 2x, @/assets/dsrv@3x.png 3x"
        />
      </div>
      <div @click="supporterLink('bounce')" class="supporter">
        <img
          class="img"
          src="@/assets/bounce.png"
          srcset="@/assets/bounce@2x.png 2x, @/assets/bounce@3x.png 3x"
        />
      </div>
      <div @click="supporterLink('dxm')" class="supporter">
        <img
          class="img"
          src="@/assets/dxm.png"
          srcset="@/assets/dxm@2x.png 2x, @/assets/dxm@3x.png 3x"
        />
      </div>
    </div>
    <div class="gap-mobile" />
    <div class="supporter-header">{{ $t("home.supporter.title2") }}</div>
    <div class="supporter-section">
      <div @click="supporterLink('100and100')" class="supporter">
        <img
          class="img"
          src="@/assets/100-n-100.png"
          srcset="@/assets/100-n-100@2x.png 2x, @/assets/100-n-100@3x.png 3x"
        />
      </div>
      <div @click="supporterLink('blocore')" class="supporter">
        <img
          class="img"
          src="@/assets/blocore.png"
          srcset="@/assets/blocore@2x.png 2x, @/assets/blocore@3x.png 3x"
        />
      </div>
      <div @click="supporterLink('alphain')" class="supporter">
        <img class="img" src="@/assets/alphain.svg" />
      </div>
      <div @click="supporterLink('skytale')" class="supporter">
        <img class="img" src="@/assets/skytale.svg" />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    supporterLink(item) {
      if (item === "EF")
        window.open(
          "https://medium.com/onther-tech/vitalik-buterins-big-announcements-about-plasma-evm-tokamak-network-636dc11ea257",
          "_blank"
        );
      else if (item === "matic") window.open("https://matic.network", "_blank");
      else if (item === "maker")
        window.open("https://makerdao.com/ko", "_blank");
      else if (item === "meter") window.open("https://meter.io", "_blank");
      else if (item === "dsrv")
        window.open("https://www.dsrvlabs.com", "_blank");
      else if (item === "bounce")
        window.open("https://bounce.finance/", "_blank");
      else if (item === "dxm") window.open("https://dxmcorp.com/", "_blank");
      else if (item === "100and100")
        window.open("http://100and100capital.com/", "_blank");
      else if (item === "blocore")
        window.open("https://www.blocore.com/", "_blank");
      else if (item === "alphain")
        window.open("https://alphain.ventures/", "_blank");
      else if (item === "skytale")
        window.open(
          "https://www.linkedin.com/company/skytale-capital/about/",
          "_blank"
        );
    },
  },
};
</script>

<style lang="scss" scope>
@import "SupporterContainer.scss";
@import "SupporterContainer-tablet.scss";
@import "SupporterContainer-mobile.scss";
</style>
