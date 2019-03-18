<template>
  <footer class="q-pa-xl q-mt-xl"
    :class="$q.platform.is.mobile ? `bg-${color}`: `bg text-${color}`">
    <div class="column justify-center content-center text-white">
      <q-icon name="mail_outline" size="1.5rem" />
      <p class="text-center q-title q-ma-none q-mt-sm q-mb-lg">Email me for inquiries</p>
      <form
        name="Inquiries"
        @submit.prevent="submit"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="text-white form q-px-lg">
        <input class="hidden" name="form-name" value="Inquiries" />
        <q-input
          v-model="name"
          :error="$v.name.$error"
          @blur="$v.name.$touch"
          name="name"
          type="text"
          inverted-light
          no-parent-field
          placeholder="Your name" color="white" class="q-mb-md"/>
        <q-input
          v-model="email"
          :error="$v.email.$error"
          @blur="$v.email.$touch"
          name="email"
          type="email"
          inverted-light
          no-parent-field
          placeholder="Your email address" color="white" class="q-mb-md"/>
        <q-input
          v-model="message"
          name="message"
          :error="$v.message.$error"
          @blur="$v.message.$touch"
          type="textarea"
          :rows="5"
          inverted-light
          no-parent-field
          placeholder="Anything in mind?"
          color="white"
          />
        <q-btn
          push
          icon="send"
          type="submit"
          label="Send"
          :disable="$v.$invalid"
          :color="color === 'cyan' ? 'teal' : `${color}-9`"
          class="full-width q-mt-lg"
          />
          <div class="icon-tray row justify-between items-center cursor-pointer text-white q-mt-xl">
            <template v-for="(social, index) in socials">
              <f-icon
                :key="index"
                v-if="social.iconType === 'fa'"
                @click="openURL(social.link)"
                :icon="social.icon"
                :class="social.class"
                size="lg"/>
              <q-icon
                v-else
                :key="index"
                @click.native="openURL(social.link)"
                :name="social.icon"
                :class="social.class"
                size="1.5rem" />
          </template>
        </div>
      </form>
    </div>
  </footer>
</template>

<script>
import { socials } from '../statics/data/index.json'

import {required, email} from 'vuelidate/lib/validators'
import { QInput, openURL } from 'quasar'
import axios from 'axios'

export default {
  name: 'Footer',
  props: ['color'],
  components: { QInput },
  data () {
    return {
      socials,
      name: '',
      email: '',
      message: ''
    }
  },
  validations: {
    name: { required },
    email: { required, email },
    message: { required }
  },
  methods: {
    openURL,
    async submit (event) {
      const url = event.target.action
      const data = this.serialize({
        'form-name': 'Inquiry',
        name: this.name,
        email: this.email,
        message: this.message
      })
      try {
        await axios.post(url, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        this.$q.notify({
          message: 'Message sent!',
          detail: `Thanks! I'll reply to you shortly.`,
          type: 'positive',
          icon: 'mail_outline',
          position: 'bottom-right'
        })
      } catch (error) {
        this.$q.notify({
          message: 'Error encountered while sending your message.',
          detail: `Rest assured, I'm working on it, in the meantime just email me @ josephharveyangeles@gmail.com`,
          closeBtn: 'dismiss',
          type: 'negative',
          icon: 'error',
          position: 'bottom-right',
          timeout: 5000
        })
      }
    },
    serialize (obj) {
      let str = []
      for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
        }
      }
      return str.join('&')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.bg
  background linear-gradient(-190deg, $purple-10, currentColor)
.form
  width 500px
  max-width 100vw
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
