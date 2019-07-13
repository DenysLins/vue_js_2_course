<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Clicks is: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // computed: mapGetters(["doubleCounter", "stringCounter"])
  // computed: mapGetters({ counter: "doubleCounter", clicks: "stringCounter" })
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script>
