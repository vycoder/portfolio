<template>
  <div style="max-width: 100vw" class="q-px-lg">
    <router-view />
  </div>
</template>

<script>
import BLOGS from 'statics/data/blogs.json'

export default {
  name: 'BlogLayout',
  created () {
    console.log(this.entry)
  },
  computed: {
    entry () {
      return Object
        .keys(BLOGS)
        .map(entry => BLOGS[entry])
        .reduce((a, b) => a.concat(b), [])
        .find(blog => blog.id === this.$route.name)
    }
  },
  meta () {
    return {
      title: `| Blog - ${this.entry.title}`,
      meta: {
        description: { name: 'description', content: this.entry.description }
      }
    }
  }
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
