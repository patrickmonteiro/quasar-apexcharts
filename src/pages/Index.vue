<template>
  <q-page class="container" style="background: #343E59;">
    <div class="row q-col-gutter-sm q-pt-sm">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column></apex-column>
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
    </div>
  </q-page>
</template>

<script>
import ApexColumn from 'components/ApexColumn'
import ApexDonut from 'components/ApexDonut'
import ApexLine from 'components/ApexLine'
import ApexHeatmap from 'components/ApexHeatmap'
import ApexMultipleRadialBars from 'components/ApexMultipleRadialBars'
import ApexRadialBar from 'components/ApexRadialBar'
import ApexBubble from 'components/ApexBubble'
import ApexRadar from 'components/ApexRadar'
export default {
  name: 'PageIndex',
  components: {
    ApexColumn,
    ApexDonut,
    ApexLine,
    ApexMultipleRadialBars,
    ApexHeatmap,
    ApexRadialBar,
    ApexBubble,
    ApexRadar
  }
}
</script>
