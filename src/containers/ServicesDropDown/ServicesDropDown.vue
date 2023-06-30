<template>
  <div>
    <div class="blank" />
    <div class="services">
      <div class="services-line" />
      <div class="tab-container">
        <div class="tab-title">Mainnet</div>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('http://titan.tokamak.network/')"
        >
          Titan
        </button>
        <!-- <div class="soon-tab">
          <button class="tab" :disabled="true">Optimistic Rollup</button>
          <div class="soon">SOON</div>
        </div>
        <div class="soon-tab">
          <button class="tab" :disabled="true">zk-rollup</button>
          <div class="soon">SOON</div>
        </div>
        <div class="soon-tab">
          <button class="tab" :disabled="true">zk-opru</button>
          <div class="soon">SOON</div>
        </div> -->
        <div class="divider" />
        <div class="tab-title">Ecosystem</div>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://bridge.tokamak.network/#/')"
        >
          Bridge & Swap
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://simple.staking.tokamak.network/')"
        >
          Staking
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://dao.tokamak.network/#/')"
        >
          DAO
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://tonstarter.tokamak.network/')"
        >
          Launchpad
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://price.tokamak.network/')"
        >
          Price Dashboard
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://explorer.titan.tokamak.network/')"
        >
          Block Explorer
        </button>
        <div class="divider" />
        <div class="tab-title">L2 On-Demand</div>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('/#layer2', true)"
        >
          <div>
            Tokamak
            <span
              style="
                vertical-align: super;
                display: inline-block;
                font-size: smaller;
                margin-left: -2px;
              "
            >
              Op
            </span>
          </div>
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('/#layer2', true)"
        >
          <div>
            Tokamak
            <span
              style="
                vertical-align: super;
                display: inline-block;
                font-size: smaller;
                margin-left: -2px;
              "
            >
              ZK+
            </span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    click(link, l2) {
      l2 ? window.open(link, "_self") : window.open(link, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "ServicesDropDown.scss";
</style>
