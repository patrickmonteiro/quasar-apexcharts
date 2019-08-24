<template>
  <q-card class="my-card bg-grey-9" >
    <q-card-section>
      <apexchart type="donut" height="240" :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ApexColumn',
  data () {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
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
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
          labels: {
            colors: '#FFF'
          }
        }
      }
    }
  }
}
</script>
