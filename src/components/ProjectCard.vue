<template functional>
  <div class="card shadow-2 bg-white row q-mb-xl" :class="`border-left--${props.color}`">
    <div v-if="props.project.image" class="img-side q-pa-md col-xs-12 col-sm-4 self-stretch row justify-center items-start">
      <img :src="`statics/images/projects/${props.project.image}`" class="block" />
    </div>
    <div class="content-side col column justify-between q-pb-sm q-pt-lg q-px-lg">
      <div>
        <h3
          class="q-display-1 text-bold title q-ma-none capitalize font-text">
          {{props.project.title}}
        </h3>
        <div class="row justify-between items-center q-mb-md">
          <div class="text-grey">{{props.project.subtitle}}</div>
          <div class="links row reverse items-center">
            <template v-for="(link, index) in props.project.links">
              <q-btn
                :key="index"
                v-if="link.iconType === 'mat'"
                :icon="link.icon"
                flat round dense
                :color="props.color"/>
              <q-btn :key="index" v-else flat round dense :color="props.color">
                <f-icon :icon="link.icon" size="lg"/>
              </q-btn>
            </template>
          </div>
          <div v-if="props.project.awards"
            v-html="props.project.awards"
            class="text-amber" />
        </div>
        <p v-for="(paragraph, index) in props.project.description"
          :key="index" class="q-mb-sm"
          v-html="paragraph" />
        <div class="q-my-md">
          <a
            v-for="(tag, index) in props.project.tags"
            :key="index"
            @click="listeners.tag(tag.label)"
            class="chip uppercase q-mr-sm q-mb-sm"
            :class="`text-${tag.color}`">
            <span class="text">{{tag.label}}</span>
          </a>
        </div>
      </div>
      <div>
        <div v-if="props.project.quote" class="kuote">
          <div :class="`bg-${props.color}-1`" class="kuote__text q-pa-lg q-mr-lg q-ml-xl">
            <span class="block">"{{props.project.quote.message}}"</span>
            <span class="block text-right q-mr-lg q-mt-sm">&mdash; {{props.project.quote.name}}</span>
            <span class="block text-right q-mr-lg">{{props.project.quote.role}}</span>
          </div>
          <div class="row justify-end">
            <div class="kuote__image q-pa-sm bg-white">
              <img v-if="props.project.quote.avatar" :src="props.project.quote.avatar" class="block absolute-center" />
              <div v-else class="text-white q-display-2 absolute-center row items-center justify-center" :class="`bg-${props.color}`">
                {{props.project.quote.name[0]}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard'
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.border-left
  &--teal
    border-left 5px solid $teal !important
  &--cyan
    border-left 5px solid $cyan !important
  &--pink
    border-left 5px solid $pink !important
  &--purple
    border-left 5px solid $purple !important
  &--deep-purple
    border-left 5px solid $deep-purple !important
  &--green
    border-left 5px solid $green !important
  &--indigo
    border-left 5px solid $indigo !important
  &--blue
    border-left 5px solid $blue !important
  &--deep-orange
    border-left 5px solid $deep-orange !important
  &--red
    border-left 5px solid $red !important

.card
  border 1px solid $grey-3
  border-radius .4rem

.kuote
  &__text
    border-radius 1rem
    font-style italic
    font-weight 200
  &__image
    position relative
    display inline-block
    width 80px
    height 80px
    border-radius 50%
    margin-top -40px
    img, div
      width 65px
      height 65px
      border-radius 50%

.img-side
  position relative
  img
    border-top-left-radius .4rem
    border-bottom-left-radius .4rem
    width 100%
    max-width 100%
    max-height 100%
    object-fit cover

.chip
  padding .4rem 1rem
  border 1px solid currentColor
  display inline-block
  border-radius 5rem
  font-size .7rem
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
