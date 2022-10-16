<template>
  <apexchart
    height='300'
    type='heatmap'
    :options='options'
    :series='series'
  ></apexchart>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ApexHeatmap',
  data () {
    return {
      options: {
        chart: {
          height: 350,
          type: 'heatmap'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#008FFB'],
        title: {
          text: 'HeatMap Chart (Single color)'
        }
      },
      series: [
        {
          name: 'Metric1',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric2',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric3',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric4',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric5',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric6',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric7',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric8',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric9',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        }
      ]
    }
  },
  methods: {
    generateData (count, yrange) {
      let i = 0
      const series = []
      while (i < count) {
        const x = (i + 1).toString()
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        series.push({
          x: x,
          y: y
        })
        i++
      }
      return series
    }
  }
})
</script>
