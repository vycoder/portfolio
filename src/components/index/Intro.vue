<template>
  <div>
    <div class="row">
      <div class="image">
        <div class="image__side image__side--front"></div>
        <div class="image__side image__side--back"></div>
      </div>
    </div>
    <function class="row">
      <template slot="identifier">public void</template>
      <template slot="name">helloWorld</template>
      <p>{{text}}</p>
    </function>
  </div>
</template>
<script>
import Function from './Function'
export default {
  name: 'IntroComponent',
  components: {Function},
  props: ['text']
}
</script>
<style lang="stylus" scoped>
@import '~variables'
.image
  margin 0 auto
  margin-bottom 3rem
  perspective 150rem
  -moz-perspective 150rem
  position relative
  height 10rem
  width 10rem
  +respond-max($breakpoint-xxs)
    height 7rem
    width 7rem
    margin-bottom 1rem
  &__side
    cursor pointer
    box-shadow 0 .7rem 2rem rgba($grey-10, .5)
    transition all .8s ease
    height 100%
    width 100%
    backface-visibility hidden
    border-radius 50%
    overflow hidden
    position absolute
    top 0
    left 0
    background-size cover
    transform rotateY(0deg)

    &--front
      background-image url('~assets/profile.png')
    &--back
      transform rotateY(180deg)
      background-image url('~assets/profile-real.jpg')

  &:hover &__side--front
    transform rotateY(-180deg)
  &:hover &__side--back
    transform rotateY(0deg)

</style>
