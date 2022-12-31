<template>
  <div class="role">
    <page-search :config="searchConfig" @query-click="handleQueryClick" />
    <page-content
      :config="contentConfig"
      ref="contentRef"
      @newClick="handleNewClick"
      @editClick="handleEditClick"
    />
    <page-modal :config="modalConfig" :otherInfo="otherInfo" ref="modalRef">
      <template #manuList>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleElTreeCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
import PageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import { ref, nextTick } from 'vue'

const { contentRef, handleQueryClick } = usePageContent()
const { modalRef, handleNewClick, handleEditClick } = usePageModal(
  newCallback,
  editCallback
)
const MainStore = useMainStore()
const treeRef = ref<any>()

// 获取全部菜单列表
MainStore.fetchEntireDataAction()
const { entireMenus } = storeToRefs(MainStore)

const otherInfo = ref({})
function handleElTreeCheck(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}

// 编辑时回显
function editCallback(info: any) {
  // 获取MenuList Id
  const MenuListId: any[] = []
  function getMenuListId(data: any) {
    data.forEach((item: any) => {
      if (item.children) {
        getMenuListId(item.children)
      } else {
        MenuListId.push(item.id)
      }
    })
  }
  getMenuListId(info.menuList)

  nextTick(() => {
    treeRef.value.setCheckedKeys(MenuListId)
    otherInfo.value = { menuList: MenuListId }
  })
}

// 新建时初始化
function newCallback() {
  nextTick(() => {
    treeRef.value.setCheckedKeys([])
    otherInfo.value = { menuList: [] }
  })
}
</script>

<style lang="less" scoped>
.role {
  border-radius: 8px;
  overflow: hidden;
}
</style>
