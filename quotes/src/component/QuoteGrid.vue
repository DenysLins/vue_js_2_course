<template>
  <div class="row">
    <app-header
      :actual-quotes="quotes.length"
      :total-quotes="maxQuotes"
    />
    <app-new-quote />
    <app-quote
      v-for="(quote, index) in quotes"
      :key="index"
      @click.native="removeQuote(index)"
    >
      {{ quote }}
    </app-quote>
    <div class="col-12 my-4">
      <div
        class="alert alert-info text-center"
        role="alert"
      >
        Info: Click on a Quote to delete it!
      </div>
    </div>
  </div>
</template>

<script>
import QuoteVue from "./Quote.vue";
import NewQuoteVue from "./NewQuote.vue";
import { eventBus } from "./../main.js";
import HeaderVue from "./Header.vue";
export default {
  components: {
    appHeader: HeaderVue,
    appQuote: QuoteVue,
    appNewQuote: NewQuoteVue
  },
  props: ["quotes", "maxQuotes"],
  methods: {
    removeQuote (index) {
      eventBus.removeQuote(index);
    }
  }

};
</script>

<style>
</style>
