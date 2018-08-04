<template>
  <div class="q-pa-xl">
    <h3 class="text-center font-courier">/** 404: PageNotFound ;( **/</h3>
    <div class="font-condensed-roboto q-mx-xl">
      <h4>{{new Date().toLocaleDateString()}} creo.site.PageNotFoundException: Unable to locate {{$route.path}}, no such page exists.</h4>
      <p>at creo.webpage.performLaunchWebPage(<span class="text-blue-8">RequestPage.java:1234</span>)</p>
      <p>at creo.webpage.requestWebPage(<span class="text-blue-8">RequestPage.java:231</span>)</p>
      <p>at creo.webpage.handleRequestWebPage(<span class="text-blue-8">RequestPage.java:321</span>)</p>
      <p>at creo.webpage.dispatchWebPage(<span class="text-blue-8">DispatchPage.java:777</span>)</p>
      <h4>Caused by, creo.site.FMLException: Reasons such as the following,</h4>
      <p>at either.i.broke.something(<span class="text-blue-8">TotalFail.java:1</span>)</p>
      <p>or im.still.working.on.this.page(<span class="text-blue-8">Rekt.java:2</span>)</p>
      <p>at i.suck.at.frontend.development(<span class="text-blue-8">SuperNoobz.java:3</span>)</p>
      <p>at please.send.help(<span class="text-blue-8">HelpMeLordGaben.java:4</span>)</p>
      <p>at please.send.help(<span class="text-blue-8">HelpMeAlmightyDennisRichie.java:5</span>)</p>
      <p>at why.u.no.work.codezs(<span class="text-blue-8">SlashWrist.java:6</span>)&lt;2 more...&gt;</p>
    </div>
    <div class="text-center">
      <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
      >return;</q-btn>
    </div>
    <img id="trappedKitty" src="~assets/dancingkitty.gif" />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
<style lang="stylus" scoped>
h3 {
  margin 0
  margin-bottom 1.8rem
}
h4 {
  color red
  font-size 1.3rem
  margin 0
}
#trappedKitty {
  position fixed
  bottom 10%
  right 5%
  z-index -100
}
</style>
