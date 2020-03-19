import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Mail from '../views/Mail.vue'
import Bio from '../views/Bio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
	{
  path: '/browse',
  name: 'Browse',
  component: Browse
	},
	{
	path: '/mail',
  name: 'Mail',
  component: Mail
	},
	{
	path: '/bio',
  name: 'Bio',
  component: Bio
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
