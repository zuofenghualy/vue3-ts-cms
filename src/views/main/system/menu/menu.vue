<template>
  <div class="menu">
    <page-content :config="contentConfig" ref="contentRef" />
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
</script>

<style scoped>
.menu {
  border-radius: 8px;
  overflow: hidden;
}
</style>
