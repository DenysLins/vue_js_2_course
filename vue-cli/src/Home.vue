<template>
  <div>
    <app-server-status v-for="i in 5" :name="name" @nameWasReset="launchEvent($event)"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";
export default {
  components: {
    "app-server-status": ServerStatus
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    launchEvent(event) {
      this.$emit("nameWasReset", event);
    }
  }
};
</script>
