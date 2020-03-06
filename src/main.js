import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import headaches from './store/headaches'
import HeadachesList from './views/HeadachesList'
import NewHeadacheForm from './views/NewHeadacheForm'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  modules: {
    headaches,
  }
})

const routes = [
  {
    path: '/headache-list',
    component: HeadachesList,
    name: 'list'
  },
  {
    path: '/new-headache',
    component: NewHeadacheForm,
    name: 'main'
  },
  { 
    path: '/', 
    redirect: {
      name: 'main'
    }
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')


