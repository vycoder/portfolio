<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-primary' : null">
      <div id="logo-box" class="q-mb-md" >
        <img src="~assets/logo.png" />
        <vue-particles color="#79f2f2"
          :particleOpacity="0.7"
          :particlesNumber="180"
          shapeType="circle"
          :particleSize="4"
          linesColor="#79f2f2"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"></vue-particles>
        <h1 class="text-white">Joseph Harvey Angeles</h1>
      </div>
      <q-list
        class="q-pt-xl text-white"
        no-border
        link
        dark
        inset-delimiter>
        <q-item exact to="/">
          <q-item-main label="About" />
        </q-item>
        <q-item to="/blog">
          <q-item-main label="Blog" />
        </q-item>
        <q-item to="/projects">
          <q-item-main label="Projects" />
        </q-item>
        <q-item @click.native="showContactModal()">
          <q-item-main label="Contact" />
        </q-item>
      </q-list>
      <div class="links q-mt-lg">
        <a class="links__item" href="mailto:josephharveyangeles@gmail.com">
          <font-icon icon="envelope" />
        </a>
        <div class="links__item" @click="openURL('https://wakatime.com/@yev')">
          <font-icon icon="clock" />
        </div>
        <div class="links__item" @click="openURL('https://github.com/josephharveyangeles')">
          <font-icon :icon="{ prefix: 'fab', iconName: 'github'}" />
        </div>
        <div class="links__item" @click="openURL('https://www.linkedin.com/in/josephharveyangeles/')">
          <font-icon :icon="{ prefix: 'fab', iconName: 'linkedin'}" />
        </div>
        <div class="links__item" @click="openURL('https://twitter.com/yev')">
          <font-icon :icon="{ prefix: 'fab', iconName: 'twitter'}" />
        </div>
        <div class="links__item" @click="openURL('https://medium.com/@yhev')">
          <font-icon :icon="{ prefix: 'fab', iconName: 'medium'}" />
        </div>
      </div>
      <div class="credits">
        <p>&#169; {{year}}. <a @click="showCreditsModal()">Credits.</a></p>
      </div>
    </q-layout-drawer>

    <q-page-container>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
    <q-modal v-model="modalOpened">
      <component v-bind:is="modalComponent" />
    </q-modal>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Credits from 'components/Credits'
import Contact from 'components/Contact'

export default {
  name: 'RootLayout',
  components: { Credits, Contact },
  created () {
    this.$q.addressbarColor.set()
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      modalOpened: false,
      modalComponent: Credits
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  },
  methods: {
    openURL,
    showCreditsModal () {
      this.modalOpened = true
      this.modalComponent = Credits
    },
    showContactModal () {
      this.modalOpened = true
      this.modalComponent = Contact
    }
  },
  meta: {
    link: {
      googlefonts: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=VT323|Cute+Font|Roboto+Condensed' }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~variables"
h1 {
  position absolute
  top 50%
  left 50%
  width 100%
  text-align center
  transform translate(-50%, 160%)
  font-size 3rem
  font-weight 500
  font-family 'Cute Font'
  margin 0
}
#logo-box {
  height 42%
  position relative
  background linear-gradient(to bottom, $grey-10, transparent)
}
#particles-js {
  height 100%
}
/deep/ .q-item-label {
  transition all .5s
}
.q-item:hover {
  background-color rgba(black, .5) !important
  /deep/ .q-item-label {
    margin-left 10px
    font-size 1.1rem
  }
}
img {
  position absolute
  top 50%
  left 50%
  height 150px
  transform translate(-50%, -50%)
  max-width 100%
}
.q-layout-header {
  display none
  +respond-max($breakpoint-md) {
    display block
  }
}
.links {
  text-align center
  &__item {
    &:not(:last-child) {
      margin-right 8px
    }
    background-color white
    color $primary
    display inline-block
    border-radius 50%
    padding 9px 11px
    transition all .5s ease
    cursor pointer
    &:hover {
      transform scale(1.3) translateY(-5px)
      box-shadow 0 .7rem 2rem rgba($grey-10, .5)
      background-color $amber-9
      color white
    }
  }
}
.credits {
  color $grey-4
  font-size .8rem
  position absolute
  left: 50%
  bottom 1%
  transform translateX(-50%)
  a, a:link, a:visited {
    color white
    cursor pointer
    text-decoration none
    transition all .5s ease
    &:hover {
      color $amber-9
      text-decoration underline
    }
  }
}
</style>
