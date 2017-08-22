import Vue from 'vue'
import Router from 'vue-router'
import AppPage from '@/main/AppPage'
import Admin from '@/admin/Admin'
import Login from '@/admin/Login'
import EditProfile from '@/admin/EditProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AppPage
    },
    {
    	path: '/admin',
    	component: Admin
    },
    {
    	path: '/admin/login',
    	component: Login
    },
    {
      path: '/admin/edit/:id',
      component: EditProfile
    }
  ]
})
