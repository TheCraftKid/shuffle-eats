<template>
  <md-card>
    <md-subheader class="md-primary">Food genres</md-subheader>
    <section id="cuisineOptions" class="options-container">
      <md-checkbox class="option" v-model="request.cuisineTypes" value="Mexican">
        Mexican food</md-checkbox>
      <md-checkbox class="option" v-model="request.cuisineTypes" value="Chinese">
        Chinese food</md-checkbox>
    </section>
    <md-subheader class="md-primary">Restaraunt Types</md-subheader>
    <section id="restarauntOptions" class="options-container">
      <md-checkbox class="option" v-model="request.restarauntTypes" value="Fast Food">
        Fast food</md-checkbox>
      <md-checkbox class="option" v-model="request.restarauntTypes" value="Take out">
        Take-out</md-checkbox>
    </section>
    <section id="debug">
      {{ displayedFoods }}
    </section>
    <md-button class="md-primary md-raised">Shuffle and eat</md-button>
  </md-card>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';

function deconstructFoodTypes(foodTypes) {
  let thing = '';
  foodTypes.forEach((type, index) => {
    thing += `${type}${index < foodTypes.length ? ', ' : ''}`;
  });
  return thing;
}

export default {
  name: 'eats-choice-card',
  components: {
    'search-box': SearchBox,
  },
  data() {
    return {
      searchQuery: '',
      request: {
        cuisineTypes: [],
        restarauntTypes: [],
      },
    };
  },
  methods: {
    sendQuery() {
    },
  },
  computed: {
    displayedFoods() {
      const foodTypes = deconstructFoodTypes(this.request.params);
      return `Searching for ${this.request.params.length > 1 ? foodTypes : 'food around me'}`;
    },
  },
};
</script>

<style scoped>
.md-card {
  margin: 0 auto;
}

.option {
  flex: 1;
}

.options-container {
  display: flex;
  padding: 0px 16px;
}
</style>
