<template>
  <q-card @click.native="$router.push(to)">
    <q-card-media>
      <img :src="image">
    </q-card-media>
    <q-card-main>
      <p class="title text-secondary">{{title}}</p>
      <p class="subtitle text-grey-8">{{subtitle}}</p>
    </q-card-main>
  </q-card>
</template>
<script>
export default {
  name: 'ThumbnailComponent',
  props: ['image', 'title', 'subtitle', 'to']
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.q-card {
  cursor pointer
  transition all .5s ease
  &:hover {
    box-shadow 0 .5rem 2rem rgba(black, .5)
    transform translateY(-3px)
  }
  .q-card-media {
    background-color rgba($primary, .5)
  }
}
.title {
  font-weight 500
  font-size .9rem
  margin 0
}
.subtitle {
  margin 0
}
img {
  min-height 12rem
}
</style>
