import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    headaches: [ ]
  },
  mutations: {
    addNewHeadache(state, headache){
      state.headaches.push(headache);
    },
    deleteHeadache(state, index){
      state.headaches.splice(index, 1);
    }
  },
  getters: {
    getHeadacheByType: (state) => (type) => {
      return state.headaches.filter(headache => headache.type.toLowerCase() === type.toLowerCase())
    },
    getHeadacheByStartDate: (state) => (startDate) => {
      return state.headaches.filter(headache => headache.startDate === startDate)
    },
    getHeadacheByEndDate: (state) => (endDate) => {
      return state.headaches.filter(headache => headache.endDate === endDate)
    }
  }
})

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')


