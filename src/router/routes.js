
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'blog', component: () => import('pages/Blog.vue') },
      {
        path: 'projects',
        component: () => import('layouts/ProjectsLayout.vue'),
        children: [
          { path: '', name: 'Featured', component: () => import('pages/Projects.vue') },
          { path: 'archived', name: 'Archived', component: () => import('pages/ProjectsArchived.vue') },
          { path: 'unistuff', name: 'UniStuff', component: () => import('pages/ProjectsUniStuff.vue') }
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
