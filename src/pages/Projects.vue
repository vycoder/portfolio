<template>
  <q-page class="q-px-lg">
    <h2 class="q-mb-lg capitalize"
      :class="`text-${color}`">
      {{category.title}}
    </h2>
    <p class="q-mb-lg">{{category.description}}</p>
    <project-card
      v-for="project in projectItems"
      :key="project.title"
      :project="project"
      :color="color"
      @tag="(tag) => $router.push({name: 'projects-in', params: {tag} })"
      />
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
      return this.$colors[this.section] || 'cyan'
    },
    projectItems () {
      return PROJECTS[this.section].map(project => ({
        ...project,
        tags: project.tags.map(tag => ({
          label: tag, color: this.$colors[tag] || this.color
        }))
      }))
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
