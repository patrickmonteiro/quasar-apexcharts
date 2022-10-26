<template>
  <apexchart height="300" type="bubble" :options="options" :series="series"></apexchart>
</template>

<script>
import { defineComponent } from 'vue'
import { getCssVar } from 'quasar'

export default defineComponent({
  name: 'ApexBubble',
  data () {
    return {
      options: {
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8
        },
        yaxis: {
          max: 70
        },
        title: {
          text: 'ApexBubble',
          align: 'left'
        },
        chart: {
          height: 300,
          type: 'area'
        },
        colors: [getCssVar('primary'), getCssVar('secondary'), getCssVar('negative')],
        // markers: {
        //   size: 4,
        //   hover: {
        //     sizeOffset: 6
        //   }
        // },
        xaxis: {
          tickAmount: 12,
          type: 'category'
        }
      },
      series: [{
        name: 'Bubble1',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble2',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble3',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble4',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }]
    }
  },
  methods: {
    generateData (baseval, count, yrange) {
      let i = 0
      const series = []
      while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

        series.push([x, y, z])
        baseval += 86400000
        i++
      }
      return series
    }
  }
})
</script>
