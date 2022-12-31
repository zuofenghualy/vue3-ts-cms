<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { ref, onMounted, defineProps, watchEffect } from 'vue'
import ChinaJSON from '../data/china.json'

interface IProps {
  option: any
}
const props = defineProps<IProps>()

// 注册中国地图
echarts.registerMap('china', ChinaJSON)

// echart绘图
const echartRef = ref<HTMLElement>()
onMounted(() => {
  // 初始化echarts实例
  const echartInstance = echarts.init(echartRef.value!, 'light', {
    render: 'canvas'
  })
  // 设置配置option
  watchEffect(() => echartInstance.setOption(props.option))
  // 监听window缩放
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style scoped>
.echart {
  width: 100%;
  height: 275px;
}
</style>
