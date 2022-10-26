<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-heatmap />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexHeatmap = defineAsyncComponent(() =>
  import('src/components/charts/heatmap/ApexHeatmap.vue')
)

export default defineComponent({
  name: 'HeatmapCharts',
  components: {
    ApexHeatmap
  }
})
</script>
