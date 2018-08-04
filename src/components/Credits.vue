<template>
  <div class="q-pa-xl">
    <q-btn size="lg" round flat icon="close" color="amber-9" class="close-btn" v-close-overlay />
    <h3 class="text-primary">Site credits</h3>
    <div class="font-condensed-roboto text-grey-8 width">
      <p>This site is built with <a href="https://quasar-framework.org/" target="_blank">Quasar</a> using <a href="https://vuejs.org/" target="_blank">Vue</a> deployed on <a href="https://www.netlify.com/" target="_blank">Netlify</a>.</p>
      <p>Design based on <a href="https://twitter.com/AnjanaVakil" target="_blank">@AnjanaVakil</a>'s (one my favorite tech speakers) <a href="https://vakila.github.io" target="_blank"> website</a>, along with some of my own designs from the previous iterations of this site.</p>
      <p>Blog section was built using <a href="https://github.com/QingWei-Li/vue-markdown-loader" target="_blank">vue-markdown-loader</a> along with some minor configuration for easy writing and publication. Markdown styles are my own design especially built for this site.</p>
      <p>Cool particle effects on the sidenav was implemented using <a href="https://vincentgarreau.com/particles.js/" target="_blank">particle.js</a>.
      <p>Gifs (pronounced with <b>hard-G</b>) are embedded from <a href="https://giphy.com/" target="_blank">Giphy</a>.</p>
      <br>
      <br>
      <p>&#169; {{year}} <span class="text-amber-9">Joseph Harvey Angeles</span></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreditsComponent',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~variables'
h3 {
  margin-top 1rem
}
a, a:link, a:visited {
  text-decoration none
  color $secondary
  &:hover {
    text-decoration underline
    color $primary
  }
}
.width {
  width 500px
  +respond-max($breakpoint-sm) {
    width auto
  }
}
.close-btn {
  position absolute
  top 4%
  right 4%
}
</style>
