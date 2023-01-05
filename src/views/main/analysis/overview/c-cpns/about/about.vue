<template>
  <div class="about">
    <el-card class="box-card">
      <!-- header -->
      <template #header>
        <div class="card-header">
          <span class="header">关于</span>
        </div>
      </template>

      <!-- body -->
      <div>
        <span>
          基于 Vue3、Pinia、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
          等的后台管理系统方案。
        </span>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.header {
  font-weight: 700;
}
</style>
