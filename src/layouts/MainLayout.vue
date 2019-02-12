<template>
  <q-layout class="bg-grey-2">
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
      content-class="bg-grey-2">
      <side-nav :socials="socials" @link="openURL" />
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

import SideNav from 'components/SideNav'

export default {
  name: 'MainLayout',
  components: { SideNav },
  data () {
    return {
      leftDrawer: true,
      socials: [
        { 'iconType': 'fa', 'icon': ['fab', 'youtube'], 'class': 'icon-disabled', 'link': 'https://github.com/josephharveyangeles/' },
        { 'iconType': 'fa', 'icon': ['fab', 'dev'], 'class': 'icon', 'link': 'https://dev.to/josephharveyangeles' },
        { 'iconType': 'fa', 'icon': ['fab', 'medium'], 'class': 'icon', 'link': 'https://medium.com/@yhev' },
        { 'iconType': 'fa', 'icon': ['fab', 'twitter'], 'class': 'icon', 'link': 'https://twitter.com/yev' }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>
</style>
