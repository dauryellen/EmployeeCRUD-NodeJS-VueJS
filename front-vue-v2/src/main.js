import Vue from "vue";
import VueSweetAlert from "vue-sweetalert2";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/nprogress/nprogress.css";

Vue.config.productionTip = false;

Vue.use(VueSweetAlert);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
