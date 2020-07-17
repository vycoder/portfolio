<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div v-for="project in $page.projects.edges" :key="project.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="project.node.path" class="text-copy-primary">{{ project.node.title }}</g-link></h2>

        <div class="text-lg mb-4">
          {{ project.node.description}}
        </div>

        <div class="mb-8">
          <g-link :to="project.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div> <!-- end post -->

      <pagination-posts
        v-if="$page.projects.pageInfo.totalPages > 1"
        base="/projects"
        :totalPages="$page.projects.pageInfo.totalPages"
        :currentPage="$page.projects.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Project ($page: Int) {
  projects: allProject (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        description
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Projects'
  },
  components: {
    PaginationPosts
  }
}
</script>
