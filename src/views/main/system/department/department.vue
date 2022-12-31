<template>
  <div class="department">
    <page-search :config="searchConfig" @query-click="handleQueryClick" />
    <page-content
      :config="contentConfig"
      ref="contentRef"
      @newClick="handleNewClick"
      @editClick="handleEditClick"
    />
    <page-modal :config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<script setup lang="ts" name="department">
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
const { entireDepartments } = storeToRefs(MainStore)
const modalConfigRef = computed(() => {
  const options = entireDepartments.value.map((item) => {
    return { label: item.name, value: item.id }
  })
  const formItem = modalConfig.formItem.find((item: any) => {
    return item.prop === 'parentId'
  })
  formItem.options.push(...options)
  return modalConfig
})
</script>

<style scoped>
.department {
  border-radius: 8px;
  overflow: hidden;
}
</style>
