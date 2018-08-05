<template>
  <div>
    <h3 v-if="isBlogIndex" class="text-center font-courier q-pt-xl">/** Blog **/</h3>
    <blog-featured v-if="isBlogIndex" class="q-px-xl"/>
    <div v-else class="blogs font-condensed-roboto">
      <router-view />
      <div class="row">
        <q-btn
          to="/blog"
          size="lg"
          icon="arrow_back"
          class="col-6 q-mt-xl text-primary font-consolas backnav">
            back
        </q-btn>
      </div>
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
$h-margins = 2rem
$p-margins = 1.5rem
h3 {
  margin-top 0
}
.backnav {
  text-transform none
  box-shadow none
  border 1px solid $grey-4
  background-color $grey-1
  &:hover {
    text-decoration none !important
    box-shadow 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12)
  }
}
.blogs {
  padding 4rem 6rem
  +respond-max($breakpoint-sm) {
    padding 2rem 4rem
  }
  +respond-max($breakpoint-xs) {
    padding 1rem 2rem
  }
}
.blogs /deep/ {
  h1, h2, h3, h4, h5, h6 {
    color $secondary
    margin 0
    font-family 'Roboto'
    margin $h-margins 0
  }
  ul, ol, p {
    color $grey-7
    font-size 1.1rem
  }
  h1 {
    font-size 4rem
    font-weight 400
    +respond-max($breakpoint-sm) {
      font-size 3rem
    }
  }
  h2 {
    font-size 3rem
    font-weight 400
    +respond-max($breakpoint-sm) {
      font-size 2.7rem
    }
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
    color $amber-9
  }
  p {
    margin $p-margins 0
    +respond-max($breakpoint-sm) {
      font-size 1.5rem
    }
  }
  blockquote {
    margin .8rem 0
    p {
      margin 0
      color $light-d
      font-family 'Roboto'
    }
  }
  a,
  a:link,
  a:visited {
    color $primary
    text-decoration none
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
    max-width 100%
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
    overflow-x scroll
    code {
      color $grey-8
      background-color transparent
    }
  }
  ins {
    text-decoration none
    text-align center
    width 100%
    display block
    margin 3rem auto
  }
}
</style>
