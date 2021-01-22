<template>
  <apexchart type="bar" height="200" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexColumn',
  data () {
    return {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1000
        },
        grid: {
          show: true,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        title: {
          text: 'Column',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.5,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          title: {
            text: '$ (thousands)',
            style: {
              color: '#FFF'
            }
          },
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      }
    }
  }
}
</script>
