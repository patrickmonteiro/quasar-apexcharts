<template>
  <q-page padding>
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
          <apex-polar-area />
        </q-card>
      </div>
      <!-- Precisa de ajustes, está com problema na renderização -->
      <!-- <div class="col-md-6 col-xs-12">
        <q-card class="fit">
          <apex-timeline />
        </q-card>
      </div> -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexBar = defineAsyncComponent(() =>
  import('src/components/charts/ApexBar.vue')
)

const ApexColumn = defineAsyncComponent(() =>
  import('components/charts/ApexColumn.vue')
)

const ApexLine = defineAsyncComponent(() =>
  import('components/charts/ApexLine.vue')
)

const ApexDonut = defineAsyncComponent(() =>
  import('components/charts/ApexDonut.vue')
)

const ApexCandlestick = defineAsyncComponent(() =>
  import('components/charts/ApexCandlestick.vue')
)

const ApexArea = defineAsyncComponent(() =>
  import('components/charts/ApexArea.vue')
)

const ApexBubble = defineAsyncComponent(() =>
  import('components/charts/ApexBubble.vue')
)

const ApexRadialBar = defineAsyncComponent(() =>
  import('components/charts/ApexRadialBar.vue')
)

const ApexPolarArea = defineAsyncComponent(() =>
  import('components/charts/ApexPolarArea.vue')
)

// const ApexTimeline = defineAsyncComponent(() =>
//   import('components/charts/ApexTimeline.vue')
// )

export default defineComponent({
  name: 'PageIndex',
  components: {
    ApexBar,
    ApexLine,
    ApexColumn,
    ApexDonut,
    ApexCandlestick,
    ApexArea,
    ApexBubble,
    ApexRadialBar,
    ApexPolarArea
    // ApexTimeline
  }
})
</script>
