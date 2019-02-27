<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
      content-class="no-box-shadow bg-grey-2">
      <side-nav />
    </q-layout-drawer>
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import SideNav from 'components/SideNav'

export default {
  name: 'MainLayout',
  components: { SideNav },
  data () {
    return { leftDrawer: true }
  }
}
</script>

<style lang="stylus" scoped>
</style>
