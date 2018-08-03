<template>
  <div>
    <div v-for="(project, key) in projects" :key="key" class="q-mb-xl">
      <div class="title">
        <h4 class="font-consolas text-secondary">{{project.name}}</h4>
        <h5 class="font-condensed-roboto text-primary">{{project.title}}</h5>
        <p class="awards text-yellow-9" v-if="project.awards" v-html="project.awards" />
      </div>
      <div class="text text-grey-8 font-condensed-roboto q-mt-sm">
        <p v-for="(text, k) in project.description" :key="k" v-html="text"/>
        <p class="text-amber-10">{{project.tech}}</p>
      </div>
    </div>
    <div class="row projects-nav">
      <q-btn
        to="/projects"
        size="lg"
        class="col q-mr-sm text-primary font-consolas projects-nav-link">
          backToFeatured()
      </q-btn>
      <q-btn
        to="archived"
        size="lg"
        class="col q-ml-sm text-primary font-consolas projects-nav-link">
          getArchived()
      </q-btn>
    </div>
  </div>
</template>
<script>
import DATA from '../statics/data/projects.json'
export default {
  name: 'ProjectsUniStuffPage',
  created () {
    this.projects = DATA.unistuff
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
h4, h5 {
  margin 0
}
h5 {
  font-size 1.3rem
}
.awards {
  font-size .88rem
}
.text {
  font-size .9rem
}
/deep/ a,
&:link,
&:visited {
  color $secondary
  text-decoration none
  &:hover {
    text-decoration underline
  }
}
.projects-nav-link {
  text-transform none
  box-shadow none
  border 1px solid $grey-4
  background-color $grey-1
  &:hover {
    text-decoration underline
    box-shadow 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12)
  }
}
</style>
