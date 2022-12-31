<template>
  <div class="main-menu">
    <div class="logo">
      <img src="@/assets/image/logo.svg" alt="" />
      <template v-if="!isFold">
        <h2 class="title">后台管理系统</h2>
      </template>
    </div>
    <div class="menu">
      <el-menu :default-active="defaultActive" :collapse="isFold">
        <!-- 遍历整个菜单 -->
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="String(item.id)">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('el-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <!-- 遍历子菜单 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="String(subitem.id)"
                @click="handleItemClick(subitem)"
              >
                {{ subitem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { useRoute, useRouter } from 'vue-router'
import { mapPathToMenu } from '@/utils/map-menus'
import { computed, ref } from 'vue'

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

// 获取菜单
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

// 路由跳转
const router = useRouter()

function handleItemClick(item: any) {
  const url = item.url
  router.push(url)
}

// 默认菜单
const route = useRoute()
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenus)
  return pathMenu.id + ''
})
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #ffffff;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 5px;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background-color: rgb(0, 107, 16);

  img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
  }

  .el-menu-item:hover {
  }

  .el-menu-item.is-active {
    color: rgb(143, 92, 4);
    background-color: rgb(205, 250, 194);
  }
}
</style>
