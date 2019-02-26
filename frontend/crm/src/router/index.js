import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/Chat/Chat'
import Member from '@/components/Member/Member'
import Message from '@/components/Message/Message'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/Member',
      name: 'Member',
      component: Member
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    }
  ]
})
