<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-bar />
        </q-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <q-card>
          <biggest-libraries />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexBar = defineAsyncComponent(() =>
  import('src/components/charts/bar/ApexBar.vue')
)

const BiggestLibraries = defineAsyncComponent(() =>
  import('src/components/charts/bar/BiggestLibraries.vue')
)

export default defineComponent({
  name: 'BarCharts',
  components: {
    ApexBar,
    BiggestLibraries
  }
})
</script>
