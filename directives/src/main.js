import Vue from "vue";
import App from "./App.vue";

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = "green";
    // el.style.backgroundColor = binding.value;
    let delayed = 0;
    if (binding.modifiers["delayed"]) {
      delayed = 3000;
    }
    setTimeout(() => {
      if (binding.arg === "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delayed);
  }
});
new Vue({
  el: "#app",
  render: h => h(App)
});
