<template>
  <apexchart type=bubble height=230 :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexBubble',
  data () {
    return {
      series: [{
        name: 'Bubble1',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble2',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble3',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble4',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }],
      chartOptions: {
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1000
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
          text: 'Bubble',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          labels: {
            colors: '#FFF'
          }
        },
        xaxis: {
          tickAmount: 12,
          type: 'category',
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          max: 70,
          labels: {
            style: {
              colors: '#fff'
            }
          }
        }
      }
    }
  },
  methods: {
    generateData (baseval, count, yrange) {
      var i = 0
      var series = []
      while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

        series.push([x, y, z])
        baseval += 86400000
        i++
      }
      return series
    }
  }
}
</script>
