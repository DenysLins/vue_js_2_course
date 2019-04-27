import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    createNewQuote(quote) {
      this.$emit("createNewQuote", quote);
    },
    removeQuote(quote) {
      this.$emit("removeQuote", quote);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
