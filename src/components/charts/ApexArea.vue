<template>
  <apexchart height="300" type="area" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'ApexArea',
  data () {
    return {
      options: {
        title: {
          text: 'ApexArea',
          align: 'left'
        },
        chart: {
          height: 300,
          type: 'area'
        },
        colors: [getCssVar('primary'), getCssVar('secondary'), getCssVar('negative')],
        markers: {
          size: 4,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }, {
        name: 'series3',
        data: [15, 92, 15, 72, 84, 42, 41]
      }]
    }
  }
})
</script>
