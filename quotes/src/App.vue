<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent">
          <p>Default Content</p>
        </component>
        <!-- <app-quote>
          <h1 slot="title">{{ quoteTitle }}</h1>
          <p>A wonderful Quote</p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import QuoteVue from "./component/Quote.vue";
import AuthorVue from "./component/Author.vue";
import NewVue from "./component/New.vue";
export default {
  components: {
    appQuote: QuoteVue,
    appAuthor: AuthorVue,
    appNew: NewVue
  },
  data: () => {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
