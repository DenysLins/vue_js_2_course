<template>
  <div>
    <p>Server status: {{ status }}</p>
    <p>This name was sent from parent component: {{ name }}</p>
    <p>This call a function accessing and reversing props throught .this: {{ switchName() }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
    <button @click="resetFn">Reset Name</button>
    <button @click="emitEventBus">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from './main.js';
export default {
  data: function() {
    return {
      status: true
    };
  },
  methods: {
    changeStatus() {
      this.status = !this.status;
    },
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    emitEventBus() {
      eventBus.$emit('resetNameByBus', 'Denys');
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    resetFn: Function
  }
};
</script>
