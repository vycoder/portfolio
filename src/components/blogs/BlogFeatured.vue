<template>
  <div>
    <h6 class="series text-grey-7 font-condensed-roboto q-mb-lg">CodeNo0b's Guide Out of Mediocrity</h6>
    <div class="row gutter-x-md cngom">
      <div
        v-for="(entry, k) in codeNoobsGuides"
        :key="k"
        class="div col-4 col-md-4 col-sm-6 col-xs-12 q-mb-lg" >
        <thumbnail
          :image="`statics/images/blogs/${entry.image}`"
          :to="`blog/${entry.to}`"
          :title="entry.title"
          :subtitle="entry.date" />
      </div>
    </div>
  </div>
</template>
<script>
import DATA from 'statics/data/blogs.json'
import Thumbnail from 'components/blogs/Thumbnail'
export default {
  name: 'BlogIndexPage',
  components: {Thumbnail},
  created () {
    this.codeNoobsGuides = DATA.featured.codeNoobsGuide
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.series {
  border-bottom 1px solid $grey-7
  padding-bottom .5rem
  +respond-max($breakpoint-sm) {
    font-size 1.3rem
  }
}
</style>
