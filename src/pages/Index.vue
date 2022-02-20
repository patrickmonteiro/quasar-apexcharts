<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <apex-column />
      </div>
      <div class="col-md-6 col-xs-12">
        <apex-bar />
      </div>
      <div class="col-md-6 col-xs-12">
        <apex-line />
      </div>
      <div class="col-md-6 col-xs-12">
        <apex-donut />
      </div>
      <div class="col-md-6 col-xs-12">
        <apex-candlestick />
      </div>
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
  import('components/charts/Candlestick.vue')
)

export default defineComponent({
  name: 'PageIndex',
  components: {
    ApexBar,
    ApexLine,
    ApexColumn,
    ApexDonut,
    ApexCandlestick
  }
})
</script>
