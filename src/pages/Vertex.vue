<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2 class="text-4xl font-bold mb-16 text-center">Vertex</h2>
    </div>
    <div class="container-inner mx-auto py-20">
      <g-image src="../../static/dancingkitty.gif" alt="Dancing Kitty" class="mx-auto" />
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Vertex'
  },
  mounted() {
    window.location.href = process.env.GRIDSOME_VERTEX_URL
  }
}
</script>
