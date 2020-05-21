import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sayMyName: 'Christopher Lundqvist'
  },
  mutations: {
    setName: (state, name) => {
      state.sayMyName = name
    }
  },
  getters: {
    getName: state => state.sayMyName
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
