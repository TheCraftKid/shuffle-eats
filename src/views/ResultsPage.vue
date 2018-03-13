<template>
  <section id="results">
    <results-card :result="firstResult"></results-card>
    <recent-results></recent-results>
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
    result() {
      return {
        name: 'hello',
      };
    },
  },

};
</script>

<style scoped>
.recent-results {
  margin-top: 16px;
}
</style>
