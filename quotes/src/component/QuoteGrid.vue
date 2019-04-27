<template>
  <div class="row">
    <app-new-quote />
    <app-quote
      v-for="quote in quotes"
      :key="quote.index"
      :quote="quote"
    />
  </div>
</template>

<script>
import QuoteVue from "./Quote.vue";
import NewQuoteVue from "./NewQuote.vue";
export default {
  components: {
    appQuote: QuoteVue,
    appNewQuote: NewQuoteVue
  },
  props: ["quotes"]
};
</script>

<style>
</style>
