<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-column />
        </q-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <q-card>
          <biggest-companies />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexColumn = defineAsyncComponent(() =>
  import('src/components/charts/column/ApexColumn.vue')
)

const BiggestCompanies = defineAsyncComponent(() =>
  import('src/components/charts/column/BiggestCompanies.vue')
)

export default defineComponent({
  name: 'ColumnCharts',
  components: {
    ApexColumn,
    BiggestCompanies
  }
})
</script>
