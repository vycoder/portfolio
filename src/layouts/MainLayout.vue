<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <q-page-container class="row justify-center">
      <q-page class="row col-xs-12 col-lg-10 col-xl-8">
        <aside class="col-4 q-pr-lg">
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

export default {
  name: 'MainLayout',
  components: { SideNav }
}
</script>

<style lang="stylus" scoped>
</style>
