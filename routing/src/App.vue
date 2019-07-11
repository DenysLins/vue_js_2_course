<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Routing</h1>
        <hr />
        <app-header></app-header>
        <hr />
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
</style>
