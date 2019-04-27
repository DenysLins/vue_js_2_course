<template>
  <div class="row">
    <app-new-quote />
    <app-quote
      v-for="(quote, index) in quotes"
      :key="index"
      @click.native="removeQuote(index)"
    >
      {{ quote }}
    </app-quote>
    <div class="col-12 my-3">
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
export default {
  components: {
    appQuote: QuoteVue,
    appNewQuote: NewQuoteVue
  },
  props: ["quotes"],
  methods: {
    removeQuote (index) {
      eventBus.removeQuote(index);
    }
  }

};
</script>

<style>
</style>
