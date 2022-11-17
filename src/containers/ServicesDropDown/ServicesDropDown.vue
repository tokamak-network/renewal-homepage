<template>
  <div>
    <div class="blank" />
    <div class="services">
      <div class="services-line" />
      <div class="tab-container">
        <div class="tab-title">Layer 2</div>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="
            click(
              'https://docs.tokamak.network/docs/en/guides/getting-started/how-to-open-private-testnet-rootchain'
            )
          "
        >
          Tokamak Plasma
        </button>
        <div class="soon-tab">
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
        </div>
        <div class="divider" />
        <div class="tab-title">TON Ecosystem</div>
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
          @click="click('https://simple.staking.tokamak.network/')"
        >
          Staking
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://swap.tokamak.network/')"
        >
          Swap
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://tonstarter.tokamak.network/')"
        >
          TONStarter
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://tosv2.tokamak.network/')"
        >
          TOSv2
        </button>
        <button
          class="tab-linked"
          style="cursor: pointer"
          @click="click('https://price.tokamak.network/')"
        >
          Price Dashboard
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    click(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "ServicesDropDown.scss";
</style>
