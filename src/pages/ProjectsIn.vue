<template>
  <div class="q-px-lg q-pt-lg">
    <h2 class="q-mt-sm capitalize font-display" :class="`text-${$colors[chosenTag]}-9`">
      {{chosenTag}}
    </h2>
    <p class="q-mb-lg">
      Here are all projects that I've done with
      <span class="capitalize text-bold" :class="`text-${$colors[chosenTag]}-9`">
        &nbsp;{{chosenTag}}&nbsp;
      </span>
      through out the years.
    </p>
    <project-card
      v-for="project in projects"
      :key="project.title"
      :project="project"
      :color="color"
      @tag="(tag) => $router.push({name: 'projects-in', params: {tag} })"
    />
  </div>
</template>

<script>
import ProjectCard from 'components/ProjectCard'

import PROJECTS from 'statics/data/projects.json'

export default {
  name: 'ProjectsIn',
  components: { ProjectCard },
  computed: {
    chosenTag () {
      return this.$route.params.tag
    },
    color () {
      return this.$colors[this.chosenTag] || 'teal'
    },
    projects () {
      return Object
        .keys(PROJECTS)
        .map(key => PROJECTS[key])
        .reduce((a, b) => a.concat(b), [])
        .filter(project => project.tags.find(tag => tag === this.chosenTag) !== undefined)
        .map(project => ({
          ...project,
          tags: project.tags.map(tag => ({
            label: tag, color: this.$colors[tag] || this.color
          }))
        }))
    }
  },
  meta () {
    return {
      title: `- ${this.chosenTag.toUpperCase()}`,
      meta: {
        description: {
          name: 'description',
          content: `I like building stuff and trying things out. Here are all the projects I've done in ${this.chosenTag}`
        },
        keywords: { name: 'keywords', content: this.chosenTag }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
p
  font-size 1.2rem
</style>
