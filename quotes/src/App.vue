<template>
  <div class="container">
    <app-quote-grid :quotes="quotes" />
  </div>
</template>

<script>
import QuoteGridVue from "./component/QuoteGrid.vue";
import { eventBus } from "./main.js";

export default {
  components: {
    appQuoteGrid: QuoteGridVue
  },
  data () {
    return {
      quotes: [
        "Just a quote so see anything"
      ],
      maxQuotes: 10
    };
  },
  created () {
    eventBus.$on("createNewQuote", quote => {
      this.quotes.push(quote);
    });
    eventBus.$on("removeQuote", index => {
      this.quotes.splice(index, index + 1);
    });
  }
};
</script>

<style>
</style>
