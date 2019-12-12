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
  getters: {
    getHeadacheByType: (state) => (type) => {
      return state.headaches.filter(headache => headache.type.toLowerCase().includes(type.toLowerCase()))
    },
    getHeadacheByStartDate: (state) => (startDate) => {
      return state.headaches.filter(headache => (headache.startDate.includes(startDate)))
    },
    getHeadacheByEndDate: (state) => (endDate) => {
      return state.headaches.filter(headache => headache.endDate.includes(endDate))
    },
    getHeadacheByComments: (state) => (comments) => {
      return state.headaches.filter(headache => headache.comments.toLowerCase().includes(comments.toLowerCase()))
    },
    getHeadacheByMedicine: (state) => (medicineName) => {
      var filteredArray = []

      for(var i=0; i<state.headaches.length; i++)
        for(var x=0; x<state.headaches[i].medicineList.length; x++)
          if(state.headaches[i].medicineList[x].medicineName.includes(medicineName)){
            filteredArray.push(state.headaches[i]);
            break
          }
      return filteredArray; 
    },
    getLastId: (state) => {
      return state.headaches.length !== 0 ? state.headaches[state.headaches.length - 1].id : 0
    }
  },
  mutations: {
    addNewHeadache(state, headache){
      state.headaches.push(headache);
    },
    deleteHeadache(state, id){
      state.headaches.splice(state.headaches.findIndex(h => h.id == id), 1);
    }
  }
})

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')


