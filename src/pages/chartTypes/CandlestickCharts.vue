<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-candlestick />
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

export default defineComponent({
  name: 'CandlestickCharts',
  components: {
    ApexCandlestick
  }
})
</script>
