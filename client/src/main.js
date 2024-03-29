/*!

=========================================================
* Vue White Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-white-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vue-white-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import Vuex from 'vuex'
import VueRouter from "vue-router";
import SocialSharing from "vue-social-sharing"
import VueGitHubButtons from "vue-github-buttons"
import "vue-github-buttons/dist/vue-github-buttons.css"
import App from "./App.vue";
import '@/assets/scss/white-dashboard.scss';
import '@/assets/css/nucleo-icons.css';
import "@/assets/demo/demo.css";
import store from "./store";
import VuePlyr from 'vue-plyr'

import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import RTLPlugin from "./RTLPlugin";
import Notify from "@/components/NotificationPlugin";
import i18n from "./i18n"
import SideBar from "@/components/SidebarPlugin";
import { BootstrapVue, ModalPlugin } from 'bootstrap-vue'

import "./assets/landing/font-awesome.min.css";


// import "./assets/landing/jquery-1.11.1.min.js"
// import "./assets/landing/plugins.js"
// import "./assets/landing/app.js"

// import 'vue-plyr/dist/vue-plyr.css';


Vue.config.productionTip = false;

// router setup
import routes from "./router";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes,
  mode: 'history',
  linkExactActiveClass: "active"
});
Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(SocialSharing);
Vue.use(VueGitHubButtons, { useCache: true });
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(RTLPlugin);
Vue.use(SideBar);
Vue.use(Notify);

Vue.use(ModalPlugin)
Vue.use(BootstrapVue)

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ['ended']
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
