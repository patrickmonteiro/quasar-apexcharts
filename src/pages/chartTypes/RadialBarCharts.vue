<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-radial-bar />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexRadialBar = defineAsyncComponent(() =>
  import('components/charts/ApexRadialBar.vue')
)

export default defineComponent({
  name: 'RadialBarCharts',
  components: {
    ApexRadialBar
  }
})
</script>
