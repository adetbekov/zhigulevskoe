import Vue from 'vue'
import Router from 'vue-router'
import Check from '@/components/Check'
import Main from '@/components/Main'
import History from '@/components/History'
import Brands from '@/components/Brands'
import Adds from '@/components/Adds'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

const routes = [
	{
	  path: '/',
	  name: 'Check',
	  component: Check,
	  meta: {
	  	title: 'Введите свой возраст'
	  }
	},
	{
	  path: '/main',
	  name: 'Main',
	  component: Main,
	  meta: {
	  	title: 'Главная'
	  }
	},
	{
	  path: '/history',
	  name: 'History',
	  component: History,
	  meta: {
	  	title: 'История'
	  }
	},
	{
	  path: '/brands',
	  name: 'Brands',
	  component: Brands,
	  meta: {
	  	title: 'Бренды'
	  }
	},
	{
	  path: '/commercials',
	  name: 'Commercials',
	  component: Adds,
	  meta: {
	  	title: 'Рекламные ролики'
	  }
	},
	{ path: "*", component: PageNotFound },
]

const router = new Router({
	mode: 'history',
	routes,
	scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else if (to.hash) {
	    return {
	      selector: to.hash
	      // , offset: { x: 0, y: 10 }
	    }
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title    
	next()
})

export default router