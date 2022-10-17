<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-bar />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexBar = defineAsyncComponent(() =>
  import('components/charts/ApexBar.vue')
)

export default defineComponent({
  name: 'BarCharts',
  components: {
    ApexBar
  }
})
</script>
