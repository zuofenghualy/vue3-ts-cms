<template>
  <div class="line-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import { computed } from 'vue'

interface IProps {
  labels: any[]
  values: any[]
}
const props = defineProps<IProps>()

const option = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.labels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.values,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.line-echart {
}
</style>
