<template>
  <div class="new-footer">
    <div
      class="line"
      :style="{ visibility: width < 700 ? 'visible' : 'hidden' }"
    />
    <div
      class="footer-container"
      :style="{ width: width < 1280 ? '95%' : '100%' }"
    >
      <div class="container-item">
        <div class="new-title">About</div>
        <router-link class="new-content" :to="'/about'">Team</router-link>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="
            click(
              'https://tokamak.notion.site/Tokamak-Network-Onboarding-523bc627bd374326b5dfbec3d3b0a8e1'
            )
          "
        >
          Careers
        </button>
        <a href="/#partners" class="new-content">Partners</a>
      </div>
      <div class="container-item">
        <div class="new-title">Mainnet</div>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('http://titan.tokamak.network/')"
        >
          Titan
        </button>
      </div>
      <div class="container-item">
        <div class="new-title">L2 On-Demand</div>
        <div>
          <a href="/#layer2" class="new-content"
            >Tokamak
            <span
              style="
                vertical-align: super;
                display: inline-block;
                font-size: smaller;
                margin-left: -2px;
              "
            >
              Op
            </span></a
          >
        </div>
        <div class="new-content">
          <a href="/#layer2" class="new-content"
            >Tokamak
            <span
              style="
                vertical-align: super;
                display: inline-block;
                font-size: smaller;
                margin-left: -2px;
              "
            >
              ZK+
            </span></a
          >
        </div>
      </div>
      <div class="container-item">
        <div class="new-title">Ecosystem</div>
        <button class="new-content" style="cursor: pointer" @click="click('')">
          Bridge & Swap
        </button>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://simple.staking.tokamak.network/staking')"
        >
          Staking
        </button>

        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://dao.tokamak.network/#/')"
        >
          DAO
        </button>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://tonstarter.tokamak.network/')"
        >
          Launchpad
        </button>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://price.tokamak.network/#/')"
        >
          Price Dashboard
        </button>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://explorer.titan.tokamak.network')"
        >
          Block Explorer
        </button>
      </div>

      <div class="container-item">
        <div class="new-title">Developers</div>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="
            click(
              'https://tokamak.notion.site/Tokamak-Network-Grant-Program-f2384b458ea341a0987c7e73a909aa21'
            )
          "
        >
          Grant
        </button>

        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://github.com/tokamak-network')"
        >
          Github
        </button>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://docs.tokamak.network')"
        >
          Documentation
        </button>
      </div>
      <div
        class="container-item"
        :style="{ width: width < 700 ? '' : '150px' }"
      >
        <div class="new-title">Community</div>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://medium.com/tokamak-network')"
        >
          Medium
        </button>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://twitter.com/tokamak_network')"
        >
          Twitter
        </button>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://discord.com/invite/J4chV2zuAK')"
        >
          Discord (EN)
        </button>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://t.me/tokamak_network')"
        >
          Telegram
        </button>
        <button
          class="new-content"
          style="cursor: pointer"
          @click="click('https://www.linkedin.com/company/tokamaknetwork/')"
        >
          LinkedIn
        </button>
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
    click(link) {
      window.open(link, "_blank");
    },
    familyLink(item) {
      if (item === "Github")
        window.open("https://github.com/tokamak-network", "_blank");
      else if (item === "Medium")
        window.open("https://medium.com/tokamak-network", "_blank");
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
