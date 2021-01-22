<template>
  <apexchart ref="realtimeChart" type="line" height="200" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexLineGradient',
  data () {
    return {
      series: [{
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 30, 98, 15]
      }],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
        chart: {
          height: 350,
          type: 'line'
        },
        grid: {
          show: false,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        stroke: {
          curve: 'smooth',
          width: 10
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#323C55'],
            shadeIntensity: 10,
            type: 'horizontal',
            opacityFrom: 0.1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        // dropShadow: {
        //   enabled: true,
        //   opacity: 0.3,
        //   blur: 5,
        //   left: -7,
        //   top: 22
        // },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Line Gradient',
          align: 'left',
          style: {
            color: '#FFF'
          }
        }
        // xaxis: {
        //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        //   labels: {
        //     style: {
        //       colors: '#fff'
        //     }
        //   }
        // },
        // yaxis: {
        //   labels: {
        //     style: {
        //       colors: '#fff'
        //     }
        //   }
        // }
      }
    }
  }
}
</script>
