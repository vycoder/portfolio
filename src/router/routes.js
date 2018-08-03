
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'blog',
        component: () => import('layouts/BlogLayout.vue'),
        children: [
          { path: '', name: 'blogIndex', component: () => import('blogs/BlogIndex.vue') },
          { path: 'codenoobsguide/main', component: resolve => require(['blogs/codenoobsguide/main.md'], resolve) }
        ]
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
