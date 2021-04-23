<template>
  <div class="mobile-header">
      <transition name="slide">
    <div v-if="isOpen" class="header-contents">
      <div class="contents-line"></div>
      <div class="header-top">
        <div class="language">
          <div
            class="lang"
            :style="currentFlag === 'EN' ? { color: '#246fed' } : {}"
            @click="languageItemClicked(supportedLanguages[0])"
          >
            EN
          </div>
          <div style="margin: 0 3px 0 3px">|</div>
          <div
            class="lang"
            :style="currentFlag === 'KR' ? { color: '#246fed' } : {}"
            @click="languageItemClicked(supportedLanguages[1])"
          >
            KR
          </div>
          <div style="margin: 0 3px 0 3px">|</div>
          <div
            class="lang"
            :style="currentFlag === 'CN' ? { color: '#246fed' } : {}"
            @click="languageItemClicked(supportedLanguages[2])"
          >
            CN
          </div>
        </div>
        <img src="@/assets/Burger_close_icon.png" @click="isOpen = false" />
      </div>
      <div class="header-tabs">
        <div
          class="menu-item"
          :class="{
            selected: $route.path === '/',
          }"
          @click="
            route('/');
            isOpen = false;
          "
        >
          Home
        </div>
        <div
          class="menu-item"
          :class="{
            selected: $route.path.includes('solutions'),
          }"
          @click="
            route('/solutions');
            isOpen = false;
          "
        >
          Solutions
        </div>
        <div class="menu-item-services">
          Services
          <div class="menu-item-sub">
            <div class="menu-item-sub-title">
              Layer 2
              <button class="menu-item-sub-item-linked">Tokamak Plasma</button>
              <div class="menu-item-sub-item">
                Optimsitic Rollup
                <div class="soon-container">SOON</div>
              </div>
              <div class="menu-item-sub-item">
                zk-rollup
                <div class="soon-container">SOON</div>
              </div>
              <div class="menu-item-sub-item">
                zk-opru
                <div class="soon-container">SOON</div>
              </div>
            </div>
            <div class="menu-item-sub-title">
              TON Ecosystem
              <button
                class="menu-item-sub-item-linked"
                @click="click('https://dao.tokamak.network/#/')"
              >
                DAO
              </button>
              <button
                class="menu-item-sub-item-linked"
                style="marginbottom: 0px"
                @click="click('https://staking.tokamak.network/')"
              >
                Staking
              </button>
            </div>
          </div>
        </div>
        <div class="menu-item-services" @click="isOpen = false">
          Developers
          <div class="menu-item-sub">
            <button
              class="menu-item-sub-item-linked"
              @click="click('https://github.com/Onther-Tech')"
            >
              Github
            </button>
            <button
              class="menu-item-sub-item-linked"
              @click="click('https://docs.tokamak.network/')"
            >
              Documents
            </button>
            <button
              class="menu-item-sub-item-linked"
              @click="
                click('https://onther-tech.github.io/papers/tech-paper.pdf')
              "
            >
              Papers
            </button>
          </div>
        </div>
        <div
          class="menu-item"
          :class="{
            selected: $route.path.includes('about'),
          }"
          @click="
            route('/about');
            isOpen = false;
          "
        >
          About
        </div>
      </div>
    </div>
      </transition>
    <div class="header-container">
      <!-- <div class="line" /> -->
      <div class="logo-container">
        <img
          class="logo"
          src="@/assets/mobile_logo.png"
          alt=""
          width="205"
          height="30"
        />
        <img
          class="menu-icon"
          src="@/assets/Burger_icon.png"
          alt=""
          width="30"
          height="30"
          @click="isOpen = true"
        />
      </div>
    </div>
  </div>
</template>
<script>
import supportedLang from "./supportedLang";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      supportedLanguages: supportedLang,
      currentName: "English",
      currentFlag: "EN",
      isOpen: false,
    };
  },
  computed: {
    ...mapState(["locale"]),
  },
  watch: {
    locale() {
      this.getCurrentLang();
    },
  },
  mounted() {
    this.getCurrentLang();
  },
  methods: {
    ...mapActions(["setLocale"]),
    getCurrentLang() {
      console.log(this.$route.path);
      const storedLocale = this.supportedLanguages.find((item) => {
        return item.langCode === "en_US";
      });
      // this._i18n.locale = this.locale;
      console.log(this.locale);
      this._i18n.locale = "en_US";
      this.currentFlag = storedLocale.flag;
      this.currentName = storedLocale.name;
    },
    languageItemClicked(obj) {
      this.$i18n.locale = obj.langCode;
      this.currentName = obj.name;
      this.currentFlag = obj.flag;
      this.setLocale({ locale: obj.langCode, save: true });
      this.$store.dispatch("setLocale", obj.langCode);
      this.$store.dispatch("setRoadMap", obj.langCode);
    },
    route(path) {
      if (this.$route.path === path) {
        return;
      }
      this.$router.push({ path });
    },
    click(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "MobileHeader.scss";
</style>
