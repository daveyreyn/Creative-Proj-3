import Vue from 'vue'
import App from './App.vue'
import router from './router'
import content from './band-data.js'

Vue.config.productionTip = false

let data = {
  bands: content,
  bandBio: []
}

new Vue({
  router,
	data,
  render: h => h(App)
}).$mount('#app')
