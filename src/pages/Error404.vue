<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-2">
    <q-layout-footer style="box-shadow: none">
      <tail color="red" />
    </q-layout-footer>
    <q-page-container>
      <q-page class="column q-pa-xl items-center justify-center">
        <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12">
          <h3 class="text-center q-py-lg">/** 404: PageNotFound ;( **/</h3>
          <div class="q-mx-xl">
            <h4>{{new Date().toLocaleDateString()}} creo.site.PageNotFoundException: Unable to locate {{$route.path}}, no such page exists.</h4>
            <p>at creo.webpage.performLaunchWebPage(<span class="text-blue-8">RequestPage.java:1234</span>)</p>
            <p>at creo.webpage.requestWebPage(<span class="text-blue-8">RequestPage.java:231</span>)</p>
            <p>at creo.webpage.handleRequestWebPage(<span class="text-blue-8">RequestPage.java:321</span>)</p>
            <p>at creo.webpage.dispatchWebPage(<span class="text-blue-8">DispatchPage.java:777</span>)</p>
            <h4 class="q-py-md">Caused by, creo.site.FMLException: Reasons such as the following,</h4>
            <p>at either.i.broke.something(<span class="text-blue-8">TotalFail.java:1</span>)</p>
            <p>or im.still.working.on.this.page(<span class="text-blue-8">Rekt.java:2</span>)</p>
            <p>at i.suck.at.frontend.development(<span class="text-blue-8">SuperNoobz.java:3</span>)</p>
            <p>at please.send.help(<span class="text-blue-8">HelpMeLordGaben.java:4</span>)</p>
            <p>at please.send.help(<span class="text-blue-8">HelpMeAlmightyDennisRichie.java:5</span>)</p>
            <p>at why.u.no.work.codezs(<span class="text-blue-8">SlashWrist.java:6</span>)&lt;2 more...&gt;</p>
          </div>
        </div>
        <div class="text-center">
          <q-btn
            size="xl"
            icon="keyboard_return"
            color="cyan"
            style="width:200px;"
            @click="$router.push('/')"
            >return;</q-btn>
        </div>
        <img id="trappedKitty" src="~assets/images/dancingkitty.gif" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Tail from 'components/Tail'

export default {
  name: 'Error404',
  components: { Tail }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

h3
  margin 0
  margin-bottom 1.8rem
h4
  color $pink
  font-size 1.3rem
  margin 0
#trappedKitty
  position fixed
  top 10%
  right 5%
</style>
