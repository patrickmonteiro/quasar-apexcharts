<template>
  <apexchart height="300" type="polarArea" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'ApexPolarArea',
  data () {
    return {
      options: {
        title: {
          text: 'ApexPolarArea',
          align: 'left'
        },
        chart: {
          type: 'polarArea'
        },
        stroke: {
          colors: [getCssVar('primary'), getCssVar('secondary'), getCssVar('negative')]
        },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21]
    }
  }
})
</script>
