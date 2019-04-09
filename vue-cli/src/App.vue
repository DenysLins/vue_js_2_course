<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <button @click="changeMyName">Change my name</button>
    <app-home :name="name" @nameWasReset="name = $event"></app-home>
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
    }
  }
};
</script>

<style>
</style>
