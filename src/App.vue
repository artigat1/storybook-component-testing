<script setup lang="ts" >
    import TheButton from '@/components/the-button.vue'
    import { ref } from 'vue'

    const isPanelVisible = ref(false)
  const togglePanel = () => {
    isPanelVisible.value = !isPanelVisible.value
  }
</script>

<template>
  <div>
    <the-button
      is-primary
      @click="togglePanel"
      >Click me!
    </the-button>
    <aside :class="{ hide: !isPanelVisible }">
      <p>You clicked the button!</p>
    </aside>
  </div>
</template>
