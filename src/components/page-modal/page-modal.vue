<template>
  <div class="userModal">
    <el-dialog
      v-model="centerDialogVisible"
      :title="isNew ? config.header.newTitle : config.header.editTitle"
      width="30%"
      center
    >
      <div class="form">
        <el-form label-width="70px" :model="formData" ref="formRef">
          <template v-for="item in config.formItem" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-model="formData[item.prop]"
                ></el-input>
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  type="daterange"
                  range-separator="-"
                  placeholder="Pick a day"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  v-model="formData[item.prop]"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template
                    v-for="subItem in item.options"
                    :key="subItem.value"
                  >
                    <el-option v-bind="subItem" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useSystemStore from '@/store/main/system/system'
import type { ElForm } from 'element-plus'

interface IProps {
  config: {
    pageName: string
    header: {
      newTitle: string
      editTitle: string
    }
    formItem: any[]
  }
  otherInfo?: any
}

const props = defineProps<IProps>()
const formRef = ref<InstanceType<typeof ElForm>>()
const systemStore = useSystemStore()

// 表单数据
const formData = reactive<any>({})
function initialFormData() {
  for (const item of props.config.formItem) {
    formData[item.prop] = item.initialValue ?? ''
  }
}
initialFormData()

// 是否显示对话框
const centerDialogVisible = ref(false)
const isNew = ref(true)
const userId = ref<number>()
function setModalVisible(info?: any) {
  centerDialogVisible.value = true
  if (info) {
    // 编辑时
    isNew.value = false
    userId.value = info.id
    for (let key in formData) {
      formData[key] = info[key]
    }
  } else {
    // 新建时
    isNew.value = true
    initialFormData()
  }
}
defineExpose({ setModalVisible })

// 点击确定逻辑
function handleConfirmClick() {
  let infoData = formData
  if (props.otherInfo) infoData = { ...formData, ...props.otherInfo }
  centerDialogVisible.value = false

  if (isNew.value) {
    systemStore.createPageDataAction(props.config.pageName, infoData)
  } else {
    systemStore.editPageDataAction(
      props.config.pageName,
      userId.value as number,
      infoData
    )
  }
  // formRef.value?.resetFields()
}
</script>

<style lang="less" scoped>
.userModal {
}

.form {
  padding-right: 20px;
}
</style>
