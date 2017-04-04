import "./styles/main.scss";

import Vue from "vue";
import VueRouter from "vue-router";

import vcHeader from "./vue-components/header.vue";
import vcFooter from "./vue-components/footer.vue";

import vcRouterLinks from "./vue-components/links.vue";
import vcPageHome from './vue-components/home.vue';
import vcPageAbout from './vue-components/about.vue';
import vcPageContact from './vue-components/contact.vue';
import global404 from './vue-components/global404.vue';
import subroute404 from './vue-components/subroute404.vue';

// 
// ======================================================/
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: vcPageHome
}, {
  path: '/about',
  component: vcPageAbout
}, {
  path: '/contact/:type/:id',
  component: vcPageContact
}, {
  path: '/contact/*',
  component: subroute404
}, {
  path: '*',
  component: global404
}];

const router = new VueRouter({
  routes
});

// 
// ======================================================/
new Vue({
  el: "#vc-header-mount",
  render: h => h(vcHeader)
});

new Vue({
  el: "#vc-footer-mount",
  render: h => h(vcFooter)
});

new Vue({
  el: '#app',
  router,
  render: h => h(vcRouterLinks)
})