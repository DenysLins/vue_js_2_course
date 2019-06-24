import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'firebase_url'

new Vue({
  el: '#app',
  render: h => h(App)
})
