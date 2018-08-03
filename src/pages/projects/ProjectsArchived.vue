<template>
  <div>
    <project
      v-for="(project, key) in archived" :key="key"
      :project="project"
      />
    <div class="row projects-nav">
      <q-btn
        to="/projects"
        size="lg"
        class="col q-mr-sm text-primary font-consolas projects-nav-link">
          backToFeatured()
      </q-btn>
      <q-btn
        to="unistuff"
        size="lg"
        class="col q-ml-sm text-primary font-consolas projects-nav-link">
          getUniStuff()
      </q-btn>
    </div>
  </div>
</template>
<script>
import Data from '../../statics/data/projects.json'
import Project from '../../components/projects/Project'
export default {
  name: 'ProjectsPage',
  components: {Project},
  created () {
    this.archived = Data.archived
  }
}
</script>
