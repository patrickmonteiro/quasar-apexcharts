<template>
  <apexchart height="300" type="bar" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'BiggestCompanies',

  data () {
    return {
      options: {
        title: {
          text: '7 Biggest Companies in 2022 (The Global 2000 - Forbes)',
          align: 'left'
        },
        chart: {
          id: 'biggest-companies',
          stacked: true
        },
        xaxis: {
          categories: [
            'Berkshire Hathaway',
            'ICBC',
            'Saudi Aramco',
            'JPMorgan Chase',
            'China Construction Bank',
            'Amazon',
            'Apple'
          ]
        },
        yaxis: {
          title: {
            text: 'USD (billions)'
          }
        },
        colors: [
          getCssVar('positive'),
          getCssVar('info'),
          getCssVar('primary'),
          getCssVar('accent')
        ],
        legend: {
          position: 'right',
          offsetY: 40
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '75%',
            endingShape: 'rounded'
          }
        }
      },
      series: [
        /**
         * Data source:
         * https://www.forbes.com/lists/global2000/?sh=5e725ae65ac0
         */
        {
          name: 'Sales',
          data: [276.09, 208.13, 400.38, 124.54, 202.07, 469.82, 378.7]
        },
        {
          name: 'Profit',
          data: [89.8, 54.03, 105.36, 42.12, 46.89, 33.36, 100.56]
        },
        {
          name: 'Assets',
          data: [958.78, 5518.51, 576.04, 3954.69, 4746.95, 420.55, 381.19]
        },
        {
          name: 'Market value',
          data: [741.48, 214.43, 2292.08, 374.45, 181.32, 1468.4, 2640.32]
        }
      ]
    }
  }
})
</script>
