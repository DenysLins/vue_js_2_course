import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'firebase_endpoint'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method == 'POST') request.method = 'PUT'
  next()
})

new Vue({
  el: '#app',
  render: h => h(App)
})
