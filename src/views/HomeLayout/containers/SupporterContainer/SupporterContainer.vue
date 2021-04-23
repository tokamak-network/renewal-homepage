<template>
  <div class="supporter-container">
    <div class="supporter-header">{{ $t("home.supporter.title1") }}</div>
    <div class="supporter-section">
      <a
        href="https://medium.com/onther-tech/vitalik-buterins-big-announcements-about-plasma-evm-tokamak-network-636dc11ea257"
        class="supporter"
        style="margin-right: 60px"
      >
        <img
          class="img"
          src="@/assets/ethereum-fg.png"
          srcset="
            @/assets/ethereum-fg@2x.png 2x,
            @/assets/ethereum-fg@3x.png 3x
          "
        />
      </a>
      <a href="" class="supporter" style="margin-right: 60px">
        <img
          class="img"
          src="@/assets/makerdao.png"
          srcset="@/assets/makerdao@2x.png 2x, @/assets/makerdao@3x.png 3x"
        />
      </a>
      <a
        href="https://makerdao.com/ko"
        class="supporter"
        style="margin-right: 60px"
      >
        <img
          class="img"
          src="@/assets/matic.png"
          srcset="@/assets/matic@2x.png 2x, @/assets/matic@3x.png 3x"
        />
      </a>
      <a href="https://meter.io" class="supporter" style="margin-right: 60px">
        <img
          class="img"
          src="@/assets/meter.png"
          srcset="@/assets/meter@2x.png 2x, @/assets/meter@3x.png 3x"
        />
      </a>
    </div>
    <div class="gap" />
    <div class="supporter-section">
      <a
        href="https://www.dsrvlabs.com/en/"
        class="supporter"
        style="margin-right: 60px"
      >
        <img
          class="img"
          src="@/assets/dsrv.png"
          srcset="@/assets/dsrv@2x.png 2x, @/assets/dsrv@3x.png 3x"
        />
      </a>
      <a
        href="https://bounce.finance/"
        class="supporter"
        style="margin-right: 60px"
      >
        <img
          class="img"
          src="@/assets/bounce.png"
          srcset="@/assets/bounce@2x.png 2x, @/assets/bounce@3x.png 3x"
        />
      </a>
      <a
        href="https://dxmcorp.com/"
        class="supporter"
        style="margin-right: 60px"
      >
        <img
          class="img"
          src="@/assets/dxm.png"
          srcset="@/assets/dxm@2x.png 2x, @/assets/dxm@3x.png 3x"
        />
      </a>
    </div>
    <div class="supporter-header">{{ $t("home.supporter.title2") }}</div>
    <div class="supporter-section">
      <a
        href="http://100and100capital.com/"
        class="supporter"
        style="margin-right: 60px"
      >
        <img
          class="img"
          src="@/assets/100-n-100.png"
          srcset="@/assets/100-n-100@2x.png 2x, @/assets/100-n-100@3x.png 3x"
        />
      </a>
      <a
        href="https://www.blocore.com/"
        class="supporter"
        style="margin-right: 60px"
      >
        <img
          class="img"
          src="@/assets/blocore.png"
          srcset="@/assets/blocore@2x.png 2x, @/assets/blocore@3x.png 3x"
        />
      </a>
      <a
        href="https://alphain.ventures/"
        class="supporter"
        style="margin-right: 60px"
      >
        <img class="img" src="@/assets/alphain.svg" />
      </a>
      <a href="https://www.skytalecapital.com/" class="supporter">
        <img class="img" src="@/assets/skytale.svg" />
      </a>
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
};
</script>

<style lang="scss" scope>
@import "SupporterContainer.scss";
@import "SupporterContainer-tablet.scss";
</style>
