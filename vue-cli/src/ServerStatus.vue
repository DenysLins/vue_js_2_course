<template>
  <div>
    <p>Server status: {{ status }}</p>
    <p>This name was sent from parent component: {{ name }}</p>
    <p>This call a function accessing and reversing props throught .this: {{ switchName() }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
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
    resetName() {
      this.$emit("nameWasReset", "Denys");
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
