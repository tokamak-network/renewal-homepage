<template id="layertwo">
  <div class="container">
    <div class="header">
      <div class="header__title">L2 ON-DEMAND</div>
      <div class="header__description">{{ $t("home.l2.header") }}</div>
    </div>
    <div class="container content">
      <div class="content__service">
        <img
          class="content__service img"
          src="@/assets/L2_img01.svg"
          alt="logo1"
        />
        <div class="content__service title">
          Tokamak
          <div class="title__op">OP</div>
        </div>
        <div class="content__service description">
          {{ $t("home.l2.serviceIntro1") }}
        </div>
        <div class="content__service info">{{ $t("home.l2.infoText") }}</div>
      </div>
      <div class="content__service">
        <img
          class="content__service img"
          src="@/assets/L2_img02.svg"
          alt="logo2"
        />
        <div class="content__service title">
          Tokamak
          <div class="title__zk">ZK+</div>
        </div>
        <div class="content__service description">
          {{ $t("home.l2.serviceIntro2") }}
        </div>
        <div class="content__service info">{{ $t("home.l2.infoText") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
@import "L2PromoContainer.scss";
@import "L2PromoContainer-1280.scss";
@import "L2PromoContainer-tablet.scss";
@import "L2PromoContainer-mobile.scss";
</style>
