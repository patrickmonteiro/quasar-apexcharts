<template>
  <q-page class="container" style="background: #343E59;">
    <card-skeleton
      v-if="loading"
    />
    <div
      v-if="!loading"
      class="row q-col-gutter-md q-px-md q-pt-md justify-center"
      key="lineSmall"
    >
      <div class="col-md-3" v-for="i in 4" :key="i">
        <apex-line-small :bgColorCard="colors[i - 1]"></apex-line-small>
      </div>
    </div>
    <div
      v-if="!loading"
      class="row q-col-gutter-md q-px-md q-py-md"
      key="allCharts"
    >
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column></apex-column>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column-with-scroll></apex-column-with-scroll>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-donut></apex-donut>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line></apex-line>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line-gradient></apex-line-gradient>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-multiple-radial-bars></apex-multiple-radial-bars>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-heatmap></apex-heatmap>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-radial-bar></apex-radial-bar>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-bubble></apex-bubble>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-radar></apex-radar>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-polar-map></apex-polar-map>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-candle-stick></apex-candle-stick>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-treemap></apex-treemap>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line-column></apex-line-column>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line-column-with-scroll></apex-line-column-with-scroll>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line-scatter></apex-line-scatter>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-area></apex-area>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-bar-charts-grouped></apex-bar-charts-grouped>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column-charts-basic></apex-column-charts-basic>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column-with-data-labels></apex-column-with-data-labels>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line-with-data-labels></apex-line-with-data-labels>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-multiple-yaxis></apex-multiple-yaxis>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-simple-pie-chart></apex-simple-pie-chart>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-stacked-columns-100></apex-stacked-columns-100>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardSkeleton from 'components/CardSkeleton'
export default {
  name: 'PageIndex',
  components: {
    CardSkeleton,
    ApexColumn: () => import('components/ApexColumn'),
    ApexColumnWithScroll: () => import('components/ApexColumnWithScroll'),
    ApexArea: () => import('components/ApexArea'),
    ApexDonut: () => import('components/ApexDonut'),
    ApexLine: () => import('components/ApexLine'),
    ApexLineGradient: () => import('components/ApexLineGradient'),
    ApexMultipleRadialBars: () => import('components/ApexMultipleRadialBars'),
    ApexHeatmap: () => import('components/ApexHeatmap'),
    ApexRadialBar: () => import('components/ApexRadialBar'),
    ApexBubble: () => import('components/ApexBubble'),
    ApexRadar: () => import('components/ApexRadar'),
    ApexLineSmall: () => import('components/ApexLineSmall'),
    ApexPolarMap: () => import('components/ApexPolarMap'),
    ApexCandleStick: () => import('components/ApexCandleStick'),
    ApexLineColumn: () => import('components/ApexLineColumn'),
    ApexTreemap: () => import('components/ApexTreemap'),
    ApexLineScatter: () => import('components/ApexLineScatter'),
    ApexBarChartsGrouped: () => import('components/ApexBarChartsGrouped'),
    ApexColumnChartsBasic: () => import('components/ApexColumnChartsBasic'),
    ApexColumnWithDataLabels: () => import('components/ApexColumnWithDataLabels'),
    ApexLineColumnWithScroll: () => import('components/ApexLineColumnWithScroll'),
    ApexLineWithDataLabels: () => import('components/ApexLineWithDataLabels'),
    ApexMultipleYaxis: () => import('components/ApexMultipleYaxis'),
    ApexSimplePieChart: () => import('components/ApexSimplePieChart'),
    ApexStackedColumns100: () => import('components/ApexStackedColumns100')
  },
  data () {
    return {
      loading: true,
      colors: [
        'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
        'linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)',
        'linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%)',
        'linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%)'
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  }
}
</script>
