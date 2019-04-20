<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <button @click="changeMyName">Change my name</button>
    <app-home :name="name" :reset-fn="resetName"></app-home>
  </div>
</template>

<script>
import { eventBus } from "./main.js";

export default {
  data: function() {
    return {
      name: "Denys"
    };
  },
  created() {
    eventBus.$on("resetNameByBus", name => {
      this.name = name;
    });
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
