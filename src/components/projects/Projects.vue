<template>
  <section >
    <div class="row">
      <div class="col s12">
        <h2 class="superheader flow-text center">/** getProjects(); **/</h2>
      </div>
    </div>
    <hr v-if="!choice" />
    <transition
      appear
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
      mode="out-in"
    >
    <app-projects-menu v-if="!choice" @click="choice = $event"/>
    <div v-else class="row projects">
      <div class="col s12 m6" v-for="(project, index) in projects" :key="index">
        <app-project v-if="choice" :type="choice" :project="project" />
      </div>
    </div>
    </transition>
    <transition
      mode="out-in"
      enter-active-class="animated bounceIn"
      leave-active-class="animated bounceOut"
      appear
    >
    <div v-if="choice" class="fixed-action-btn horizontal">
      <a @click="choice = ''" class="btn-floating btn-large blue-green">
        <i class="material-icons">chevron_left</i>
      </a>
    </div>
    </transition>
  </section>
</template>
<script>
import {ProjectsData} from './data'
import ProjectsMain from '@/components/projects/ProjectsMenu'
import Project from '@/components/projects/Project'
export default {
  components: {
    appProjectsMenu: ProjectsMain,
    appProject: Project
  },
  computed: {
    projects() {
      return ProjectsData[this.choice]
    },
    columnSize() {
      const projectList = ProjectsData[this.choice]
      if (!projectList) {
        return
      }
      return projectList.length % 3 === 0 ? 'm4' : 'm6'
    }
  },
  data() {
    return {
      choice: ''
    }
  },
  methods: {
    log(choice) {
      console.log(choice)
    }
  }
}
</script>

<style>
  .projects {
    width: 85%;
  }
  .superheader {
    font-family: 'Courier New', Courier, monospace;
    font-size: 4vw;
    font-weight: 400;
    margin: 5% 0 auto;
  }
  hr {
    border-color: transparent;
    margin-bottom: 3%;
  }
  .card-title {
    font-family: Consolas, Cochin, Georgia, Times, "Times New Roman", serif;
  }
</style>
