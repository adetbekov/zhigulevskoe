import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n'
import lodash from 'lodash'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import { TweenMax } from 'gsap'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueAwesomeSwiper from 'vue-awesome-swiper'	
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Helmet from './components/Helmet.vue'
import Basement from './components/Basement.vue'
import VueHead from 'vue-head'

Vue.component('icon', Icon)
Vue.use(VueAwesomeSwiper)
Vue.use(VueHead)

Vue.config.productionTip = false
Vue.prototype._ = lodash
Vue.prototype.TweenMax = TweenMax
Vue.prototype.moment = moment
window.moment = moment

Vue.component('Helmet', Helmet)
Vue.component('Basement', Basement)

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  components: {
  	Icon,
  	swiper,
    swiperSlide
  }
})
