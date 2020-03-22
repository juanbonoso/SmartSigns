import Vue from 'vue';
// import App from "./App.vue";
import Character from './pages/Character.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Character),
}).$mount('#app');
