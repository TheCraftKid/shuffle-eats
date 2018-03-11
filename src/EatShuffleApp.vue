<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <span class="md-title">EatShuffle</span>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <router-view></router-view>
    </md-app-content>
  </md-app>
</template>

<style>
.md-app-content {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  text-align: center;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.md-app-content::before {
  background: url('assets/background.jpg');
  background-size: auto 100%;
}
</style>
