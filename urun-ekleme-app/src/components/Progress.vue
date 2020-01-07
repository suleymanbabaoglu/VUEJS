<template>
  <div class="progress">
    <div
      class="progress-bar bg-info"
      role="progressbar"
      :style="{ width: progress + '%' }"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {{ productsCount }}/10
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      width: 0,
      productsCount: 0,
      progress: 0
    };
  },
  created() {
    eventBus.$on("pCount", pCount => {
      this.productsCount = pCount;
      this.progress = pCount * 10;
    });
  }
};
</script>

<style lang="scss" scoped></style>
