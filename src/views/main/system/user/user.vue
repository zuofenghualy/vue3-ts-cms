<template>
  <div class="user">
    <page-search :config="searchConfig" @query-click="handleQueryClick" />
    <page-content
      :config="contentConfig"
      ref="contentRef"
      @newClick="handleNewClick"
      @editClick="handleEditClick"
    >
      <template #enable="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </page-content>
    <page-modal :config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
import PageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import useMainStore from '@/store/main/main'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

const { contentRef, handleQueryClick } = usePageContent()
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
const MainStore = useMainStore()

// 获取全部角色列表和部门列表，并放入config数据中
MainStore.fetchEntireDataAction()
const { entireRoles, entireDepartments } = storeToRefs(MainStore)
const modalConfigRef = computed(() => {
  // 添加角色列表
  let options = entireRoles.value.map((item) => {
    return { label: item.name, value: item.id }
  })
  let formItem = modalConfig.formItem.find((item: any) => {
    return item.prop === 'roleId'
  })
  formItem.options = options
  // 添加部门列表
  options = entireDepartments.value.map((item) => {
    return { label: item.name, value: item.id }
  })
  formItem = modalConfig.formItem.find((item: any) => {
    return item.prop === 'departmentId'
  })
  formItem.options = options
  return modalConfig
})
</script>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
