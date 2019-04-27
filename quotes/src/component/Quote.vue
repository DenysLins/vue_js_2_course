<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div
        class="panel-body quote"
        @click="removeQuote(quote)"
      >
        {{ quote.text }}
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./../main.js";
export default {
  props: ["quote"],
  methods: {
    removeQuote (quote) {
      eventBus.removeQuote(quote);
    }
  }

};
</script>

<style scoped>
.panel-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
  text-align: center;
  word-wrap: break-word;
}
.quote {
  cursor: pointer;
}
.quote:hover {
  background-color: #ffe2e2;
}
</style>
