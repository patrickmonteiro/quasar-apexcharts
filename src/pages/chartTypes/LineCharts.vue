<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-line />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexLine = defineAsyncComponent(() =>
  import('components/charts/ApexLine.vue')
)

export default defineComponent({
  name: 'LineCharts',
  components: {
    ApexLine
  }
})
</script>
