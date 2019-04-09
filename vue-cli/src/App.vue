<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <button @click="changeMyName">Change my name</button>
    <app-home :name="name" :resetFn="resetName"></app-home>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "Denys"
    };
  },
  methods: {
    changeMyName() {
      this.name = "André";
    },
    resetName() {
      this.name = "Denys";
    }
  }
};
</script>

<style>
</style>
