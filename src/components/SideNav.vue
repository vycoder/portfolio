<template>
  <q-list dense link no-border dark class="bg side-nav q-ml-xl q-px-md shadow-5">
    <q-list-header>
      <router-link to="/" class="row justify-center items-center q-py-md">
        <img src="~assets/profile.png" alt="Joseph Harvey Angeles | Profile" class="shadow-5">
      </router-link>
    </q-list-header>
    <q-item-separator class="q-mb-md"/>
    <q-collapsible dense label="Projects" opened class="q-my-none">
      <q-list link no-border dense class="q-py-none">
        <q-item to="/projects" exact>
          <q-item-main label="Client Projects" />
        </q-item>
        <q-item to="/projects/side">
          <q-item-main label="Side Projects" />
        </q-item>
        <q-item to="/projects/archive">
          <q-item-main label="Archived Projects" />
        </q-item>
        <q-item to="/projects/university">
          <q-item-main label="University Projects" />
        </q-item>
      </q-list>
    </q-collapsible>
    <q-collapsible to="/blog" dense label="Blogs" class="q-my-none" opened>
      <q-list link no-border dense class="q-py-none">
        <q-item
          v-for="(menu, index) in blogMenus"
          :key="index"
          :to="{ name: 'BlogIndex', params: { id: menu } }"
          >
          <q-item-main :label="menu" />
        </q-item>
      </q-list>
    </q-collapsible>
    <q-item to="/contact" exact>
      <q-item-main label="Contact"/>
    </q-item>
    <q-item-separator class="q-mt-lg"/>
    <div class="icon-tray row justify-around items-center cursor-pointer text-white q-py-md">
      <template v-for="(social, index) in socials">
        <f-icon
          :key="index"
          v-if="social.iconType === 'fa'"
          @click="openURL(social.link)"
          :icon="social.icon"
          :class="social.class"
          size="lg"/>
        <q-icon
          v-else
          :key="index"
          @click.native="openURL(social.link)"
          :name="social.icon"
          :class="social.class"
          size="1.5rem" />
      </template>
    </div>
  </q-list>
</template>
<script>
import { openURL } from 'quasar'

import BLOGENTRIES from 'statics/data/blogs.json'

export default {
  name: 'SideNav',
  created () {
    this.blogMenus = Object.keys(BLOGENTRIES)
  },
  data () {
    return {
      socials: [
        { 'iconType': 'fa', 'icon': ['fab', 'youtube'], 'class': 'icon-disabled', 'link': 'https://github.com/josephharveyangeles/' },
        { 'iconType': 'fa', 'icon': ['fab', 'dev'], 'class': 'icon', 'link': 'https://dev.to/josephharveyangeles' },
        { 'iconType': 'fa', 'icon': ['fab', 'medium'], 'class': 'icon', 'link': 'https://medium.com/@yhev' },
        { 'iconType': 'fa', 'icon': ['fab', 'twitter'], 'class': 'icon', 'link': 'https://twitter.com/yev' }
      ],
      blogMenus: []
    }
  },
  methods: {
    openURL
  }
}
</script>
<style lang="stylus" scoped>
@import '~variables'

.side-nav
  max-width 280px
  position sticky
  top 0
  @media (max-width: $breakpoint-sm) {
    width 100%
    height 100%
    max-width 100%
    margin 0 !important
  }

img
  max-width 100%
  display block
  border-radius 50%
  width 130px
  height 130px
  transition all .3s ease-in-out
  cursor pointer
  &:hover
    transform scale(1.05)
    box-shadow 1px 10px 100px 0px rgba($teal, .5)
  &:active
    transform scale(.2)
    filter drop-shadow(0px 0px 12px white) blur(100px)

/deep/ .q-item.router-link-active
  background none !important
  .q-item-label
    text-shadow 0px 0px 5px $pink !important

/deep/ .q-item:hover
  background none !important

/deep/ .q-item-label
  font-size 1.05rem
  font-weight bold
  text-shadow 0px 0px 5px black
  transition all .3s ease
  &:hover
    text-shadow 0px 0px 5px $light-blue
    letter-spacing 2px
    background-color none
  &:active
    filter drop-shadow(0px 0px 12px white) blur(100px)

.bg
  background $deep-purple
  background linear-gradient(150deg, $cyan, $teal, $deep-purple)
  border-bottom-left-radius .5rem
  border-bottom-right-radius .5rem
  @media (max-width: $breakpoint-sm) {
    border-radius 0px
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

</style>
