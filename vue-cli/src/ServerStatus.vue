<template>
  <div>
    <p>Server status: {{ status }}</p>
    <p>This name was sent from parent component: {{ name }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
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
    }
  },
  props: ["name"]
};
</script>
