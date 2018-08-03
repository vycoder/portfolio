<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 q-pr-lg">
      <embed :src="stats.activity"/>
      <div class="text text-center">
        <p class="text-amber-9">getCodingActivity<span class="text-primary">()</span></p>
      </div>
    </div>
    <div class="col-xs-12 col-md-6">
      <embed :src="stats.languages"/>
      <div class="text text-center">
        <p class="text-amber-9">getCodingLangs<span class="text-primary">()</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StatsComponent',
  props: ['stats']
}
</script>
<style lang="stylus" scoped>
@import '~variables'
.text
  font-family Consolas, Cochin, Georgia, Times, "Times New Roman", serif
  font-size 1.8rem
  padding-top 1rem
embed
  box-shadow 0 1.5rem 4rem rgba($grey-10, .15)
  border-radius 10rem
</style>
