<template>
  <q-card class="my-card bg-grey-9" style="min-height: 250px">
    <q-card-section>
      <apexchart ref="realtimeChart" type="line" height="200" :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ApexColumn',
  data () {
    return {
      series: [{
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 99]
      }],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
        chart: {
          height: 350,
          zoom: {
            enabled: true
          }
        },
        stroke: {
          curve: 'straight',
          width: 5
        },
        grid: {
          padding: {
            left: 0,
            right: 0
          }
        },
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 5,
          left: -7,
          top: 22
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              color: '#fff'
            }
          }
        }
      }
    }
  },
  mounted () {
    this.setDataLineChart()
  },
  methods: {
    getRandomArbitrary (min, max) {
      return Math.floor(Math.random() * 99)
    },
    setDataLineChart () {
      setInterval(() => {
        this.series[0].data.splice(0, 1)
        this.series[0].data.push(this.getRandomArbitrary(0, 99))
        this.updateSeriesLine()
      }, 3000)
    },
    updateSeriesLine () {
      this.$refs.realtimeChart.updateSeries([{
        data: this.series[0].data
      }], false, true)
    }
  }
}
</script>
