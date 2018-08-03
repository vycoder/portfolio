<template>
  <div class="q-pa-xl">
    <h3 v-if="isBlogIndex" class="text-center font-courier">/** Blog **/</h3>
    <h1>h1 outside</h1>
    <div class="blogs">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogLayout',
  computed: {
    isBlogIndex () {
      return this.$route.name === 'blogIndex'
    }
  }
}
</script>

<style lang="stylus" scoped>
h3
  margin-top 0
h1
  color green
.blogs {
  /deep/ h1 {
    color red
  }
}
</style>
