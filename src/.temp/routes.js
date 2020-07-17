const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/yev/Projects/portfolio/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/home/yev/Projects/portfolio/src/templates/Project.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/home/yev/Projects/portfolio/src/pages/Projects.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/home/yev/Projects/portfolio/src/pages/Blog.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/yev/Projects/portfolio/src/templates/Post.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/yev/Projects/portfolio/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/yev/Projects/portfolio/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/projects/2018-06-04-zoom-app/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--projects--2018-06-04-zoom-app-md" */ "/home/yev/Projects/portfolio/projects/2018-06-04-zoom-app.md")
    }
  },
  {
    path: "/projects/2020-07-17-en-focus/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--projects--2020-07-17-en-focus-md" */ "/home/yev/Projects/portfolio/projects/2020-07-17-enFocus.md")
    }
  },
  {
    path: "/projects/2017-02-06-osyshub/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--projects--2017-02-06-osyshub-md" */ "/home/yev/Projects/portfolio/projects/2017-02-06-osyshub.md")
    }
  },
  {
    path: "/projects/2019-01-20-dldnation/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--projects--2019-01-20-dldnation-md" */ "/home/yev/Projects/portfolio/projects/2019-01-20-dldnation.md")
    }
  },
  {
    path: "/projects/2019-06-25-wilyfish/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--projects--2019-06-25-wilyfish-md" */ "/home/yev/Projects/portfolio/projects/2019-06-25-wilyfish.md")
    }
  },
  {
    path: "/projects/2020-02-21-sixgill/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--projects--2020-02-21-sixgill-md" */ "/home/yev/Projects/portfolio/projects/2020-02-21-sixgill.md")
    }
  },
  {
    path: "/projects/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c4
  },
  {
    path: "/javascript-weird-parts/",
    component: c5
  },
  {
    path: "/kittynder/",
    component: c5
  },
  {
    path: "/creating-a-simple-blog-using-vue-with-markdown/",
    component: c5
  },
  {
    path: "/introducing-chronocross/",
    component: c5
  },
  {
    path: "/codenoobs-guide-out-of-mediocrity-genchar/",
    component: c5
  },
  {
    path: "/codenoobs-guide-out-of-mediocrity-main/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
