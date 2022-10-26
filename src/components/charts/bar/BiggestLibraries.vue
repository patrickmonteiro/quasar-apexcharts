<template>
  <apexchart height="300" type="bar" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'BiggestLibraries',
  data () {
    return {
      options: {
        title: {
          text: 'World\'s biggest libraries by catalogue size (Guiness - 2021)',
          align: 'left'
        },
        chart: {
          id: 'apex-bar'
        },
        colors: [getCssVar('secondary')],
        xaxis: {
          categories: [
            'British Library',
            'Library of Congress',
            'Shanghai Library',
            'New York Public Library',
            'Library and Archives Canada',
            'Russian State Library',
            'National Diet Library',
            'German National Library',
            'Royal Library, Denmark',
            'National Library of China'
          ],
          title: {
            text: 'Catalogue size (millions)'
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        }
      },
      series: [
        /**
         * Data source:
         * https://en.wikipedia.org/wiki/List_of_largest_libraries
         */
        {
          name: 'Number of items (millions)',
          data: [
            200,
            173,
            56,
            55,
            54,
            48.1,
            44.1,
            43.7,
            42.5,
            40
          ]
        }
      ]
    }
  }
})
</script>
