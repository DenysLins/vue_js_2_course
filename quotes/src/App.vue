<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote></app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteVue from "./component/Quote.vue";
export default {
  components: {
    appQuote: QuoteVue
  }
};
</script>

<style>
</style>
