<template>
  <q-card class="my-card bg-grey-10" style="min-height: 400px">
    <q-card-section>
      <apexchart type="donut" height="350" :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ApexColumn',
  data () {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
      }
    }
  }
}
</script>
