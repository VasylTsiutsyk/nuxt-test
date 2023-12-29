<template>
  <div>
    <VHeader />

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import VHeader from '~/components/partials/Header.vue';
</script>
