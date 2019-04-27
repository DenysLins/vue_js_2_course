<template>
  <div class="col-12 my-4">
    <h2>Quotes Added</h2>
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped"
        :style="{ width : ((actualQuotes / totalQuotes) * 100) + '%'}"
        role="progressbar"
        :aria-valuenow="((actualQuotes / totalQuotes) * 100)"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ actualQuotes }} / {{ totalQuotes }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["actualQuotes", "totalQuotes"]
};
</script>

<style>
</style>
