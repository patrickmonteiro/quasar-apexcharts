<template>
  <apexchart type="radialBar" height="200" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexMultipleRadialBars',
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
                show: false
              },
              value: {
                formatter: function (val) {
                  return val + '%'
                },
                color: '#FFF',
                fontSize: '36px',
                show: true,
                offsetY: 13
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
        }
      }
    }
  }
}
</script>
