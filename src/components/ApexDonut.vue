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
        theme: {
          // monochrome: {
          //   enabled: true,
          //   color: '#255aee',
          //   shadeTo: 'light',
          //   shadeIntensity: 0.65
          // }
        },
        // fill: {
        //   type: 'gradient'
        // },
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
