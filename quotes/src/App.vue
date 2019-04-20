<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h1 slot="title">{{ quoteTitle }}</h1>
          <p slot="content">A wonderful Quote</p>
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
  },
  data: () => {
    return {
      quoteTitle: "The Quote"
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
