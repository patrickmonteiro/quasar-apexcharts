<template>
  <q-card class="my-card bg-grey-9" style="min-height: 250px">
    <q-card-section>
      <apexchart type=heatmap height=200 :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ApexHeatmap',
  data () {
    return {
      series: [
        {
          name: 'Series 1',
          data: [
            { x: 'W1', y: 22 },
            { x: 'W2', y: 29 },
            { x: 'W3', y: 13 },
            { x: 'W4', y: 22 },
            { x: 'W4', y: 62 },
            { x: 'W4', y: 32 },
            { x: 'W4', y: 12 }
          ]
        },
        {
          name: 'Series 2',
          data: [
            { x: 'W1', y: 22 },
            { x: 'W2', y: 29 },
            { x: 'W3', y: 13 },
            { x: 'W4', y: 22 },
            { x: 'W4', y: 62 },
            { x: 'W4', y: 32 },
            { x: 'W4', y: 12 }
          ]
        },
        {
          name: 'Series 2',
          data: [
            { x: 'W1', y: 22 },
            { x: 'W2', y: 29 },
            { x: 'W3', y: 13 },
            { x: 'W4', y: 22 },
            { x: 'W4', y: 62 },
            { x: 'W4', y: 32 },
            { x: 'W4', y: 12 }
          ]
        },
        {
          name: 'Series 2',
          data: [
            { x: 'W1', y: 12 },
            { x: 'W2', y: 59 },
            { x: 'W3', y: 93 },
            { x: 'W4', y: 12 },
            { x: 'W4', y: 42 },
            { x: 'W4', y: 82 },
            { x: 'W4', y: 2 }
          ]
        }
      ],
      chartOptions: {
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
        plotOptions: {
          heatmap: {
            colorScale: {
              ranges: [{
                from: -30,
                to: 5,
                color: '#FCCF31',
                name: 'low'
              },
              {
                from: 6,
                to: 20,
                color: '#17ead9',
                name: 'medium'
              },
              {
                from: 21,
                to: 45,
                color: '#f02fc2',
                name: 'high'
              }
              ]
            }
          }
        },
        legend: {
          labels: {
            colors: '#FFF'
          }
        },
        yaxis: {
          labels: {
            style: {
              color: '#fff'
            }
          }
        },
        xaxis: {
          labels: {
            style: {
              colors: '#fff'
            }
          }
        }
      }
    }
  }
}
</script>
