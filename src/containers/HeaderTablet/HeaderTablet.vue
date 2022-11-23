<template>
    <div class="header">
      <div class="header-title">
        <img
          src="@/assets/tokamak-symbol.svg"
          class="tokamak-logo"
          style="width: 45px; height: 30px"
          @click="$route.path !== '/' ? $router.push({ path: '/' }) : ''"
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
          <div class="item">
            <div class="dot" :class="{ visible: $route.path === '/' }" />
            <router-link
              :to="'/'"
              class="menu-item"
              :class="{
                selected: $route.path === '/',
              }"
            >
              Home
            </router-link>
          </div>
          <div class="item">
            <div
              class="dot"
              :class="{ visible: $route.path.includes('solutions') }"
            />
            <router-link
              :to="'/solutions'"
              class="menu-item"
              :class="{
                selected: $route.path.includes('solutions'),
              }"
              @click="selectedMenu = 'solutions'"
            >
              Solutions
            </router-link>
          </div>
          <div class="item">
            <div class="dot" :class="{ visible: showDrop === 'services' }" />
            <div
              class="menu-item"
              :class="{
                selected: showDrop === 'services',
              }"
              @mouseover="openDropDown('services')"
              @mouseleave="showDrop = ''"
            >
              Services
              <div @mouseleave="showDrop = ''">
                <transition name="fade">
                  <services-dropdown v-show="showDrop === 'services'" />
                </transition>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="dot" :class="{ visible: showDrop === 'developers' }" />
            <div
              class="menu-item"
              :class="{
                selected: showDrop === 'developers',
              }"
              @mouseover="openDropDown('developers')"
              @mouseleave="showDrop = ''"
            >
              Developers
              <div @mouseleave="showDrop = ''">
                <transition name="fade">
                  <developers-dropDown v-show="showDrop === 'developers'" />
                </transition>
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="dot"
              :class="{ visible: $route.path.includes('about') }"
            />
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
    </div>
  </template>
  
  <script>
  import supportedLang from "./supportedLang";
  import DevelopersDropDown from "../DevelopersDropDown";
  import ServicesDropDown from "../ServicesDropDown";
  import { mapState, mapActions } from "vuex";
  export default {
    data() {
      return {
        supportedLanguages: supportedLang,
        currentName: "English",
        currentFlag: "EN",
        showDrop: "",
        selectedMenu: "",
      };
    },
    components: {
      "developers-dropDown": DevelopersDropDown,
      "services-dropdown": ServicesDropDown,
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
          return item.langCode === this.locale;
        });
        // this._i18n.locale = this.locale;
        this._i18n.locale = this.locale;
        this.currentFlag = storedLocale.flag;
        this.currentName = storedLocale.name;
      },
      languageItemClicked(obj) {
        this.$i18n.locale = obj.langCode;
        this.currentName = obj.name;
        this.currentFlag = obj.flag;
        this.$store.dispatch("setLocale", obj.langCode);
        this.$store.dispatch("setRoadMap", obj.langCode);
        this.$store.dispatch("setWhitePaper", obj.langCode);
        this.setLocale({ locale: obj.langCode, save: true });
      },
      openDropDown(tab) {
        //  if (this.showDrop === tab) {
        //     this.showDrop = "";
        //   }
        //   else {
        this.showDrop = tab;
        // }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import "HeaderTablet.scss";
  </style>