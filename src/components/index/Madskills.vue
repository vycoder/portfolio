<template>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <function class="function">
        <template slot="identifier">List</template>
        <template slot="name">madSkillz</template>
        <ul>
          <li v-for="(skill, i) in skills" :key="i">{{skill}}</li>
        </ul>
      </function>
    </div>
    <div class="col-xs-12 col-md-6">
      <div class="text-center">
        <img src="~assets/madskills.png" alt="Madskills">
      </div>
    </div>
  </div>
</template>
<script>
import Function from './Function'
export default {
  name: 'MadskillsComponent',
  components: {Function},
  props: ['skills']
}
</script>
<style lang="stylus" scoped>
@import '~variables'
img
  width 60%
  border-radius 50%
  margin-top 15%
  box-shadow: 0 1.5rem 4rem rgba($grey-10, .15);
  +respond-max($breakpoint-sm)
    display none
.function
  +respond-max($breakpoint-md)
    margin-bottom 1rem
p
  +respond-max($breakpoint-md)
    font-size 1rem
  +respond-max($breakpoint-sm)
    font-size .8rem
</style>
