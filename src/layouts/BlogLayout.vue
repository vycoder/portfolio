<template>
  <div style="max-width: 100vw" class="q-px-lg">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'BlogLayout'
}
</script>

<style lang="stylus">
h1
  font-size 3.5rem
img
  max-width 100%
  border-radius 1rem
  display block
  text-align center
  margin 0 auto
</style>
