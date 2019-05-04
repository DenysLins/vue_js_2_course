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
        <p v-highlight:background.delayed="'red'">
          Styled with custom directives
        </p>
        <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 300}">
          Styled with custom local directives
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind (el, binding, vnode) {
        // el.style.backgroundColor = "green";
        // el.style.backgroundColor = binding.value;
        let delayed = 0;
        if (binding.modifiers["delayed"]) {
          delayed = 5000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          },
            2000);
        }
        setTimeout(() => {
          if (binding.arg === "background") {
            el.style.backgroundColor = binding.value.mainColor;
          } else {
            el.style.color = binding.value.mainColor;
          }
        }, delayed);
      }
    }
  }
};
</script>

<style>
</style>
