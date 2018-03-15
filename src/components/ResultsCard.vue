<template>
  <md-card class="results-card">
    <md-card-header>
      <div class="md-subhead">You're eating at...</div>
      <div class="md-title">{{ result.name }}</div>
    </md-card-header>
    <md-card-actions>
      <md-button>Another one</md-button>
      <md-button class="md-primary">Learn more</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'results-card',
  props: [
    'result',
  ],
};
</script>

<style scoped>
.md-card {
  padding: 8px;
}
</style>
