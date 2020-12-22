<template>
  <card-base>
    <apexchart
      :type="typeChart"
      height="200"
      :options="chartOptions"
      :series="series"
    />
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'ApexColumn',
  components: {
    CardBase
  },
  props: {
    typeChart: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: 'Chart',
      required: false
    },
    dataChart: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  data () {
    return {
      series: [{
        name: 'Net Profit',
        data: this.dataChart
      }],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
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
          text: this.title,
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
        stroke: { ...this.stroke },
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
  },
  computed: {
    stroke () {
      if (this.typeChart === 'line') {
        return {
          curve: 'smooth'
        }
      }
      return {
        width: 0
      }
    }
  }
}
</script>
