import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-home', Home);

export const eventBus = new Vue({
  methods: {
    changeName(name) {
      this.$emit('resetNameByBus', name);
    }
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
