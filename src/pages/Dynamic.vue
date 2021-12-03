<template>
  <q-page>
    <div class="row">
      <div class="col-12 text-white text-bold q-pa-md">
        <p>
          <span class="text-purple-4">Request with axios:</span>
           https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,BRL
        </p>
      </div>
    </div>
    <q-separator color="grey-7" />
    <div class="row q-pt-sm">
      <div class="col-12">
        <apexchart ref="crypto" type="bar" height="200" :options="chartOptions" :series="series" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageDynamic',
  data () {
    return {
      series: [ {
        name: 'Dados',
        data: []
      }
      //   {
      //   name: 'Net Profit',
      //   data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      // }
      ],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1000
        },
        grid: {
          show: true,
          strokeDashArray: 2,
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
            opacityTo: 0.9,
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
          categories: ['BRL', 'EUR', 'USD'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        }
      }
    }
  },
  mounted () {
    this.getCryptoInfos()
  },
  methods: {
    async getCryptoInfos () {
      try {
        const { data } = await this.$axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,BRL')
        this.series[0].data = [
          data.BRL,
          data.EUR,
          data.USD
        ]
        this.updateSeriesLine()
      } catch (error) {
        console.error(error)
      }
    },
    updateSeriesLine () {
      this.$refs.crypto.updateSeries([{
        data: this.series[0].data
      }], false, true)
    }
  }
}
</script>
