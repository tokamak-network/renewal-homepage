<template>
  <div>
    <div class="blank" />
    <div class="services">
      <div class="services-line" />
      <div class="tab-container">
        <div class="tab-title">L2 Mainnet</div>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('http://titan.tokamak.network/')"
        >
          Titan
        </button>
        <div class="tab-linked">
          └
          <button
            class="tab-linked"
            style="cursor: pointer"
            @click="click('http://explorer.titan.tokamak.network/')"
          >
            Explorer
          </button>
          /
          <button
            class="tab-linked"
            style="cursor: pointer"
            @click="click('http://bridge.titan.tokamak.network/')"
          >
            Bridge
          </button>
        </div>
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
          @click="click('https://price.tokamak.network/')"
        >
          Price Dashboard
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://rolluphub.tokamak.network')"
        >
          L2 On-Demand
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
