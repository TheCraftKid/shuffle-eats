<template>
  <section id="about">
    <md-card>
      <section id="project">
        <md-subheader class="md-primary">About ShuffleEATS</md-subheader>
        <div class="description-box">
          <p>ShuffleEATS was built over a weekend for the families that could never
            decide what to eat out.
          </p>
          <md-button class="md-primary learn-more" href="https://sites.google.com/view/willie-projects/shuffleeats">
            Learn more
          </md-button>
        </div>
      </section>
      <section id="author">
        <md-subheader class="md-primary">I am Willie Chalmers III</md-subheader>
        <div class="description-box">
          <p>I am a freelance programmer who makes apps and websites for education
            and enjoyment.
          </p>
        </div>
      </section>
      <section id="social">
        <md-subheader class="md-primary">Social links</md-subheader>
        <div class="social-list">
          <span>Projects site: <a href="https://sites.google.com/view/willie-projects/">Willie's Project Showcase</a></span>
          <span>Twitter: <a href="https://twitter.com/@WillieCubed">@WillieCubed</a></span>
        </div>
      </section>
    </md-card>
  </section>
</template>
<script>
export default {
  name: 'about-page',
};
</script>

<style scoped>
#about {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

span {
  display: inline-block;
}

.md-card {
  padding: 16px;
  margin: 0px;
  max-width: 600px;
}

.description-box, .social-list {
  text-align: left;
  max-width: 368px;
  padding: 0px 16px;
  margin-bottom: 16px;
}
</style>
