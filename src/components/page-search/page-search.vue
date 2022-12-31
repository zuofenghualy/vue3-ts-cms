<template>
  <div class="search" v-if="isQuery">
    <!-- 搜索表单 -->
    <el-form label-width="100px" size="large" :model="searchForm" ref="formRef">
      <el-row>
        <template v-for="item in config.formItem" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-model="searchForm[item.prop]"
                ></el-input>
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-model="searchForm[item.prop]"
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
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  type="daterange"
                  range-separator="-"
                  placeholder="Pick a day"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  v-model="searchForm[item.prop]"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>

    <!-- 重置和搜索按钮 -->
    <div class="buttons">
      <el-button size="large" @click="handleResetClick">重置</el-button>
      <el-button size="large" type="primary" @click="handleQueryClick">
        搜索
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { ref, reactive } from 'vue'
import useLoginStore from '@/store/login/login'

// 定义接受配置数据属性
interface IProps {
  config: {
    pageName: string
    formItem: any[]
  }
}

const emit = defineEmits(['queryClick'])
const props = defineProps<IProps>()
const formRef = ref<InstanceType<typeof ElForm>>()

// 获取curd权限
const loginStore = useLoginStore()
const { permissions } = loginStore
const isQuery = permissions.find((item) => {
  return item.includes(`${props.config.pageName}:query`)
})

const searchForm = reactive<any>({})
for (const item of props.config.formItem) {
  searchForm[item.prop] = ''
}

function handleResetClick() {
  formRef.value?.resetFields()
  handleQueryClick()
}
function handleQueryClick() {
  emit('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  padding: 20px;
}

.el-form {
  padding-right: 20px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
}
</style>
