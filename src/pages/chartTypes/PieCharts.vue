<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <population-by-continent />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const PopulationByContinent = defineAsyncComponent(() =>
  import('src/components/charts/pie/PopulationByContinent.vue')
)

export default defineComponent({
  name: 'PieCharts',
  components: {
    PopulationByContinent
  }
})
</script>
