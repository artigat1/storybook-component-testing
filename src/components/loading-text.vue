<template>
  <span
    class="loading-text"
    data-testid="loading-text"
  >
    {{ text }}

    <span v-if="isLoading">
      <span
        class="loading-text__dot1"
        data-test="loading-text-dots"
        >.</span
      >
      <span class="loading-text__dot2">.</span>
      <span class="loading-text__dot3">.</span>
    </span>
  </span>
</template>

<script lang="ts">
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      isLoading: {
        type: Boolean,
        required: false,
      },
    },
  }
</script>

<style lang="scss">
  @import './loading-text.scss';
</style>
