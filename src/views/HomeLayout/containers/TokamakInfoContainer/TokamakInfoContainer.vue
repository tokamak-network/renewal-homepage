<template>
  <div style="width: 100%">
    <div class="info-section" v-if="loaded">
      <div class="title">{{ $t("home.tokamak_info.title") }}</div>
      <div class="today-info-section">
        <div class="today-info">
          <div class="title">{{ $t("home.tokamak_info.price") }}</div>
          <div class="content">
            {{
              (info.trade_price * usd).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            <span class="unit">USD</span>
          </div>
        </div>
        <div class="line-tablet" />
        <div class="today-info">
          <div class="title">{{ $t("home.tokamak_info.trading_volume") }}</div>
          <div class="content">
            {{
              (info.acc_trade_price_24h * usd).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            <span class="unit">USD</span>
          </div>
        </div>
        <div class="line-tablet" />
        <div class="today-info">
          <div class="title">{{ $t("home.tokamak_info.staked_amount") }}</div>
          <div class="content">
            {{
              totalStaked.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            <span class="unit">TON</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="spinner-container">
      <loading-spinner />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  components: {
    "loading-spinner": LoadingSpinner,
  },
  computed: {
    ...mapState(["info", "usd", "totalStaked", "loaded"]),
  },
};
</script>

<style lang="scss" scope>
@import "TokamakInfoContainer.scss";
@import "TokamakInfoContainer-tablet.scss";
@import "TokamakInfoContainer-mobile.scss";
</style>
