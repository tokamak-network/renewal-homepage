<template>
  <div class="gnb">
    <!-- <a
      href="https://vision.tokamak.network/"
      :style="{ width: '100px' }"
      class="link"
    >
      <div>Vision</div>
    </a> -->
    <a
      href="https://tokamak.network/"
      :style="{ width: '158px' }"
      class="active-link"
    >
      <div>Tokamak Network</div>
    </a>
    <a
      href="https://titan.tokamak.network/"
      :style="{ width: '112px' }"
      class="link"
    >
      <div>L2 Mainnet</div>
    </a>
    <a
      href="https://rolluphub.tokamak.network"
      :style="{ width: '112px' }"
      class="link"
    >
      <div>L2 On-Demand</div>
    </a>
    <a href="https://bridge.tokamak.network/" style="width: 136px" class="link">
      <div>Bridge & Swap</div>
    </a>
    <a
      href="https://simple.staking.tokamak.network/"
      :style="{ width: '90px' }"
      class="link"
    >
      <div>Staking</div>
    </a>
    <a
      href="https://dao.tokamak.network/"
      :style="{ width: '68px' }"
      class="link"
    >
      <div>DAO</div>
    </a>
  </div>
</template>

<script>
import "@fontsource/titillium-web";
export default {};
</script>
<style lang="scss" scoped>
@import "NewGNB.scss";
</style>
