<template>
  <div>
    <h3 v-if="isBlogIndex" class="text-center font-courier q-pt-xl">/** Blog **/</h3>
    <blog-featured v-if="isBlogIndex" class="q-px-xl"/>
    <div v-else class="blogs font-condensed-roboto">
      <router-view />
      <social-sharing
        class="text-center q-mt-xl socials"
        :url="fullUrl"
        :title="metaTitle"
        :description="metaDescription"
        twitter-user="yhev"
        inline-template
        >
        <div>
          <network network="twitter">
            <div class="social-icon">
              <font-icon :icon="{ prefix: 'fab', iconName: 'twitter-square'}" />
            </div>
          </network>
          <network network="facebook">
            <div class="social-icon">
              <font-icon :icon="{ prefix: 'fab', iconName: 'facebook'}"/>
            </div>
          </network>
          <network network="linkedin">
            <div class="social-icon">
              <font-icon :icon="{ prefix: 'fab', iconName: 'linkedin'}"/>
            </div>
          </network>
          <network network="reddit">
            <div class="social-icon">
              <font-icon :icon="{ prefix: 'fab', iconName: 'reddit-square'}"/>
            </div>
          </network>
        </div>
      </social-sharing>
      <div class="comments q-mt-lg">
        <vue-disqus
          shortname="josephharveyangeles"
          :title="metaTitle"
          :identifier="$route.path"
          :url="urlWithProtocol" />
      </div>
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
import {blogMetas} from 'statics/data/blogs.json'
export default {
  name: 'BlogLayout',
  components: { BlogFeatured },
  computed: {
    isBlogIndex () {
      return this.$route.path === '/blog'
    },
    metaTitle () {
      return this.getMeta('title') || 'Joseph Harvey Angeles - Blog'
    },
    metaDescription () {
      return this.getMeta('description') || "Joseph Harvey Angeles's random thoughts"
    },
    metaKeywords () {
      return this.getMeta('keywords') || 'Software Engineering'
    },
    urlWithProtocol () {
      return window.location.protocol + '//' + this.fullUrl
    },
    fullUrl () {
      const hostname = window.location.hostname
      return `${hostname}${this.$route.fullPath}`
    }
  },
  methods: {
    getMeta (key) {
      const res = blogMetas[this.$route.name]
      return res ? res[key] : false
    }
  },
  meta () {
    return {
      title: this.metaTitle,
      meta: {
        description: { name: 'description', content: this.metaDescription },
        keywords: { name: 'keywords', content: this.metaKeywords }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
$h-margins = 2rem
$p-margins = 1.5rem
.socials {
  display flex
  justify-content center
  align-items center
}
/deep/ .social-icon {
  cursor pointer
  margin 0 1rem
  display inline
  font-size 2rem
  vertical-align middle
  color $amber-9
  :hover {
    color $secondary
    transform translateY(-3px)
  }
}
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
    background-color $blue-grey-8
    padding 1rem
    border-radius .5rem
    box-shadow 0 5px 20px rgba(black, .12)
    overflow-x auto
    code {
      color $grey-1
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
