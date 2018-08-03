<template>
  <div class="q-pa-xl">
    <h3 class="text-center font-courier">/** {{heading}} **/</h3>
    <div class="projects">
      <transition appear mode="out-in" enter-active-class="animated zoomInUp" leave-active-class="animated zoomOutDown">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectsLayout',
  computed: {
    heading () {
      switch (this.$route.name.toLowerCase()) {
        case 'archived': return 'Projects: Archived'
        case 'unistuff': return 'Projects: UniStuff'
        default: return 'Projects'
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~variables'
h3
  margin-top 0
.projects {
  margin 0 auto
  width 40rem;
  +respond-max($breakpoint-sm) {
    width 100%
  }
}
.projects-nav {
  .projects-nav-link {
    text-transform none
    box-shadow none
    border 1px solid $grey-4
    background-color $grey-1
    +respond-max($breakpoint-xxs) {
      font-size .7rem !important
    }
    &:hover {
      text-decoration underline
      box-shadow 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12)
    }
  }
}
</style>
