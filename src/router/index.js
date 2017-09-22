import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Meetings from '@/components/Meetings'
import Contact from '@/components/Contact'
import Donate from '@/components/Donate'

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
      path: '/donate',
      name: 'donate',
      component: Donate
    }
  ]
})
