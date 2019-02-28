<template>
  <q-page class="q-pa-md">
    <h2 class="q-mb-lg capitalize"
      :class="`text-${color}`">
      {{category.title}}
    </h2>
    <p class="q-mb-lg">{{category.description}}</p>
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
  data () {
    return {
      colors: {
        'side': 'teal',
        'archive': 'deep-purple',
        'university': 'pink',
        'web': 'pink',
        'vue': 'green',
        'quasar': 'indigo',
        'java': 'blue',
        'firebase': 'deep-orange',
        'cordova': 'purple',
        'javascript': 'teal',
        'cli': 'cyan',
        'bash': 'cyan',
        'electronics': 'pink',
        'raspberry-pi': 'purple',
        'arduino': 'pink',
        'android': 'teal',
        'python': 'green',
        'django': 'indigo',
        'typescript': 'blue',
        'angular': 'red'
      }
    }
  },
  computed: {
    section () {
      return this.$route.params.id || 'client'
    },
    category () {
      return CATEGORIES[this.section]
    },
    color () {
      return this.colors[this.section] || 'cyan'
    },
    projectItems () {
      return PROJECTS[this.section].map(project => ({
        ...project,
        tags: project.tags.map(tag => ({
          label: tag, color: this.colors[tag] || this.color
        }))
      }))
    }
  }
}
</script>

<style lang="stylus" scoped>
p
  font-size 1.2rem
</style>
