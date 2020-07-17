<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight text-center">{{ $page.project.title }}</h1>
      <div class="text-xl text-gray-600 mb-4 text-center">{{ $page.project.subtitle }}</div>
      <div class="markdown-body mb-8">
        <VueRemarkContent />
      </div>
      <div class="mb-8">
        <g-link @click.native="$router.go(-1)" class="font-bold uppercase">Back to Projects</g-link>
      </div>
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Project ($id: ID!) {
  project(id: $id) {
    title,
    subtitle,
    description
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    }
  }
}
</script>

<style src="../css/github-markdown.css" />
