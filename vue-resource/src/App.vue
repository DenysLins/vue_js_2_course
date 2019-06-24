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
        <hr>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br>
        <br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(u, i) in users"
            :key="i"
          >{{ u.username }} - {{ u.mail}}</li>
        </ul>
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
      },
      users: [],
      url: "firebase_url"
    };
  },
  methods: {
    submit() {
      this.$http
        .post(this.url, this.user)
        .then(response => {
          this.user.username = "";
          this.user.mail = "";
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchData() {
      this.$http
        .get(this.url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let d in data) {
            resultArray.push(data[d]);
          }
          this.users = resultArray;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
