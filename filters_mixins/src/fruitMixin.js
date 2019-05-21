export const fruitMixin = {
  data() {
    return {
      text: "Hello there!!!!!!",
      fruits: ["Apple", "Banana", "Mango", "Melon", "Lemon"],
      filterText: ""
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  created() {
    console.log("Created inside fruit mixin");
  }
};
