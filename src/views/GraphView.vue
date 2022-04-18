<script setup lang="ts">
// const labels = ref()
// const values = ref()
import 'chartjs-adapter-moment';



let chartOptions = {}
</script>

<template>
  <!-- <LineChart :chartData="chartData" :chartOptions="chartOptions" /> -->
  <line-chart :data="{ '2017-01-01': 11, '2017-01-02': 6 }" ></line-chart>
</template>
