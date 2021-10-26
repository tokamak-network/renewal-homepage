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
        <img class="img" src="@/assets/polygon.png" />
      </div>
      <div @click="supporterLink('meter')" class="supporter">
        <img
          class="img"
          src="@/assets/meter.png"
          srcset="@/assets/meter@2x.png 2x, @/assets/meter@3x.png 3x"
        />
      </div>
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
      <div @click="supporterLink('Talken')" class="supporter">
        <img class="img" src="@/assets/talken.svg" />
      </div>
      <div @click="supporterLink('paycoin')" class="supporter">
        <img class="img" src="@/assets/paycoiin.svg" />
      </div>
      <div @click="supporterLink('bifrost')" class="supporter">
        <img class="img" src="@/assets/bifrost.svg" />
      </div>
      <div @click="supporterLink('kdac')" class="supporter">
        <img class="img" src="@/assets/kdac.png" />
      </div>
      <div @click="supporterLink('dcent')" class="supporter">
        <img class="img" src="@/assets/dcent.svg" />
      </div>
      <div @click="supporterLink('ozys')" class="supporter">
        <img class="img" src="@/assets/ozys.png" />
      </div>
      <div @click="supporterLink('panony')" class="supporter">
        <img class="img" src="@/assets/panony.svg" />
      </div>
      <div @click="supporterLink('staked')" class="supporter">
        <img class="img" src="@/assets/staked.svg" />
      </div>
      <div @click="supporterLink('chainlink')" class="supporter">
        <img class="img" src="@/assets/chainlink.svg" />
      </div>
      <div @click="supporterLink('decipher')" class="supporter">
        <img class="img" src="@/assets/decipher.svg" />
      </div>
      <div @click="supporterLink('despread')" class="supporter">
        <img class="img" src="@/assets/despread.svg" />
      </div>
      <div @click="supporterLink('dooropen')" class="supporter">
        <img class="img" src="@/assets/DOOROPEN.svg" />
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
        <img class="img" src="@/assets/alphain.png" />
      </div>
      <div class="supporter">
        <img class="img" src="@/assets/skytale.png" />
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
      else if (item === "matic")
        window.open("https://polygon.technology/", "_blank");
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
      else if (item === "Talken")
        window.open("https://talken.io/main", "_blank");
      else if (item === "paycoin")
        window.open("https://payprotocol.io/", "_blank");
      else if (item === "bifrost")
        window.open("https://thebifrost.io/", "_blank");
      else if (item === "kdac") window.open("", "_blank");
      else if (item === "dcent")
        window.open("https://dcentwallet.com/", "_blank");
      else if (item === "ozys") window.open("https://orbitchain.io/", "_blank");
      else if (item === "panony")
        window.open("https://www.panony.com/", "_blank");
      else if (item === "staked") window.open("https://chain.link/", "_blank");
      else if (item === "chainlink")
        window.open("https://staked.us/", "_blank");
      else if (item === "decipher")
        window.open("https://decipher.ac/", "_blank");
      else if (item === "despread")
        window.open("https://www.despread.io/", "_blank");
      else if (item === "dooropen")
        window.open("https://www.dooropen.space/", "_blank");
    },
  },
};
</script>

<style lang="scss" scope>
@import "SupporterContainer.scss";
@import "SupporterContainer-1280.scss";
@import "SupporterContainer-tablet.scss";
@import "SupporterContainer-mobile.scss";
</style>
