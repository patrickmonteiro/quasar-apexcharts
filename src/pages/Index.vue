<template>
  <q-page padding>
    <div class="responsive-container-width q-mx-auto column">
      <h1 class="text-h3 self-center">{{ $t('presentation.title') }}</h1>

      <p class="text-body1 self-center q-mb-xl">
        {{ $t('presentation.subtitle') }}
      </p>

      <p class="text-body1">
        {{ $t('presentation.abstract') }}
      </p>

      <p class="text-body1">
        {{ $t('presentation.aboutApexCharts') }}
      </p>

      <p class="text-body1">
        {{ $t('presentation.aboutQuasar') }}
      </p>

      <p class="text-body1">
        {{ $t('presentation.checkOutMenus') }}
      </p>

      <p class="text-body1">
        {{ $t('presentation.checkOutExamples') }}
      </p>

    </div>

    <div class="row q-col-gutter-sm q-my-md">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-area />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-candlestick />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-bubble />
        </q-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <q-card class="fit">
          <apex-heatmap />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexCandlestick = defineAsyncComponent(() =>
  import('src/components/charts/candlestick/ApexCandlestick.vue')
)

const ApexArea = defineAsyncComponent(() =>
  import('src/components/charts/area/ApexArea.vue')
)

const ApexBubble = defineAsyncComponent(() =>
  import('src/components/charts/bubble/ApexBubble.vue')
)

const ApexHeatmap = defineAsyncComponent(() =>
  import('src/components/charts/heatmap/ApexHeatmap.vue')
)

export default defineComponent({
  name: 'PageIndex',
  components: {
    ApexCandlestick,
    ApexArea,
    ApexBubble,
    ApexHeatmap
  }
})
</script>
