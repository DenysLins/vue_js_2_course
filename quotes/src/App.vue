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
        {
          text: "Just a quote so see anything",
          index: 0
        }
      ],
      maxQuotes: 10
    };
  },
  created () {
    eventBus.$on("createNewQuote", quote => {
      let newQuote = {};
      newQuote.text = quote;
      newQuote.index = this.quotes.length;
      this.quotes.push(newQuote);
    });
    eventBus.$on("removeQuote", quote => {
      this.quotes.splice(quote.index, quote.index + 1);
    });
  }
};
</script>

<style>
</style>
