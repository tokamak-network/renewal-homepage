import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AxiosPlugin from "vue-axios-cors";
import VueMq from "vue-mq";
import VueI18n from "vue-i18n";
import langShortCodes from "@/translations/getShortCodes";
import languages from "@/translations";
import VueGtag from "vue-gtag";

Vue.use(VueI18n);

const getDefaultLang = () => {
  if (router.options.base) {
    const shortCode = router.options.base.replace("/", "");
    if (Object.keys(langShortCodes).includes(shortCode)) {
      store.dispatch("main/setLocale", {
        locale: langShortCodes[shortCode],
        save: false,
      });
      return langShortCodes[shortCode];
    }
  }
  return "en_US";
};
Vue.use(VueGtag, {
  config: {
    id: "G-L1Y4BHH90T",
  },
});

Vue.use(VueMq, {
  breakpoints: {
    mobile: 840,
    tablet: 1280,
    desktop: Infinity,
  },
});

const i18n = new VueI18n({
  locale: getDefaultLang(),
  fallbackLocale: "en_US",
  messages: languages,
  silentTranslationWarn: true,
});
Vue.$i18n = i18n;

Vue.config.productionTip = false;

Vue.use(AxiosPlugin);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
