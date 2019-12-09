<template>
  <card-base>
    <apexchart type="donut" height="211" :options="chartOptions" :series="series" />
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'ApexColumn',
  components: {
    CardBase
  },
  data () {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        colors: ['#008FFB', '#00E396', '#FEB019'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.05,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        title: {
          text: 'Donut',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
          labels: {
            colors: '#FFF'
          }
        }
      }
    }
  }
}
</script>
