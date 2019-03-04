<template>
  <div class="q-px-lg">
    <h2>Get In touch</h2>
    <p>
      Do you have something in mind? A business idea, a software problem, or perhaps expanding to the digital world? Or if you just happen to need a person with my skills, feel free to contact me, let's discuss! Email me at <a @click="openURL('mailto:josephharveyangeles@gmail.com')">josephharveyangeles@gmail.com</a>.
    </p>
  </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'Contact',
  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
p
  font-size 1.2rem
a
  color $teal
  cursor pointer
  text-decoration underline
  transition .3s color ease
  &:hover
    color $deep-purple
</style>
