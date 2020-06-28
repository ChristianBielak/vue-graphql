import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'
import { apolloProvider } from './providers/apolloProvider'
import 'buefy/dist/buefy.css'

Vue.use(VueApollo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
