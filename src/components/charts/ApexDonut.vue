<template>
  <apexchart height="300" type="donut" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'ApexDonut',
  data () {
    return {
      options: {
        title: {
          text: 'ApexDonut',
          align: 'left'
        },
        chart: {
          id: 'apex-donut'
        },
        colors: [getCssVar('primary'), getCssVar('secondary'), getCssVar('negative'), getCssVar('accent')],
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
      series: [30, 40, 45, 50]
    }
  }
})
</script>
