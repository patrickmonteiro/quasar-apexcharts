<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-area />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexArea = defineAsyncComponent(() =>
  import('src/components/charts/area/ApexArea.vue')
)

export default defineComponent({
  name: 'AreaCharts',
  components: {
    ApexArea
  }
})
</script>
