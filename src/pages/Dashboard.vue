<template>
  <q-page class="container" style="background: #343E59;">
    <div
      class="row q-col-gutter-md q-px-md q-pt-md justify-center"
      key="lineSmall"
    >
      <div class="col-md-3" v-for="i in 4" :key="i">
        <apex-line-small :bgColorCard="colors[i - 1]"></apex-line-small>
      </div>
    </div>
    <div
      class="row q-col-gutter-md q-px-md q-py-md"
      key="allCharts"
    >
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-column></apex-column>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column-with-scroll></apex-column-with-scroll>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-donut></apex-donut>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-line></apex-line>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-line-gradient></apex-line-gradient>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-multiple-radial-bars></apex-multiple-radial-bars>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-heatmap></apex-heatmap>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-radial-bar></apex-radial-bar>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-bubble></apex-bubble>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-radar></apex-radar>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-polar-map></apex-polar-map>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-candle-stick></apex-candle-stick>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-treemap></apex-treemap>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-line-column></apex-line-column>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line-column-with-scroll></apex-line-column-with-scroll>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-line-scatter></apex-line-scatter>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-area></apex-area>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-bar-charts-grouped></apex-bar-charts-grouped>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-column-charts-basic></apex-column-charts-basic>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-column-with-data-labels></apex-column-with-data-labels>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-line-with-data-labels></apex-line-with-data-labels>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-multiple-yaxis></apex-multiple-yaxis>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-simple-pie-chart></apex-simple-pie-chart>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-stacked-columns-100></apex-stacked-columns-100>
        </card-base>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'PageIndex',
  components: {
    CardBase,
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
      dialog: true,
      colors: [
        'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
        'linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)',
        'linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%)',
        'linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%)'
      ]
    }
  },
  mounted () {
    this.$q.loading.show({
      backgroundColor: 'purple-10',
      delay: 0
    })
    setTimeout(() => {
      this.$q.loading.hide()
    }, 1300)
  }
}
</script>
