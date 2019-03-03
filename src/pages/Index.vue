<template>
  <q-page class="bg">
    <div id="particles-js"></div>
    <nav class="uppercase font-text text-white text-weight-bold">
      <ul class="row justify-between q-ma-none q-pa-none" style="list-style:none;">
        <span>&laquo;</span>
        <router-link tag="li" exact class="link" to="/blog">Blog</router-link>
        <router-link tag="li" exact class="link" to="/projects">Projects</router-link>
        <router-link tag="li" exact class="link" to="/contact">contact</router-link>
        <span>&raquo;</span>
      </ul>
    </nav>
    <div class="column items-center absolute-center text-center">
      <img src="~assets/profile.png" class="block shadow-20" width="170px"/>
      <h1 class="text-white q-my-md q-mb-xl">{{data.greeting}}</h1>
      <p v-for="(text, index) in data.introduction" :key="index"
        class="text-white text-center intro-text q-mx-auto">
        {{text}}
      </p>
    </div>
    <div class="icon-tray row justify-between items-center cursor-pointer text-white">
      <template v-for="(social, index) in data.socials">
        <f-icon
          :key="index"
          v-if="social.iconType === 'fa'"
          @click="openURL(social.link)"
          :icon="social.icon"
          :class="social.class"
          size="2x"/>
        <q-icon
          v-else
          :key="index"
          @click.native="openURL(social.link)"
          :name="social.icon"
          :class="social.class"
          size="2rem" />
      </template>
    </div>
    <span class="copyright block text-white q-caption text-white">
      &copy; {{new Date().getFullYear()}}
    </span>
  </q-page>
</template>
<script>
import { openURL } from 'quasar'

import DATA from '../statics/data/index.json'

export default {
  name: 'PageIndex',
  created () {
    window.particlesJS.load('particles-js', '/statics/config/particles-config.json', () => {})
    this.data = DATA
  },
  data () {
    return { data: {} }
  },
  meta: {
    title: 'Joseph Harvey Angeles | Software Engineer',
    meta: DATA.meta
  },
  methods: { openURL }
}
</script>
<style lang="stylus" scoped>
@import '~variables'
#particles-js
  height 100%
  width 100%
  position fixed
.bg
  background $deep-purple
  background linear-gradient(150deg, rgba($purple, .1) 15%, rgba($cyan, .5) 70%, rgba($deep-purple, .3) 94%),
    url("/statics/bg.jpg") center no-repeat
  background-size cover
nav
  position fixed
  top 20px
  left 50%
  transform translateX(-50%)
  width 350px
  li
    cursor pointer
  @media (max-width: $breakpoint-xs) {
    width: 320px;
  }
img
  border-radius 10rem
  transition all .3s ease-in-out
  cursor pointer
  @media (max-width: $breakpoint-sm) {
    width 120px;
    height 120px;
  }
  &:hover
    transform scale(.2)
    filter drop-shadow(0px 0px 12px white) blur(100px)
.intro-text
  font-size 1.2rem
  max-width 900px
  font-weight 500
  text-shadow 2px 2px $grey
  @media (max-width: $breakpoint-sm) {
    font-size 1rem
  }
  @media (max-width: $breakpoint-xs) {
    font-size .8rem
    width 330px
  }
h1
  text-shadow 2px 2px black
  font-size 5rem
  @media (max-width: $breakpoint-sm) {
    font-size 4rem
  }
  @media (max-width: $breakpoint-xs) {
    font-size 3rem
  }
.icon-tray
  width 420px
  position fixed
  bottom 30px
  left 50%
  transform translateX(-50%)
  @media (max-width: $breakpoint-sm) {
    width: 350px;
  }
  @media (max-width: $breakpoint-xs) {
    width: 320px;
  }
.icon
  transition all .2s ease-in
  &:hover
    color white
    transform scale(1.2)
    filter drop-shadow(0px 0px 12px white)
  &:active
    filter drop-shadow(0px 0px 12px white) blur(100px)
.icon-disabled
  pointer-events none
  color $grey-5
.copyright
  position fixed
  bottom 5px
  right 5px
  font-size 11px
.link
  padding-bottom .5rem
  position relative
  transition .2s ease
  letter-spacing 2px
  &:after
    content ''
    position absolute
    display inline
    bottom 0
    left 50%
    width 0%
    transform translateX(-50%)
    border-bottom 2px solid $pink
    transition .4s
  &:hover
    transform scale(1.1)
    &:after
      width 100%
  &:active
    filter drop-shadow(0px 0px 12px white) blur(100px)
</style>
