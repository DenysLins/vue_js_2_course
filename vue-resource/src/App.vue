<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="name">Username</label>
          <input type="text" class="form-control" id="name" v-model="user.username">
        </div>
        <div class="form-group">
          <label for="mail">Mail</label>
          <input type="email" class="form-control" id="mail" v-model="user.mail">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        mail: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.user);
      this.$http
        .post("https://vue-resource-bcaec.firebaseio.com/data.json", this.user)
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>

<style>
</style>
