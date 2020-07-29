// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'semantic-ui-css/semantic.min.css';

import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueMeta);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
