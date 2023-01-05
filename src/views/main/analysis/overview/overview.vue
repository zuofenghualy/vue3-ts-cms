<template>
  <div class="overview">
    <about />
    <structure />
  </div>
</template>

<script setup lang="ts">
import about from './c-cpns/about/about.vue'
import structure from './c-cpns/structure/structure.vue'
</script>

<style lang="less" scoped>
.structure {
  margin-top: 20px;
}
</style>
