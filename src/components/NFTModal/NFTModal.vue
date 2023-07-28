<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="background-image">
        <!-- <h1>100 NFTs</h1>
        <h2>Limited edition for celebrating the opening of Titan L2</h2> -->
        <a
          class="go-button"
          href="https://titan-nft-event.vercel.app/"
          target="_blank"
          >Let's go</a
        >
      </div>
      <div class="close">
        <p
          class="close-button"
          :style="{ textDecoration: 'underline' }"
          @click="handleClickWithCookie"
        >
          오늘 하루 그만보기
        </p>
        <p class="close-button" @click="handleClick">닫기</p>
      </div>
      <!-- <img class="check" src="~/assets/check-icon.png" alt="" /> -->
    </div>
  </div>
</template>

<script>
import "@fontsource/titillium-web";
import VueCookies from "vue-cookies";

export default {
  methods: {
    handleClick() {
      this.$emit("close-modal");
    },
    handleClickWithCookie() {
      this.$emit("close-modal");
      VueCookies.set("nftModal", true, "1d");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "NFTModal.scss";
@import "NFTModal-mobile.scss";
</style>
