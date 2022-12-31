import { ref } from 'vue'
import type PageContent from '@/components/page-content/page-content.vue'

function usePageContent() {
  const contentRef = ref<InstanceType<typeof PageContent>>()
  function handleQueryClick(searchForm: any) {
    contentRef.value?.fetchPageListData(searchForm)
  }

  return {
    contentRef,
    handleQueryClick
  }
}

export default usePageContent
