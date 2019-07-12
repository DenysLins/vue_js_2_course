<template>
  <div>
    <h3>Edit the User</h3>
    <p>Editing User {{ id }}</p>
    <p>Query params: {{ queryParams }}</p>
    <hr />
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 900px"></div>
    <p id="data">Some Extra Data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      queryParams: this.$route.query,
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>
