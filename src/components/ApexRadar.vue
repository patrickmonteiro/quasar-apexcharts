<template>
  <q-card class="my-card bg-grey-9" style="min-height: 250px">
    <q-card-section>
      <apexchart type="radar" height="230px" :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ApexRadar',
  data () {
    return {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
      }],
      chartOptions: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        title: {
          text: 'Basic Radar Chart'
        },
        yaxis: {
          show: false
        },
        markers: {
          size: 0
        }
      }
    }
  }
}
</script>
