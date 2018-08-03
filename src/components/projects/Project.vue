<template>
  <div>
    <div class="project">
      <div class="project__text-side q-pr-xl">
        <h4
          @click="openLink(project.url)"
          class="project__text-side__title text-secondary font-consolas">
          {{project.name}}
        </h4>
        <h5 class="project__text-side__subtitle text-primary font-condensed-roboto">{{project.title}}</h5>
        <p class="project__text-side__type text-grey-6 font-condensed-roboto">{{project.type}}</p>
        <div class="project__text-side__text text-grey-8 font-condensed-roboto">
          <p v-for="(text, key) in project.description" :key="key" v-html="text" />
          <p class="text-amber-10">{{project.tech}}</p>
        </div>
      </div>
      <div class="project__image-side">
        <div v-if="project.links && project.links.length" class="project__image-side__link">
          <font-icon
            v-for="(link, k) in project.links" :key="k"
            :icon="link.icon"
            @click="openURL(link.url)"
            size="lg"
            class="project__image-side__link__icon"/>
        </div>
        <img
          :src="`statics/images/projects/${project.image}`"
          :alt="project.name"
          class="project__image-side__image">
      </div>
    </div>
  </div>
</template>
<script>
import {openURL} from 'quasar'
export default {
  name: 'ProjectComponent',
  props: ['project'],
  methods: {
    openURL,
    openLink (url) {
      if (url) {
        this.openURL(url)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~variables'
.project {
  display flex
  width 100%
  margin 4rem auto
  &__text-side {
    width 65%
    +respond-max($breakpoint-sm) {
      width 100%
    }
    &__title {
      cursor pointer
      margin 0
      transition all .5s ease
      &:hover {
        transform scale(1.05) translateX(8px)
        text-decoration underline
      }
    }
    &__subtitle {
      margin 0
      font-size 1.1rem
      +respond-max($breakpoint-sm) {
        font-size 1rem
      }
    }
    &__text {
      font-size .88rem
    }
    &__type {
      font-size .8rem
      margin-bottom .9rem
    }
  }
  &__image-side {
    +respond-max($breakpoint-sm) {
      display none
    }
    min-height 100%
    width 35%
    overflow hidden
    position relative
    &__image {
      min-height 100%
      min-width 100%
      width auto
      height auto
      max-width none
      max-height 100%
      position relative
      top 50%
      left 50%
      transform translate(-50%, -50%)
      transition all .5s ease-in
    }
    &__link {
      cursor pointer
      z-index 100
      position absolute
      top 50%
      left 50%
      transform translate(-50%, 50%)
      background-color white
      color $primary
      border-radius 50%
      padding 15px 16px
      box-shadow 0px .7rem 2rem rgba(black, .5)
      opacity 0
      transition all .3s ease-in
      &:hover {
        background-color $amber-9
        transform translate(-50%, -55%) !important
        color white
      }
    }
    &:hover &__image {
      filter blur(.8rem) brightness(80%)
    }

    &:hover &__link {
      transform translate(-50%, -50%)
      opacity 1
    }
  }
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
</style>
