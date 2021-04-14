<template>
  <div class="header">
    <div class="header-title">
      <img
        src="@/assets/tokamak-symbol.svg"
        class="tokamak-logo"
        style="width: 45px; height: 30px"
      />
      <img src="@/assets/tokamak-text.svg" class="tokamak-text" />
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
    </div>
    <div style="display: flex; flex: 1; justify-content: center">
      <div class="menu">
        <router-link
          :to="'/'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('/'),
          }"
        >
          Home
        </router-link>
        <router-link
          :to="'/solutions'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('solutions'),
          }"
        >
          Solutions
        </router-link>
        <router-link
          :to="'/services'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('services'),
          }"
        >
          Services
        </router-link>
        <router-link
          :to="'/developers'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('developers'),
          }"
        >
          Developers
        </router-link>
        <router-link
          :to="'/about'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('about'),
          }"
        >
          About
        </router-link>
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
      const storedLocale = this.supportedLanguages.find((item) => {
        return item.langCode === "en_US";
      });

      // this._i18n.locale = this.locale;
      console.log(storedLocale);
      this._i18n.locale = "en_US";
      this.currentFlag = storedLocale.flag;
      this.currentName = storedLocale.name;
    },
    languageItemClicked(obj) {
      this.$i18n.locale = obj.langCode;
      this.currentName = obj.name;
      this.currentFlag = obj.flag;
      this.setLocale({ locale: obj.langCode, save: true });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Header.scss";
</style>
