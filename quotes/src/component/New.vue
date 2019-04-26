<template>
  <div>
    <h3>The New Quote</h3>
    <button @click="counter++">
      Increase!
    </button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      counter: 0
    };
  },
  destroyed () {
    console.log('DESTROYED');
  },
  activated () {
    console.log('ACTIVATED');
  },
  deactivated () {
    console.log('DEACTIVATED');
  },
};
</script>

<style>
</style>
