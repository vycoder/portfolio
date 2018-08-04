import {blogRoutes} from 'statics/data/blogs.json'
const getBlogRouteChildren = () => {
  const routes = []
  for (let elem of blogRoutes) {
    for (let entry of elem.entries) {
      const parentPath = elem.section ? `${elem.section}/` : ''
      const path = `${parentPath}${entry}`
      routes.push({
        path,
        component: resolve => require([`blogs/${path}.md`], resolve)
      })
    }
  }
  return routes
}
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'blog',
        component: () => import('layouts/BlogLayout.vue'),
        children: getBlogRouteChildren()
      },
      {
        path: 'projects',
        component: () => import('layouts/ProjectsLayout.vue'),
        children: [
          { path: '', name: 'Featured', component: () => import('pages/projects/ProjectsFeatured.vue') },
          { path: 'archived', name: 'Archived', component: () => import('pages/projects/ProjectsArchived.vue') },
          { path: 'unistuff', name: 'UniStuff', component: () => import('pages/projects/ProjectsUniStuff.vue') }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
