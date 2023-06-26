<template>
  <div class="new-footer">
    <div class="line" v-if="width < 700" />
    <div
      class="footer-container"
      :style="{ width: width < 1280 ? '95%' : '100%' }"
    >
      <div class="container-item">
        <div class="new-title">About</div>
        <div class="new-content">Team</div>
        <div class="new-content">Careers</div>
        <div class="new-content">Partners</div>
      </div>
      <div class="container-item">
        <div class="new-title">Mainnet</div>
        <div class="new-content">Darius</div>
      </div>
      <div class="container-item">
        <div class="new-title">L2 On-Demand</div>
        <div><a href="#layer2" class="new-content">Tokamak OPTIMISM</a></div>
        <div class="new-content">Tokamak zkEVM+</div>
      </div>
      <div class="container-item">
        <div class="new-title">Ecosystem</div>
        <div class="new-content">Swap</div>
        <div class="new-content">Bridge</div>
        <div class="new-content">Staking</div>
        <div class="new-content">DAO</div>
        <div class="new-content">Launchpad</div>
      </div>
      <div class="container-item">
        <div class="new-title">Developers</div>
        <div class="new-content">Grant</div>
        <div class="new-content">Bug Bounty</div>
        <div class="new-content">Github</div>
        <div class="new-content">Documentation</div>
      </div>
      <div
        class="container-item"
        :style="{ width: width < 700 ? '' : '150px' }"
      >
        <div class="new-title">Community</div>
        <div class="new-content">Medium</div>
        <div class="new-content">Twitter</div>
        <div class="new-content">Kakaotalk</div>
        <div class="new-content">Discord</div>
        <div class="new-content">Telegram</div>
        <div class="new-content">Linkedin</div>
      </div>
    </div>

    <div class="line" />
    <div
      class="new-copyright"
      :style="{ width: width < 700 ? '90%' : width < 1280 ? '95%' : '100%' }"
    >
      <div class="new-copyright-content">
        <div v-if="width < 700">
          Copyright © {{ year }}
          <span style="color: #1c1c1c">Tokamak Network</span>
        </div>
        <div v-else>
          Copyright © {{ year }}
          <span style="color: #1c1c1c">Tokamak Network</span> All Rights
          Reserved.
        </div>
        <!-- <div style="margin-right: 60px">Privacy Policy</div>
        <div class="copyright-content">Terms & Conditions</div> -->
      </div>
      <div class="new-upward" @click="upward" />
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      year: 2023,
      width: 0,
    };
  },
  created() {
    const now = moment().year();
    this.year = now;
    this.width = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    upward() {
      window.scrollTo(0, 0);
    },
    familyLink(item) {
      if (item === "Github")
        window.open("https://github.com/tokamak-network", "_blank");
      else if (item === "Medium")
        window.open("https://medium.com/onther-tech", "_blank");
      else if (item === "Twitter")
        window.open("https://twitter.com/tokamak_network", "_blank");
      else if (item === "Linkedin")
        window.open(
          "https://www.linkedin.com/company/tokamaknetwork/",
          "_blank"
        );
      else if (item === "Telegram")
        window.open("https://t.me/tokamak_network", "_blank");
      else if (item === "Discord") window.open("https://discord.gg/J4chV2zuAK");
      else if (item === "Blog") window.open("http://blog.onther.io");
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "Footer-1280.scss";
@import "NewFooter.scss";
@import "NewFooter-mobile.scss";
</style>
