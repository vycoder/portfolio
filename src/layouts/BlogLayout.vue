<template>
  <div style="max-width: 100vw" class="q-px-lg q-pb-xl blog">
    <router-view />
    <social-sharing
      class="row justify-around items-center socials q-my-xl q-pt-xl"
      :url="fullUrl"
      :title="entry.title"
      :description="entry.description"
      twitter-user="yhev"
      inline-template
      >
      <div>
        <network network="twitter">
          <div class="social-icon">
            <f-icon :icon="{ prefix: 'fab', iconName: 'twitter-square'}" size="2x" />
          </div>
        </network>
        <network network="facebook">
          <div class="social-icon">
            <f-icon :icon="{ prefix: 'fab', iconName: 'facebook'}" size="2x" />
          </div>
        </network>
        <network network="linkedin">
          <div class="social-icon">
            <f-icon :icon="{ prefix: 'fab', iconName: 'linkedin'}" size="2x" />
          </div>
        </network>
        <network network="reddit">
          <div class="social-icon">
            <f-icon :icon="{ prefix: 'fab', iconName: 'reddit-square'}" size="2x"/>
          </div>
        </network>
      </div>
    </social-sharing>
    <vue-disqus
      shortname="josephharveyangeles"
      :title="entry.title"
      :identifier="$route.path"
      :url="urlWithProtocol" />
  </div>
</template>

<script>
import BLOGS from 'statics/data/blogs.json'

export default {
  name: 'BlogLayout',
  computed: {
    entry () {
      return Object
        .keys(BLOGS)
        .map(entry => BLOGS[entry])
        .reduce((a, b) => a.concat(b), [])
        .find(blog => blog.id === this.$route.name)
    },
    urlWithProtocol () {
      return window.location.protocol + '//' + this.fullUrl
    },
    fullUrl () {
      const hostname = window.location.hostname
      return `${hostname}${this.$route.fullPath}`
    }
  },
  meta () {
    return {
      title: `| Blog - ${this.entry.title}`,
      meta: {
        description: { name: 'description', content: this.entry.description }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
@import '../css/blog'

/deep/ .social-icon
  cursor pointer
  color $cyan
  transition .3s all ease
  &:hover
    color $teal
    transform scale(1.3)
</style>
