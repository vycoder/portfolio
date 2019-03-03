<template>
  <div class="q-px-lg">
    <div class="q-mt-xl q-headline uppercase text-grey text-bold thoughts-on">
      Thoughts on...
    </div>
    <h2 class="q-mt-sm capitalize font-display" :class="`text-${$colors[chosenTag]}-9`">
      {{category.title}}
    </h2>
    <p class="q-mb-lg">{{category.description}}</p>
    <blog-card
      v-for="blog in cards"
      :color="blog.color"
      :key="blog.id"
      :date="blog.date"
      :tags="blog.tags"
      :title="blog.title"
      :description="blog.description"
      @tag="(tag) => $router.push({name: 'thoughts', params: {tag} })"
      @click="$router.push({name: blog.id})"
      />
  </div>
</template>

<script>
import BlogCard from 'components/BlogCard'
import BLOGENTRIES from 'statics/data/blogs.json'
import CATEGORIES from 'statics/data/blog-categories.json'

export default {
  name: 'ThoughtsOn',
  components: { BlogCard },
  computed: {
    chosenTag () {
      return this.$route.params.tag
    },
    category () {
      return CATEGORIES[this.chosenTag]
    },
    cards () {
      return Object.keys(BLOGENTRIES)
        .map(e => BLOGENTRIES[e].map(entry => ({...entry, section: e})))
        .reduce((a, b) => a.concat(b), [])
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .filter(e => e.tags.find(tag => tag === this.chosenTag) !== undefined)
        .map(entry => ({
          id: entry.id,
          date: entry.date,
          title: entry.title,
          description: entry.description,
          color: this.$colors[this.chosenTag],
          tags: entry.tags.map(tag => ({ name: tag, color: this.$colors[tag] }))
        }))
    }
  }
}
</script>

<style lang="stylus" scoped>
p
  font-size 1.2rem
</style>
