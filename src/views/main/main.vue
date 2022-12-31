<template>
  <div class="main">
    <el-container class="main-contant">
      <el-aside :width="isFold ? '60px' : '200px'">
        <main-menu :isFold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'

// 处理侧边栏折叠
const isFold = ref(false)
function handleFoldChange(flag: boolean) {
  isFold.value = flag
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .main-contant {
    height: 100%;
    .el-aside {
      transition: width 0.3s ease;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .el-header {
    }
    .el-main {
      background-color: rgb(237, 237, 237);
    }
  }
}
</style>
