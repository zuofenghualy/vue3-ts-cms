<template>
  <div class="rose-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import { computed } from 'vue'

interface IProps {
  data: any
}
const props = defineProps<IProps>()

const option = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: [10, 90],
        center: ['50%', '50%'],
        right: '-10%',
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.data
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.rose-echart {
}
</style>
