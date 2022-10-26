<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-donut />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexDonut = defineAsyncComponent(() =>
  import('src/components/charts/donut/ApexDonut.vue')
)

export default defineComponent({
  name: 'DonutCharts',
  components: {
    ApexDonut
  }
})
</script>
