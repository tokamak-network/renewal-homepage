<template>
  <div class="services">
    <div class="services-line" />
    <div class="tab-container">
      <div class="tab-title">Layer2s</div>
      <button class="tab" :disabled="true">Tokamak Plasma</button>
      <div class="soon-tab">
        <button class="tab" :disabled="true">Optimsitic Rollup</button>
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
      <button class="tab" @click="click('https://dao.tokamak.network/#/')">
        DAO
      </button>
      <button :disabled="true" class="tab">POWER TON</button>
      <button class="tab" @click="click('https://staking.tokamak.network/')">
        Staking
      </button>
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
