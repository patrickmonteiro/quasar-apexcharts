<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-line />
        </q-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <q-card>
          <gdp-china-usa />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

import GdpChinaUsa from 'src/components/charts/line/GdpChinaUsa.vue'

const ApexLine = defineAsyncComponent(() =>
  import('src/components/charts/line/ApexLine.vue')
)

export default defineComponent({
  name: 'LineCharts',
  components: {
    ApexLine,
    GdpChinaUsa
  }
})
</script>
