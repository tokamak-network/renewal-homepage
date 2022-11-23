<template>
  <div class="gnb">
    <a href="https://vision.tokamak.network/" :style="{ width: '100px' }" class="link">
      <div>Vision</div>
    </a>
    <a
      href="https://tokamak.network/#/"
      :style="{ width: '158px' }"
      class="active-link"
    >
      <div>Tokamak Network</div>
    </a>
    <a
      href="https://simple.staking.tokamak.network/"
      :style="{ width: '137px' }"
      class="link"
    >
      <div>Simple Staking</div>
    </a>
    <a
      href="https://dao.tokamak.network/#/"
      :style="{ width: '190px' }"
      class="link"
    >
      <div>Tokamak Network DAO</div>
    </a>
    <a
      href="https://swap.tokamak.network/"
      :style="{ width: '76px' }"
      class="link"
    >
      <div>Swap</div>
    </a>
    <a
      href="https://tonstarter.tokamak.network/"
      :style="{ width: '114px' }"
      class="link"
    >
      <div>TONStarter</div>
    </a>
   
  </div>
</template>

<script>
import "@fontsource/titillium-web";
export default {};
</script>
<style lang="scss" scoped>
@import "TokamakGNB.scss";
</style>
