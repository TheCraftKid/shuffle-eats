import Vue from 'vue';
import Router from 'vue-router';
import EatChoiceCard from './components/EatChoiceCard.vue';
import About from './views/About.vue';
import ResultsPage from './views/ResultsPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: EatChoiceCard,
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsPage,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
