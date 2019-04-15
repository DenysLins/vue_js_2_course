import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-home', Home);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
