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
          </div>
          <img src="@/assets/Burger_close_icon.png" @click="isOpen = false" />
        </div>
        <div class="header-tabs">
          <!-- <div
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
          </div> -->
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
                Mainnet
                <button
                  class="menu-item-sub-item menu-item-sub-item-linked"
                  @click="click('http://titan.tokamak.network/')"
                >
                  Titan
                </button>
              </div>
              <div class="menu-item-sub-title">
                Ecosystem
                <button
                  class="menu-item-sub-item menu-item-sub-item-linked"
                  style="marginbottom: 0px"
                  @click="click('https://bridge.tokamak.network/')"
                >
                  Bridge & Swap
                </button>
                <button
                  class="menu-item-sub-item menu-item-sub-item-linked"
                  style="marginbottom: 0px"
                  @click="click('https://simple.staking.tokamak.network/')"
                >
                  Staking
                </button>
                <button
                  class="menu-item-sub-item menu-item-sub-item-linked"
                  @click="click('https://dao.tokamak.network/#/')"
                >
                  DAO
                </button>
                <button
                  class="menu-item-sub-item menu-item-sub-item-linked"
                  style="marginbottom: 0px"
                  @click="click('https://price.tokamak.network/')"
                >
                  Price Dashboard
                </button>
                <button
                  class="menu-item-sub-item menu-item-sub-item-linked"
                  style="marginbottom: 0px"
                  @click="click('https://explorer.titan.tokamak.network/')"
                >
                  Block Explorer
                </button>
              </div>
              <div class="menu-item-sub-title">
                L2 On-Demand
                <button
                  class="menu-item-sub-item menu-item-sub-item-linked"
                  @click="click('/#layer2', true)"
                >
                  Tokamak
                  <span
                    style="
                      vertical-align: super;
                      display: inline-block;
                      font-size: smaller;
                      margin-left: 2px;
                      margin-bottom: 2px;
                    "
                  >
                    OP
                  </span>
                </button>
                <button
                  class="menu-item-sub-item menu-item-sub-item-linked"
                  @click="click('/#layer2', true)"
                >
                  Tokamak
                  <span
                    style="
                      vertical-align: super;
                      display: inline-block;
                      font-size: smaller;
                      margin-left: 2px;
                    "
                  >
                    ZK+
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="menu-item-services" @click="isOpen = false">
            Developers
            <div class="menu-item-sub">
              <button
                class="menu-item-sub-item-linked"
                @click="click('https://github.com/tokamak-network')"
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
                @click="click(whitepaper)"
              >
                White Papers
              </button>
            </div>
          </div>
          <div
            class="menu-item-services"
            :style="{
              cursor: 'pointer',
              hover: {
                color: '#2a72e5',
              },
            }"
            @click="
              click(
                'https://tokamak.notion.site/Tokamak-Network-Grant-Program-f2384b458ea341a0987c7e73a909aa21'
              )
            "
          >
            Grant
          </div>
          <div
            class="menu-item"
            :class="{
              selected: $route.path.includes('about'),
            }"
            :style="{ marginBottom: '200px' }"
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
          src="@/assets/logo_mobile.png"
          alt=""
          width="205"
          height="30"
          @click="$route.path !== '/' ? $router.push({ path: '/' }) : ''"
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
    ...mapState(["locale", "whitepaper"]),
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
    route(path) {
      if (this.$route.path === path) {
        return;
      }
      this.$router.push({ path });
    },
    click(link, l2) {
      l2 ? window.open(link, "_self") : window.open(link, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "MobileHeader.scss";
</style>
