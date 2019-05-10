<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase }}</p>
        <p>{{ text | toLowercase }}</p>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li
            v-for="(fruit, index) in filteredFruits"
            :key="index"
          >{{ fruit }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: "Hello there!!!",
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: ""
    }
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter((e) => {
        return e.match(this.filterText);
      });
    }
  }
}
</script>

<style>
</style>
