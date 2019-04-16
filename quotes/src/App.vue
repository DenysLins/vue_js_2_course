<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h1>The Quote</h1>
          <p>A wonderful Quote</p>
        </app-quote>
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
