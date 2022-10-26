<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-polar-area />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexPolarArea = defineAsyncComponent(() =>
  import('src/components/charts/polarArea/ApexPolarArea.vue')
)

export default defineComponent({
  name: 'PolarAreaCharts',
  components: {
    ApexPolarArea
  }
})
</script>
