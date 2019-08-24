<template>
  <q-card class="my-card bg-grey-9" >
    <q-card-section>
      <apexchart type=radialBar height=230 :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ApexMultipleRadialBars',
  data () {
    return {
      series: [76, 67, 61, 90],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2', '#D15F5F'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.05,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        plotOptions: {
          radialBar: {
            offsetY: -10,
            offsetX: 0,
            startAngle: 0,
            endAngle: 250,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined
            },
            dataLabels: {
              name: {
                show: false

              },
              value: {
                show: false
              }
            }
          }
        },
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'left',
          offsetX: 35,
          offsetY: 10,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function (seriesName, opts) {
            return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            horizontal: 1
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }]
      }
    }
  }
}
</script>
