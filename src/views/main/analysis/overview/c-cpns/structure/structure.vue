<template>
  <div class="structure">
    <el-card class="box-card">
      <!-- header -->
      <template #header>
        <div class="card-header">
          <span class="header">技术栈</span>
        </div>
      </template>

      <!-- body -->
      <div>
        <el-descriptions class="margin-top" :column="2" size="large" border>
          <template v-for="item in list" :key="item.name">
            <el-descriptions-item :label="item.name">
              <el-tag size="default">{{ item.tech }}</el-tag>
            </el-descriptions-item>
          </template>
        </el-descriptions>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const list = [
  { name: '开发工具', tech: 'Visual Studio Code' },
  { name: '编程语言', tech: 'TypeScript + JavaScript' },
  { name: '前端框架', tech: 'Vue 3.x' },
  { name: '构建工具', tech: 'Vite 2.x' },
  { name: '路由工具', tech: 'Vue Router 4.x' },
  { name: '状态管理', tech: 'Pinia' },
  { name: 'UI 框架', tech: 'Element Plus' },
  { name: '可视化', tech: 'Echart 5.x' },
  { name: 'CSS 预编译', tech: 'Less' },
  { name: 'HTTP 工具', tech: 'Axios' },
  { name: '代码规范', tech: 'EditorConfig + Prettier + ESLint' },
  { name: '项目部署', tech: 'Centos + Nginx' }
]
</script>

<style lang="less" scoped>
.header {
  font-weight: 700;
}
</style>
