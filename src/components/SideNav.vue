<template functional>
  <q-list dense link no-border dark class="bg q-ml-xl q-px-md shadow-1">
    <q-list-header>
      <router-link to="/" class="row justify-center items-center q-py-md">
        <img src="~assets/profile.png" alt="Joseph Harvey Angeles | Profile" class="shadow-5">
      </router-link>
    </q-list-header>
    <q-item-separator class="q-mb-md"/>
    <q-collapsible dense label="Projects" opened class="q-my-none">
      <q-list link no-border dense class="q-py-none">
        <q-item to="/projects">
          <q-item-main label="Client Projects" />
        </q-item>
        <q-item to="/projects/side">
          <q-item-main label="Side Projects" />
        </q-item>
        <q-item to="/projects/archive">
          <q-item-main label="Archived Projects" />
        </q-item>
        <q-item to="/projects/uni">
          <q-item-main label="Uni Projects" />
        </q-item>
      </q-list>
    </q-collapsible>
    <q-item to="/blog">
      <q-item-main label="Blog" />
    </q-item>
    <q-item>
      <q-item-main label="Contact" />
    </q-item>
    <q-item-separator class="q-mt-lg"/>
    <div class="icon-tray row justify-around items-center cursor-pointer text-white q-py-md">
      <template v-for="(social, index) in props.socials">
        <f-icon
          :key="index"
          v-if="social.iconType === 'fa'"
          @click="listeners.link(social.link)"
          :icon="social.icon"
          :class="social.class"
          size="lg"/>
        <q-icon
          v-else
          :key="index"
          @click.native="listeners.link(social.link)"
          :name="social.icon"
          :class="social.class"
          size="1.5rem" />
      </template>
    </div>
  </q-list>
</template>
<script>
export default {
  name: 'SideNav'
}
</script>
<style lang="stylus" scoped>
@import '~variables'

img
  max-width 100%
  display block
  border-radius 50%
  width 130px
  height 130px
  transition all .3s ease-in-out
  cursor pointer
  &:hover
    transform scale(1.05)
    box-shadow 1px 10px 100px 0px rgba($teal, .5)
  &:active
    transform scale(.2)
    filter drop-shadow(0px 0px 12px white) blur(100px)

/deep/ .q-item.router-link-active
  background none !important
  .q-item-label
    letter-spacing 2px !important
    text-shadow 0px 0px 5px $pink !important

/deep/ .q-item:hover
  background none !important

/deep/ .q-item-label
  font-size 1.05rem
  font-weight bold
  letter-spacing 1px
  text-shadow 0px 0px 5px black
  transition all .3s ease
  &:hover
    text-shadow 0px 0px 5px $light-blue
    letter-spacing 2px
    background-color none
  &:active
    filter drop-shadow(0px 0px 12px white) blur(100px)

.bg
  background $deep-purple
  background linear-gradient(150deg, $cyan, $teal, $deep-purple)
  border-bottom-left-radius .5rem
  border-bottom-right-radius .5rem

.icon
  transition all .2s ease-in
  &:hover
    color white
    transform scale(1.2)
    filter drop-shadow(0px 0px 12px white)
  &:active
    filter drop-shadow(0px 0px 12px white) blur(100px)
.icon-disabled
  pointer-events none
  color $grey-5

</style>
