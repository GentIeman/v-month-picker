import Vue from "vue";
import App from "./App.vue";
import vco from "v-click-outside";

Vue.use(vco);
Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
