<template>
  <div class="q-pa-xl">
    <h3 v-if="isBlogIndex" class="text-center font-courier">/** Blog **/</h3>
    <blog-featured v-if="isBlogIndex" />
    <div class="blogs font-condensed-roboto">
      <router-view />
    </div>
  </div>
</template>
<script>
import BlogFeatured from 'components/blogs/BlogFeatured'
export default {
  name: 'BlogLayout',
  components: { BlogFeatured },
  computed: {
    isBlogIndex () {
      return this.$route.path === '/blog'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
h3
  margin-top 0

$h-margins = 1rem
$p-margins = 1rem
.blogs /deep/ {
  h1, h2, h3, h4, h5, h6 {
    color $secondary
    margin 0
    font-family 'Roboto'
    margin $p-margins 0
  }
  ul, ol, p {
    color $grey-7
  }
  h1 {
    font-size 4rem
    font-weight 400
  }
  h2 {
    font-size 3rem
    font-weight 400
  }
  h3 {
    font-size 2.5rem
  }
  h4 {
    font-size 2rem
  }
  h5 {
    font-size 1.8rem
  }
  h6 {
    font-size 1.2rem
    color $grey-6
  }
  p {
    margin 1rem 0
  }
  blockquote {
    margin .8rem 0
    p {
      margin 0
      color $light-d
    }
  }
  a,
  a:link,
  a:visited {
    text-decoration none
    color $primary
    &:hover {
      color $secondary
      text-decoration underline
    }
  }
  img {
    border-radius 1rem
    position relative
    left 50%
    transform translateX(-50%)
  }
  code {
    background-color $blue-grey-1
    padding 0 5px
  }
  pre {
    background-color $blue-grey-11
    padding 1rem
    border-radius .5rem
    box-shadow 0 5px 20px rgba(black, .12)
    color $light-d !important
    code {
      color $grey-8
      background-color transparent
    }
  }
}
</style>
