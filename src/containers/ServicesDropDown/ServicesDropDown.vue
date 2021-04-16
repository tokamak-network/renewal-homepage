<template>
  <div class="services">
    <div class="services-line" />
    <div class="tab-container">
      <div class="tab-title">Layer2s</div>
      <button class="tab" @click="click()">Tokamak Plasma</button>
      <div class="soon-tab">
        <button class="tab">Optimsitic Rollup</button>
        <div class="soon">SOON</div>
      </div>
      <div class="soon-tab">
        <button class="tab">zk-rollup</button>
        <div class="soon">SOON</div>
      </div>
      <div class="soon-tab">
        <button class="tab">zk-opru</button>
        <div class="soon">SOON</div>
      </div>
      <div class="divider" />
      <div class="tab-title">TON Ecosystem</div>
      <button class="tab" @click="click()">DAO</button>
      <button class="tab">POWER TON</button>
      <button class="tab">Staking</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    click() {
      console.log("hi");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "ServicesDropDown.scss";
</style>
