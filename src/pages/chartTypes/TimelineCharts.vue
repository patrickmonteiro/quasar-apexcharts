<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-timeline />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexTimeline = defineAsyncComponent(() =>
  import('src/components/charts/timeline/ApexTimeline.vue')
)

export default defineComponent({
  name: 'TimelineCharts',
  components: {
    ApexTimeline
  }
})
</script>
