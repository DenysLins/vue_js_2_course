<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ id }}</p>,
    <!-- <router-link :to="'/user/' + id + '/edit'"> -->
    <router-link :to="link">
      <button class="btn btn-info">Edit User</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      link: {
        name: "userEdit",
        query: {
          locale: "en",
          q: 100
        },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter inside component");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave inside component");
    next();
  }
};
</script>
