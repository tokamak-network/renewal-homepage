import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AxiosPlugin from "vue-axios-cors";

Vue.config.productionTip = false;

Vue.use(AxiosPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
