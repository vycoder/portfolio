<template>
  <div class="q-px-lg">
    <h2 class="q-mb-lg capitalize"
      :class="`text-${getColor(section)}-9`">
      {{category.title}}
    </h2>
    <p class="q-mb-lg">{{category.description}}</p>
    <blog-card
      v-for="blog in entries"
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
  name: 'Blogs',
  components: { BlogCard },
  computed: {
    section () {
      return this.$route.params.id || 'root'
    },
    category () {
      return CATEGORIES[this.section]
    },
    entries () {
      const entries = this.section !== 'root'
        ? BLOGENTRIES[this.section]
        : Object.keys(BLOGENTRIES)
          .map(e => BLOGENTRIES[e].map(entry => ({...entry, section: e})))
          .reduce((a, b) => a.concat(b), [])
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

      return entries.map(entry => ({
        id: entry.id,
        date: entry.date,
        title: entry.title,
        description: entry.description,
        color: this.getColor(entry.section || this.section),
        tags: entry.tags.map(tag => ({ name: tag, color: this.getColor(tag) }))
      }))
    }
  },
  methods: {
    getColor (id) {
      return this.$colors[id] || 'teal'
    }
  },
  meta () {
    return {
      title: `- ${this.category.title}`,
      meta: {
        description: { name: 'description', content: this.category.description }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
p
  font-size 1.2rem
</style>
