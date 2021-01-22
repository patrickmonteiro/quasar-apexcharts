<template>
  <q-scroll-area
    horizontal
    style="minHeight: 250px; height: 100%; width: 100%;"
    class="bg-grey-1 rounded-borders shadow-2"
  >
    <card-base>
      <div style="width: 1200px; min-height: 200px; linear-gradient( 135deg, #343E59 10%, #2B2D3E 40%)">
        <apexchart
          type="bar"
          height="200"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </card-base>
  </q-scroll-area>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'ApexColumnWithScroll',
  components: {
    CardBase
  },
  data () {
    return {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57, 56, 61, 58, 63, 60, 66]
      }],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
        width: '100%',
        zoom: {
          enabled: true,
          autoScaleYaxis: false,
          type: 'x',
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1
            }
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
          text: 'Column With Scroll Horizontal',
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
          categories: [
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct'
          ],
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
