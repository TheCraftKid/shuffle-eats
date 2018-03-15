<template>
  <section id="results">
    <results-card :result="firstResult"></results-card>
    <recent-results :results="otherResults"></recent-results>
  </section>
</template>

<script>
import ResultsCard from '@/components/ResultsCard.vue';
import RecentResults from '@/components/RecentResults.vue';

export default {
  name: 'results-page',
  components: {
    'results-card': ResultsCard,
    'recent-results': RecentResults,
  },
  computed: {
    firstResult() {
      return this.results[0];
    },
    otherResults() {
      return this.results.slice(1, this.results.length);
    },
    results() {
      return [
        {
          name: 'HelloBurger',
          distance: '0.2 mi',
          url: 'https://lorempixel.net/400/400',
        },
        {
          name: 'Goodbye Tacos',
          distance: '1.5 mi',
          url: 'https://lorempixel.net/400/400',
        },
        {
          name: 'Maybe Yogurt',
          distance: '1.2 mi',
          url: 'https://lorempixel.net/400/400',
        },
        {
          name: 'Alright Bacon',
          distance: '5 mi',
          url: 'https://lorempixel.net/400/400',
        }
      ];
    },
  },
};
</script>

<style scoped>
#results {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.results-card, .recent-results {
  margin: 16px;
}

.results-card {
  max-width: 320px;
}

.recent-results {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 600px;
}
</style>
