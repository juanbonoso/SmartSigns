import Vue from "vue";
// import App from "./App.vue";
import Three from "./pages/Three.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Three)
}).$mount("#app");
