<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // 1
  // methods: {
  //   increment() {
  //     this.$store.commit("increment");
  //   },
  //   decrement() {
  //     this.$store.commit("decrement");
  //   }
  // }
  // 2
  // methosds: mapMutations(["increment", "decrement"])
  // 3
  // methods: mapMutations({
  //   increment: "increment",
  //   decrement: "decrement"
  // })
  // 4
  methods: {
    ...mapActions(["increment", "decrement"])
  }
};
</script>
