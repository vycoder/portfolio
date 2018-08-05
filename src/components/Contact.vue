<template>
  <div class="q-pa-xl bg-teal-4 main">
    <q-btn size="lg" round flat icon="close" color="white" class="close-btn" v-close-overlay />
    <div class="logo-box text-center">
      <img src="~assets/logo.png">
    </div>
    <h1>Joseph Harvey Angeles</h1>
    <p class="text-white text-center job">Software Engineer</p>
    <div class="text-center font-condensed-roboto">
        <p><a href="mailto:josephharveyangeles@gmail.com">josephharveyangeles@gmail.com</a></p>
        <p class="mobile-hide"><a href="https://www.linkedin.com/in/josephharveyangeles/" target="_blank">www.linkedin.com/in/josephharveyangeles</a></p>
        <p><a href="https://twitter.com/yev" target="_blank">twitter.com/yev</a></p>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import '~variables'
.main {
  +respond-max($breakpoint-sm) {
    max-height 1000vh
  }
}
.logo-box {
  // border 1px solid black
  img {
    max-width 100%
    width 8rem
  }
}
h1 {
  font-family 'Qwigley'
  margin 0 auto
  color white
  font-size 6rem
  +respond-max($breakpoint-sm) {
    font-size 5rem
    text-align center
    margin 5rem auto
  }
}
p {
  margin .7rem
}
a, a:link, a:visited {
  color white;
  text-decoration none
  &:hover {
    text-decoration underline
    color $amber-5
  }
}
.close-btn {
  position absolute
  top 4%
  right 4%
}
.job {
  font-size 1.5rem
}
</style>
