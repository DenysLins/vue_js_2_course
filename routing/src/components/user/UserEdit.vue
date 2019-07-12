<template>
  <div>
    <h3>Edit the User</h3>
    <p>Editing User {{ id }}</p>
    <p>Query params: {{ queryParams }}</p>
    <div style="height: 900px"></div>
    <p id="data">Some Extra Data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      queryParams: this.$route.query
    };
  }
};
</script>
