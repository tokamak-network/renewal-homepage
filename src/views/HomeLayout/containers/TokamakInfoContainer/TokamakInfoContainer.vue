<template>
  <div>
    <div class="info" v-if="loaded">
      <div class="title">TOKAMAK NETWORK TODAY</div>
      <div class="today-info-section">
        <div class="today-info">
          <div class="title">TON Price</div>
          <div class="content">
            {{
              (info.trade_price * usd).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            <!-- <div>{{ info.trade_price }}</div> -->
            <span class="unit">USD</span>
          </div>
        </div>
        <div class="today-info">
          <div class="title">Trading volume</div>
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
        <div class="today-info">
          <div class="title">TON Staked AMOUNT</div>
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
      <div class="line" />
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
</style>
