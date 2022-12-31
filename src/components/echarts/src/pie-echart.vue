<template>
  <div class="pie-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from './base-echart.vue'

interface IProps {
  data: any
}
const props = defineProps<IProps>()

const option = computed(() => {
  return {
    title: {},
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      top: 'auto'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.pie-echart {
}
</style>
