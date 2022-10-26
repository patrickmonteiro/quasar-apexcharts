<template>
  <apexchart height="300" type="bar" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'ApexBar',
  data () {
    return {
      options: {
        title: {
          text: 'ApexBar',
          align: 'left'
        },
        chart: {
          id: 'apex-bar'
        },
        colors: [getCssVar('primary'), getCssVar('secondary'), getCssVar('negative')],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
})
</script>
