<template>
  <card-base>
    <apexchart type="radar" height="230px" :options="chartOptions" :series="series" />
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'ApexRadar',
  components: {
    CardBase
  },
  data () {
    return {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
      }],
      chartOptions: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        title: {
          text: 'Radar',
          align: 'left',
          style: {
            color: '#FFF'
          }
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
