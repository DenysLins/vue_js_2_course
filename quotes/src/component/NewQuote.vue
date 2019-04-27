<template>
  <div class="col-12">
    <form class="row">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea
          v-model="quote"
          class="form-control"
          rows="3"
        />
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button
          class="btn btn-primary"
          @click.prevent="createNewQuote"
        >
          Add Quote
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { eventBus } from "./../main.js";
export default {
  data () {
    return {
      quote: ""
    };
  },
  methods: {
    createNewQuote () {
      if (this.quote !== "") {
        eventBus.createNewQuote(this.quote);
        this.quote = "";
      }
    }
  }
};
</script>

<style>
</style>
