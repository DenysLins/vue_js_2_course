<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ id }}</p>,
    <!-- <router-link :to="'/user/' + id + '/edit'"> -->
    <router-link :to="{ name: 'userEdit', query: { locale: 'en', q: 100}}">
      <button class="btn btn-info">Edit User</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>
