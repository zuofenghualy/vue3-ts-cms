<template>
  <div class="dashboard">
    <!-- 顶部数字数据展示 -->
    <el-row :gutter="10">
      <template v-for="item in amountData" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 2.中间的图标 -->
    <el-row :gutter="20">
      <el-col :span="8">
        <chart-card header="分类商品数量(饼图)">
          <pie-echart :data="showGoodsCategoryCount" />
        </chart-card>
      </el-col>
      <el-col :span="8">
        <chart-card header="不同城市商品销量">
          <map-echart :data="showGoodsAddressSale" />
        </chart-card>
      </el-col>
      <el-col :span="8">
        <chart-card header="分类商品销量(玫瑰图)">
          <rose-echart :data="showGoodsCategorySale" />
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import CountCard from './c-cpns/count-card/count-card.vue'
import ChartCard from './c-cpns/chart-card/chart-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'
import { PieEchart, RoseEchart } from '@/components/echarts'
import { computed } from 'vue'

// 从store中获取数据
const analysisStore = useAnalysisStore()
analysisStore.fetchDashboardDataAction()
const {
  amountData,
  goodsCategoryCount,
  goodsCategorySale,
  goodsCategoryFavor,
  goodsAddressSale
} = storeToRefs(analysisStore)
const showGoodsCategoryCount = computed(() => {
  const res = goodsCategoryCount.value.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
  return res
})
const showGoodsCategorySale = computed(() => {
  const res = goodsCategorySale.value.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
  return res
})
const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => {
    return { name: item.address, value: item.count }
  })
})
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
