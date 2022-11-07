<template>
  <div class="gnb">
    <a href="https://vision-page.vercel.app/" :style="{ width: '100px' }" class="link">
      <div>Vision</div>
    </a>
    <a
      href="https://renewal-homepage.vercel.app/#/"
      :style="{ width: '158px' }"
      class="active-link"
    >
      <div>Tokamak Network</div>
    </a>
    <a
      href="https://rinkeby.tonstarter.tokamak.network/"
      :style="{ width: '114px' }"
      class="link"
    >
      <div>TONStarter</div>
    </a>
    <a
      href="https://rinkeby.simple.staking.tokamak.network/"
      :style="{ width: '90px' }"
      class="link"
    >
      <div>Staking</div>
    </a>
    <a
      href="https://rinkeby.dao.tokamak.network/#/"
      :style="{ width: '68px' }"
      class="link"
    >
      <div>DAO</div>
    </a>
    <a
      href="https://tonswapper.vercel.app/"
      :style="{ width: '76px' }"
      class="link"
    >
      <div>Swap</div>
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
