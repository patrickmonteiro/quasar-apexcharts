<template>
  <card-base>
    <apexchart type="polarArea" height=200 :options="chartOptions" :series="series"/>
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'ApexMultipleRadialBars',
  components: {
    CardBase
  },
  data () {
    return {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chartOptions: {
        title: {
          text: 'Polar Area',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        chart: {
          type: 'polarArea'
        },
        stroke: {
          colors: ['#fff']
        },
        legend: {
          labels: {
            colors: '#FFF'
          }
        },
        fill: {
          opacity: 0.8
        },
        yaxis: {
          labels: {
            style: {
              colors: '#FFF'
            }
          }
        }
      }

    }
  }
}
</script>
