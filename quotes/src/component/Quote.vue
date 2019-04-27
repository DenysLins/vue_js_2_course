<template>
  <div class="col-md-3 mb-3">
    <div class="card">
      <div class="quote card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
  text-align: center;
  word-wrap: break-word;
  cursor: pointer;
  background-color: #ffe2e2;
}
</style>
