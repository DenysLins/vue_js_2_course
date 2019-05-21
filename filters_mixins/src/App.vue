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
    <hr>
    <app-list></app-list>
  </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin.js'
export default {
  mixins: [fruitMixin],
  computed: {
    filteredFruits () {
      return this.fruits.filter((e) => {
        return e.match(this.filterText);
      });
    }
  },
  components: {
    appList: List
  }
}
</script>

<style>
</style>
