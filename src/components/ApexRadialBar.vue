<template>
  <card-base>
    <apexchart type=radialBar height=200 :options="chartOptions" :series="series" />
  </card-base>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'ApexMultipleRadialBars',
  components: {
    CardBase
  },
  data () {
    return {
      series: [75],
      chartOptions: {
        chart: {
          toolbar: {
            show: true
          }
        },
        title: {
          text: 'Radial Bar',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#424242',
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#424242',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#FFF',
                fontSize: '17px'
              },
              value: {
                formatter: function (val) {
                  return parseInt(val)
                },
                color: '#FFF',
                fontSize: '36px',
                show: true
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#FCCF31', '#FCCF31'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Percent']
      }
    }
  }
}
</script>
