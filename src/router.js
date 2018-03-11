import Vue from 'vue';
import Router from 'vue-router';
import EatChoiceCard from './components/EatChoiceCard.vue';
import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: EatChoiceCard,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});

export default {
  router,
};
