<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-column />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexColumn = defineAsyncComponent(() =>
  import('components/charts/ApexColumn.vue')
)

export default defineComponent({
  name: 'ColumnCharts',
  components: {
    ApexColumn
  }
})
</script>
