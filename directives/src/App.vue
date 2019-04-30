<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'Some Text'" />
        <p v-html="'<strong>Some Strong Text</strong>'" /> <!-- Remember to sanitiza the html code! -->
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight>
          Styled with custom directives
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>
