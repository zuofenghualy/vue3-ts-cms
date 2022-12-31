import { ref } from 'vue'
import type PageModal from '@/components/page-modal/page-modal.vue'

function usePageModal(newCallback?: any, editCallback?: any) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewClick() {
    modalRef.value?.setModalVisible()
    if (newCallback) newCallback()
  }
  function handleEditClick(info: any) {
    modalRef.value?.setModalVisible(info)
    if (editCallback) editCallback(info)
  }

  return {
    modalRef,
    handleNewClick,
    handleEditClick
  }
}

export default usePageModal
