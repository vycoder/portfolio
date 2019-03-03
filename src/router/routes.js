import BlogEntries from 'statics/data/blogs.json'

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: resolve => require([`blogs/${section}/${child.id}.md`], resolve)
  }))
  return {
    path: section,
    name: section,
    component: () => import('layouts/BlogLayout.vue'),
    children
  }
})
const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/blog',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'BlogRoot',
        component: () => import('pages/Blogs.vue')
      },
      {
        path: ':id',
        name: 'BlogIndex',
        component: () => import('pages/Blogs.vue')
      },
      {
        path: 'thoughts-on/:tag',
        name: 'thoughts',
        component: () => import('pages/ThoughtsOn.vue')
      },
      ...blogRoutes
    ]
  },
  {
    path: '/projects',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'ClientProjects',
        component: () => import('pages/Projects.vue')
      },
      {
        path: ':id',
        name: 'ProjectIndex',
        component: () => import('pages/Projects.vue')
      },
      {
        path: 'projects-in/:tag',
        name: 'projects-in',
        component: () => import('pages/ProjectsIn.vue')
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
