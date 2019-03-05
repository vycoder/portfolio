<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-2">
    <q-layout-header class="lt-md" reveal>
      <q-toolbar :color="color">
        <q-btn @click="drawerOpened = !drawerOpened" flat round icon="menu" color="white" />
      </q-toolbar>
    </q-layout-header>
    <q-layout-footer style="box-shadow: none">
      <tail :color="color" />
    </q-layout-footer>
    <q-layout-drawer v-model="drawerOpened" side="left" class="lt-md">
      <side-nav />
    </q-layout-drawer>
    <q-page-container class="row justify-center">
      <q-page class="row col-lg-12 col-xl-8">
        <aside class="gt-sm col-4 q-pr-lg">
          <side-nav />
        </aside>
        <main class="col">
          <router-view />
        </main>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import SideNav from 'components/SideNav'
import Tail from 'components/Tail'

export default {
  name: 'MainLayout',
  components: { SideNav, Tail },
  data () {
    return {
      drawerOpened: false
    }
  },
  computed: {
    color () {
      const { id, tag } = this.$route.params
      return this.$colors[id || tag] || 'cyan'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
