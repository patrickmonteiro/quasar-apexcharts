<template>
  <apexchart type="bar" height="230" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexStackedColumns100',
  data () {
    return {
      series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
      }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
      }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: '100%'
        },
        title: {
          text: 'Stacked Columns 100',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
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
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'right',
          offsetX: 0,
          offsetY: 50,
          labels: {
            colors: '#FFF'
          }
        }
      }
    }
  }
}
</script>
