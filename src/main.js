import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import EatShuffleApp from './EatShuffleApp.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  router,
  render: h => h(EatShuffleApp),
}).$mount('#app');
