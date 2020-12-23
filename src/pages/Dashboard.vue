<template>
  <q-page class="container" style="background: #343E59;">
    <div class="row q-col-gutter-md q-px-md q-pt-md justify-center">
      <div class="col-md-3" v-for="i in 4" :key="i">
        <apex-line-small :bgColorCard="colors[i - 1]"></apex-line-small>
      </div>
    </div>
    <div class="row q-col-gutter-md q-px-md q-py-md">
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
import ApexColumn from 'components/ApexColumn'
import ApexArea from 'components/ApexArea'
import ApexDonut from 'components/ApexDonut'
import ApexLine from 'components/ApexLine'
import ApexHeatmap from 'components/ApexHeatmap'
import ApexMultipleRadialBars from 'components/ApexMultipleRadialBars'
import ApexRadialBar from 'components/ApexRadialBar'
import ApexBubble from 'components/ApexBubble'
import ApexRadar from 'components/ApexRadar'
import ApexCandleStick from 'components/ApexCandleStick'
import ApexLineSmall from 'components/ApexLineSmall'
import ApexPolarMap from 'components/ApexPolarMap'
import ApexLineColumn from 'components/ApexLineColumn'
import ApexTreemap from 'components/ApexTreemap'
import ApexLineScatter from 'components/ApexLineScatter'
import ApexBarChartsGrouped from 'components/ApexBarChartsGrouped'
import ApexColumnChartsBasic from 'components/ApexColumnChartsBasic'
import ApexColumnWithDataLabels from 'components/ApexColumnWithDataLabels'
import ApexColumnWithScroll from 'components/ApexColumnWithScroll'
import ApexLineColumnWithScroll from 'components/ApexLineColumnWithScroll'
import ApexLineWithDataLabels from 'components/ApexLineWithDataLabels'
import ApexMultipleYaxis from 'components/ApexMultipleYaxis'
import ApexSimplePieChart from 'components/ApexSimplePieChart'
import ApexStackedColumns100 from 'components/ApexStackedColumns100'
export default {
  name: 'PageIndex',
  components: {
    ApexColumn,
    ApexArea,
    ApexDonut,
    ApexLine,
    ApexMultipleRadialBars,
    ApexHeatmap,
    ApexRadialBar,
    ApexBubble,
    ApexRadar,
    ApexLineSmall,
    ApexPolarMap,
    ApexCandleStick,
    ApexLineColumn,
    ApexTreemap,
    ApexLineScatter,
    ApexBarChartsGrouped,
    ApexColumnChartsBasic,
    ApexColumnWithDataLabels,
    ApexColumnWithScroll,
    ApexLineColumnWithScroll,
    ApexLineWithDataLabels,
    ApexMultipleYaxis,
    ApexSimplePieChart,
    ApexStackedColumns100
  },
  data () {
    return {
      colors: [
        'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
        'linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)',
        'linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%)',
        'linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%)'
      ]
    }
  }
}
</script>
