<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { productName } from '../package.json'
export default {
  name: 'App',
  meta () {
    return {
      titleTemplate: title => this.$route.fullPath === '/' ? productName : `${productName} ${title}`,
      meta: {
        description: {
          name: 'description',
          content: `Joseph Harvey Angeles' website. Software Engineer, Software Developer, Web Developer, Full-stack engineer, Digital Solutions Expert. Clean Code advocate. DevOps. He likes cats.`
        },
        keywords: {
          name: 'keywords',
          content: `Web Development, Software Engineer, Software Developer, Full-stack Developer, Full-stack Engineer`
        }
      }
    }
  }
}
</script>

<style>
</style>
