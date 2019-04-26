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
};
</script>

<style>
</style>
