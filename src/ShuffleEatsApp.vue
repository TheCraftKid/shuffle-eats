<template>
  <md-app>
    <md-app-toolbar class="md-large md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" v-if="!rootNavLevel" v-on:click="goBack">
            <md-icon>back</md-icon>
          </md-button>
        </div>

        <div class="md-toolbar-section-end">
          <md-menu md-size="big" md-direction="bottom-end">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item>
                <router-link to="/about" tag="a"><span class="pointer-hover">About</span></router-link>
                <md-icon>info_outline</md-icon>
              </md-menu-item>

              <md-menu-item>
                <span>Send Feedback</span>
                <md-icon>feedback</md-icon>
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </div>

      <div class="md-toolbar-row md-toolbar-offset">
        <router-link to="/" class="md-display-1"><span class="pointer-hover app-title">ShuffleEATS</span></router-link>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <router-view></router-view>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  name: 'eat-shuffle-app',
  computed: {
    rootNavLevel() {
      return true;
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    showOptions() {
    },
  },
};
</script>

<style>
.md-app {
  height: 100vh;
}

.md-app-content {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  text-align: center;
  justify-content: center;
  background: url('assets/background.jpg');
  background-size: auto 100%;
}

.pointer-hover,
.pointer-hover:hover,
.pointer-hover:visited,
.pointer-hover:link,
.pointer-hover:active {
  cursor: pointer;
  text-decoration: none;
}

.app-title {
  font-family: 'Open Sans', 'Roboto', 'Noto', sans-serif;
  font-style: italic;
}
</style>
