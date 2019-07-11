<template>
  <div>
    <h1>The User Page</h1>
    <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
    <hr />
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>
