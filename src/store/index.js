import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		locale: 'ru'
	},
	getters: {
		getLocale: state => {
			return state.locale
		}
	},
	mutations: {
		CHANGE_LOCALE(state, locale) {
			state.locale = locale
		}
	},
	actions: {
		changeLocale({ commit }, locale ) {
			commit("CHANGE_LOCALE", locale)
		}
	}
})

export default store