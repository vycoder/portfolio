import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Projects from '@/components/projects/Projects'
import FourZeroFour from '@/components/FourZeroFour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '*',
      name: '404',
      component: FourZeroFour
    }
  ],
  mode: 'history'
})
