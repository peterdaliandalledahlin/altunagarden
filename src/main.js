import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.filter('formatDate', function(timestamp) {
  var date = new Date(timestamp * 1000)
  return date.toLocaleTimeString("sv-SE").replace(/(:\d{2}| [AP]M)$/, "")
})

Vue.filter('stripHTML', function (value) {
  const div = document.createElement('div')
  div.innerHTML = value
  const text = div.textContent || div.innerText || ''
  return text
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
