<template>
  <apexchart height="300" type="line" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'gdp',
  data () {
    return {
      options: {
        title: {
          text: 'GDP Growth (Annual %)',
          align: 'left'
        },
        chart: {
          id: 'gdp-china-usa'
        },
        colors: ['#AA381E', getCssVar('primary')],
        dataLabels: {
          enabled: true
        },
        xaxis: {
          categories: [
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021
          ]
        },
        toolbar: {
          show: false
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
      series: [
        /**
         * Data source:
         * https://databank.worldbank.org/
         */
        {
          name: 'CHN (China)',
          data: [
            7.86,
            7.76,
            7.42,
            7.04,
            6.84,
            6.94,
            6.74,
            5.95,
            2.23,
            8.10
          ]
        },
        {
          name: 'USA (United States)',
          data: [
            2.28,
            1.84,
            2.28,
            2.70,
            1.66,
            2.25,
            2.91,
            2.28,
            -3.4,
            5.67
          ]
        }
      ]
    }
  }
})
</script>
