<template>
  <div class="content">
    <!-- 头部 -->
    <div class="header">
      <h3 class="title">{{ config.header?.title ?? '数据列表' }}</h3>
      <template v-if="!config.header?.hideBtn">
        <el-button v-if="isCreate" type="primary" @click="handleNewUserClick">
          {{ config.header?.btnTitle ?? '新建数据' }}
        </el-button>
      </template>
    </div>

    <!-- 表格 -->
    <div class="table">
      <el-table
        :data="pageList"
        border
        style="width: 100%"
        v-bind="config.childrenTree"
      >
        <template v-for="item in config.propsList" :key="item.prop">
          <template v-if="item.type === 'selection'">
            <el-table-column
              align="center"
              type="selection"
              :width="item.width"
            />
          </template>
          <template v-if="item.type === 'index'">
            <el-table-column
              align="center"
              type="index"
              :label="item.label"
              :width="item.width"
            />
          </template>
          <template v-if="item.type === 'normal'">
            <el-table-column
              align="center"
              :label="item.label"
              :prop="item.prop"
              :width="item.width"
            />
          </template>
          <template v-if="item.type === 'time'">
            <el-table-column
              align="center"
              :label="item.label"
              :prop="item.prop"
            >
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-if="item.type === 'handler'">
            <el-table-column
              align="center"
              :label="item.label"
              :width="item.width"
            >
              <template #default="scope">
                <div class="buttons">
                  <el-button
                    v-if="isUpdate"
                    size="small"
                    icon="Edit"
                    type="primary"
                    text
                    @click="handleEditBtnClick(scope.row)"
                  >
                    编辑
                  </el-button>
                  <el-button
                    v-if="isDelete"
                    size="small"
                    icon="Delete"
                    type="danger"
                    text
                    @click="handleDeleteBtnClick(scope.row.id)"
                  >
                    删除
                  </el-button>
                </div>
              </template>
            </el-table-column>
          </template>
          <template v-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope"></slot>
              </template>
            </el-table-column>
          </template>
        </template>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="footer">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        :small="true"
        layout="sizes, prev, pager, next, jumper, total"
        :total="pageTotalCount ?? 4"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format'
import { ref } from 'vue'
import useLoginStore from '@/store/login/login'

interface IProps {
  config: {
    pageName: string
    header?: {
      title?: string
      btnTitle?: string
      hideBtn?: boolean
    }
    propsList: any[]
    childrenTree?: any
  }
}

const props = defineProps<IProps>()
const emit = defineEmits(['newClick', 'editClick'])

// 获取curd权限
const loginStore = useLoginStore()
const { permissions } = loginStore
const isCreate = permissions.find((item) => {
  return item.includes(`${props.config.pageName}:create`)
})
const isDelete = permissions.find((item) => {
  return item.includes(`${props.config.pageName}:delete`)
})
const isUpdate = permissions.find((item) => {
  return item.includes(`${props.config.pageName}:update`)
})
const isQuery = permissions.find((item) => {
  return item.includes(`${props.config.pageName}:query`)
})

// 发起请求获取数据
const systemStore = useSystemStore()
const { pageList, pageTotalCount, currentPage, pageSize } =
  storeToRefs(systemStore)
fetchPageListData()

// 分页状态改变
function handleSizeChange() {
  fetchPageListData()
}
function handleCurrentChange() {
  fetchPageListData()
}

// 定义函数，用于发送网络请求
function fetchPageListData(searchForm: any = {}) {
  if (!isQuery) {
    pageList.value = []
    return
  }
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const queryInfo = { size, offset, ...searchForm }
  systemStore.postPageListAction(props.config.pageName, queryInfo)
}

defineExpose({ fetchPageListData })

// 删除数据
function handleDeleteBtnClick(id: number) {
  systemStore.deletePageByIdAction(props.config.pageName, id)
}

// 新建用户
function handleNewUserClick() {
  emit('newClick')
}

// 编辑用户
function handleEditBtnClick(userInfo: any) {
  emit('editClick', userInfo)
}
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.table {
  margin-top: 20px;
}

.el-button + .el-button {
  margin-left: 0;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.footer {
  margin-top: 20px;
  .el-pagination {
    justify-content: end;
  }
}
</style>
