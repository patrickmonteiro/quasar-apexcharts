<template>
  <card-base>
    <apexchart type="area" height="230" :options="chartOptions" :series="series"></apexchart>
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'

export default {
  name: 'ApexArea',
  data () {
    return {
      series: [{
        name: 'STOCK ABC',
        data: [79, 48, 39, 92, 67, 32, 94, 120]
      }],
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Area',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff'
            }
          }
        }
      }
    }
  },
  components: {
    CardBase
  }
}
</script>

<style>

</style>
