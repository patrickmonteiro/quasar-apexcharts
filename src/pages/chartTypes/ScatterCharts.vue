<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-scatter />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexScatter = defineAsyncComponent(() =>
  import('components/charts/ApexScatter.vue')
)

export default defineComponent({
  name: 'ScatterCharts',
  components: {
    ApexScatter
  }
})
</script>
