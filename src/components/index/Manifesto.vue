<template>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <div class="text-center">
        <img src="~assets/manifesto.png" alt="Manifesto">
      </div>
    </div>
    <div class="col-xs-12 col-md-6">
      <function class="function">
        <template slot="identifier">void</template>
        <template slot="name">manifesto</template>
        <p class="text">{{text}}</p>
      </function>
    </div>
  </div>
</template>
<script>
import Function from './Function'
export default {
  name: 'ManifestoComponent',
  components: {Function},
  props: ['text']
}
</script>

<style lang="stylus" scoped>
@import '~variables'
img
  width 60%
  border-radius 50%
  box-shadow 0 1.5rem 4rem rgba($grey-10, .15)
  +respond-max($breakpoint-md)
    margin-top 10%
    width 50%
  +respond-max($breakpoint-sm)
    width 30%
.function
  +respond-max($breakpoint-md)
    margin-top 1rem
.text
  +respond-max($breakpoint-md)
    font-size 1rem
</style>
