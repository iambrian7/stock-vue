import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Meetings from '@/components/Meetings'
import Contact from '@/components/Contact'
import Donate from '@/components/Donate'
import Store from '@/components/Store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/meetings',
      name: 'meetings',
      component: Meetings
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate
    }
  ]
})
