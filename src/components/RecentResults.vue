<template>
  <md-card class="recent-results container">
    <md-subheader class="md-primary">Recent Shuffles</md-subheader>
    <md-card v-for="result in results" :key="result.name">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <img :src="result.url" :alt="result.name">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{ result.name }}</span>
            <span class="md-subhead">{{ result.distance }}</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </md-card>
</template>

<script>
export default {
  name: 'recent-results',
  props: [
    'results',
  ],
};
</script>

<style scoped>
.container {
  padding: 16px;
}
</style>
