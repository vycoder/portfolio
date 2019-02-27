<template>
  <q-page class="q-pa-md">
    <h1 class="q-display-3 text-bold capitalize q-ma-none font-text"
      :class="`text-${color}`">
      {{category.title}}
    </h1>
    <p class="text-bold q-mb-lg">{{category.description}}</p>
    <project-card
      v-for="project in projectItems"
      :key="project.title"
      :project="project"
      :color="color" />
  </q-page>
</template>

<script>
import ProjectCard from 'components/ProjectCard'

import CATEGORIES from 'statics/data/project-category.json'
import PROJECTS from 'statics/data/projects.json'

export default {
  name: 'Projects',
  components: { ProjectCard },
  computed: {
    section () {
      return this.$route.params.id || 'client'
    },
    category () {
      return CATEGORIES[this.section]
    },
    color () {
      const colors = {
        'side': 'teal',
        'archive': 'deep-purple',
        'university': 'pink'
      }
      return colors[this.section] || 'cyan'
    },
    projectItems () {
      return PROJECTS[this.section]
    }
  }
}
</script>

<style lang="stylus" scoped>
p
  font-size 1.2rem
  letter-spacing 1px
</style>
