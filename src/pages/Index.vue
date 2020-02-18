<template>
  <q-page class="bg-deep-purple">
    <div id="particles-js" style="z-index: 1"></div>
    <nav class="uppercase font-text text-white text-weight-bold z-max">
      <ul class="row justify-between q-ma-none q-pa-none" style="list-style:none;">
        <span class="text-pink">&laquo;</span>
        <router-link tag="li" exact class="link" to="/blog">Blog</router-link>
        <router-link tag="li" exact class="link" to="/projects">Projects</router-link>
        <router-link tag="li" exact class="link" to="/contact">contact</router-link>
        <span class="text-pink">&raquo;</span>
      </ul>
    </nav>
    <div class="row absolute-top full-height">
      <div class="col-xl-6 col-lg-12 q-pa-md q-py-xl bg">
        <div class="column justify-center full-height">
          <div class="q-pt-xl q-mt-xl">
            <img src="~assets/images/profile.png" class="profile block shadow-20 q-mx-auto" />
            <h1 class="text-white q-my-xl q-pb-lg text-center">{{data.greeting}}</h1>
            <div class="q-mt-xl">
              <p v-for="(text, index) in data.introduction" :key="index"
                class="text-white intro-text q-mx-auto">
                {{text}}
              </p>
            </div>
          </div>
          <div class="icon-tray q-mx-auto q-mt-md row justify-between items-center cursor-pointer text-white">
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
        </div>
      </div>
      <div class="col-xl-6 col-lg-12 bg-white">
        <div class="q-pa-xl column justify-center full-height">
          <div>
            <h6 class="text-cyan font-text q-mb-lg">About Me</h6>
            <p
              v-for="(text, index) in data.about"
              :key="index"
              v-html="text" />
          </div>
          <div>
            <h6 class="text-cyan font-text q-mb-lg">Experience</h6>
            <q-list no-border class="q-ma-none q-pa-none">
              <q-item>
                <q-item-side>
                  <q-icon name="code" size="2.2rem" />
                </q-item-side>
                <q-item-main label="Full-Stack Sofware Engineer" sublabel="Freelance"/>
                <q-item-side right class="">2018 - Now</q-item-side>
              </q-item>
              <q-item
                v-for="(work, index) in data.experience"
                :key="index">
                <q-item-side>
                  <q-item-tile avatar>
                    <img :src="`statics/images/logos/${work.logo}`">
                  </q-item-tile>
                </q-item-side>
                <q-item-main :label="work.title" :sublabel="work.company"/>
                <q-item-side right class="">{{work.date}}</q-item-side>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        size="lg"
        icon="email"
        color="teal"
        class="shadow-20"
        @click="openURL('mailto:josephharveyangeles@gmail.com')"/>
    </q-page-sticky>
  </q-page>
</template>
<script>
import { openURL, QItemTile, QPageSticky } from 'quasar'

import DATA from '../statics/data/index.json'

export default {
  name: 'PageIndex',
  components: { QItemTile, QPageSticky },
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
  width 50%
  position fixed
  @media (max-width $breakpoint-md) {
    width 100%
  }
.bg
  background $deep-purple
  background linear-gradient(150deg, rgba($purple, .1) 15%, rgba($cyan, .5) 70%, rgba($deep-purple, .3) 94%),
    url("/statics/bg.jpg") center no-repeat
  background-size cover
nav
  position absolute
  top 5%
  left 26%
  transform translateX(-50%)
  width 500px
  font-size .9rem
  li
    cursor pointer
  @media (max-width $breakpoint-lg) {
    left 50%
  }
  @media (max-width: $breakpoint-xs) {
    font-size .78rem
    max-width 90vw
  }
img.profile
  border-radius 10rem
  transition all .3s ease-in-out
  cursor pointer
  width 240px
  height 240px
  @media (max-width $breakpoint-sm) {
    width 120px
    height 120px
  }
  @media (max-width $breakpoint-xs) {
    width 100px
    height 100px
  }
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
    width 93vw
  }
h1
  text-shadow 2px 2px black
  font-size 4.5rem
  @media (max-width: $breakpoint-sm) {
    font-size 3.5rem
  }
  @media (max-width: $breakpoint-xs) {
    font-size 2.3rem
    margin 1.5rem auto
  }
.icon-tray
  width 420px
  z-index 1
  @media (max-width: $breakpoint-sm) {
    width 350px
  }
  @media (max-width: $breakpoint-xs) {
    width 85vw
    svg, i.q-icon {
      font-size 1.3rem !important
    }
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

h6
  border-bottom 3px solid currentColor
  display inline-block
  text-transform uppercase
  padding-bottom .5rem
</style>
