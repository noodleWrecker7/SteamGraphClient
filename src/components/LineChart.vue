<!-- <script lang="ts">
import { Line } from 'vue-chartjs'
import { onMounted } from 'vue'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement)

export default {
  components: { Line },
  props: ['chartData'],
  data() {
    return {
      chartOptions: {
      }
    }
  }
}
</script>

<template>
  <Line :chart-data="chartData" :chart-options="chartOptions" />
</template>
 -->