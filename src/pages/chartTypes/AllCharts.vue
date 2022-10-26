<template>
  <q-page padding>
    <p class="q-mb-lg text-body2">{{ $t('presentation.showingOneOfEach') }}</p>

    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-column />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-bar />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-line />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card class="fit">
          <apex-donut />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-candlestick />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-area />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-bubble />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card class="fit">
          <apex-radial-bar style="padding-top: 4rem" />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card class="fit">
          <apex-pie style="padding-top: 4rem" />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card class="fit">
          <apex-polar-area />
        </q-card>
      </div>
       <div class="col-md-6 col-xs-12">
        <q-card class="fit">
          <apex-heatmap />
        </q-card>
      </div>
      <!-- Precisa de ajustes, está com problema na renderização -->
      <!-- <div class="col-md-6 col-xs-12">
        <q-card class="fit">
          <apex-timeline />
        </q-card>
      </div> -->
      <div class="col-md-6 col-xs-12">
        <q-card class="fit">
          <apex-scatter />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
const ApexBar = defineAsyncComponent(() =>
  import('src/components/charts/bar/ApexBar.vue')
)
const ApexColumn = defineAsyncComponent(() =>
  import('src/components/charts/column/ApexColumn.vue')
)
const ApexLine = defineAsyncComponent(() =>
  import('src/components/charts/line/ApexLine.vue')
)
const ApexDonut = defineAsyncComponent(() =>
  import('src/components/charts/donut/ApexDonut.vue')
)
const ApexCandlestick = defineAsyncComponent(() =>
  import('src/components/charts/candlestick/ApexCandlestick.vue')
)
const ApexArea = defineAsyncComponent(() =>
  import('src/components/charts/area/ApexArea.vue')
)
const ApexBubble = defineAsyncComponent(() =>
  import('src/components/charts/bubble/ApexBubble.vue')
)
const ApexRadialBar = defineAsyncComponent(() =>
  import('src/components/charts/radialBar/ApexRadialBar.vue')
)

const ApexPie = defineAsyncComponent(() =>
  import('src/components/charts/pie/PopulationByContinent.vue')
)
const ApexPolarArea = defineAsyncComponent(() =>
  import('src/components/charts/polarArea/ApexPolarArea.vue')
)
// const ApexTimeline = defineAsyncComponent(() =>
//   import('components/charts/ApexTimeline.vue')
// )
const ApexScatter = defineAsyncComponent(() =>
  import('src/components/charts/scatterPlot/ApexScatter.vue')
)
const ApexHeatmap = defineAsyncComponent(() =>
  import('src/components/charts/heatmap/ApexHeatmap.vue')
)
export default defineComponent({
  name: 'AllCharts',
  components: {
    ApexBar,
    ApexLine,
    ApexColumn,
    ApexDonut,
    ApexCandlestick,
    ApexArea,
    ApexBubble,
    ApexRadialBar,
    ApexPie,
    ApexPolarArea,
    ApexScatter,
    ApexHeatmap
    // ApexTimeline
  }
})
</script>
