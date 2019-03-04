<template functional>
  <div :class="['card q-pa-lg shadow-2 bg-white q-mb-xl', `border-bottom-right-${props.color}`]">
    <a class="q-display-1 text-bold title" @click="listeners.click">
      {{props.title}}
    </a>
    <div class="text-grey">{{props.date}}</div>
    <a
      v-for="(tag, index) in props.tags" :key="index"
      :class="['chip uppercase q-my-md q-mr-sm', `text-${tag.color}`]"
      @click="listeners.tag(tag.name)">
      <span class="text">{{tag.name}}</span>
    </a>
    <p>{{props.description}}</p>
    <q-btn
      push
      :color="props.color"
      wait-for-ripple
      size="1.1rem"
      @click="listeners.click"
      class="float-right">
      Read Post
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'BlogCard'
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.card
  border 1px solid $grey-3
  border-radius .4rem

.title
  cursor pointer
  transition text-shadow .2s
  &:hover
    text-shadow 0px 0px 2px $grey

.chip
  padding .4rem 1rem
  border 1px solid currentColor
  display inline-block
  border-radius 5rem
  font-size .8rem
  letter-spacing 1px
  transition all .3s ease-in
  cursor pointer
  font-weight 400
  &:hover
    background-color currentColor
    .text
      color white
  &:active
    transform scale(0.5)
    filter drop-shadow(0px 0px 12px white) blur(100px)

</style>
