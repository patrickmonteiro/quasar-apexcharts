<template>
  <apexchart type="pie" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'ApexSimplePieChart',
  data () {
    return {
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        title: {
          text: 'Pie',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
