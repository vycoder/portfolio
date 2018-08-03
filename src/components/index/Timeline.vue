<template>
  <q-timeline color="primary" class="q-px-lg q-pb-xl">
    <q-timeline-entry
      v-for="(entry, key) in data"
      :key="key"
      :title="entry.title"
      :subtitle="entry.date"
      :side="key % 2 === 0? 'right' : 'left'">
      <div class="q-px-lg">
        <p v-for="(text, i) in entry.texts" :key="i" class="font-condensed-roboto">{{text}}</p>
      </div>
    </q-timeline-entry>
  </q-timeline>
</template>
<script>
export default {
  name: 'TimelineComponent',
  props: ['data']
}
</script>
<style lang="stylus" scoped>
</style>
