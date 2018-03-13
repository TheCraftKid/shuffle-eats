<template>
  <md-card class="search">
    <input v-model="searchQuery">
    <label for="">{{ label }}</label>
  </md-card>
</template>

<script>
export default {
  name: 'search-box',
  props: [
    'label',
  ],
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: 0;
}

.md-card {
  padding: 2px 8px;
  margin: 8px;
}
</style>
