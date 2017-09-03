import Vue from 'vue'
import Router from 'vue-router'
import CvPreview from '@/main/CvPreview'
import Profile from '@/profile/Profile'
import EditProfile from '@/profile/EditProfile'
import Login from '@/auth/Login'
import Register from '@/auth/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/cv/:id',
      component: CvPreview
    },
    {
    	path: '/profile',
    	component: Profile
    },
    {
    	path: '/login',
    	component: Login
    },
    {
      path: '/join',
      component: Register
    },
    {
      path: '/profile/edit/:id',
      component: EditProfile
    }
  ]
})
