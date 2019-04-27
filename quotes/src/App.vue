<template>
  <div class="container">
    <app-quote-grid
      :quotes="quotes"
      :max-quotes="maxQuotes"
    />
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
      if (this.quotes.length >= this.maxQuotes) {
        alert("Please remove a existent Quote before add a new one.");
      } else {
        this.quotes.push(quote);
      }
    });
    eventBus.$on("removeQuote", index => {
      this.quotes.splice(index, index + 1);
    });
  }
};
</script>

<style>
</style>
