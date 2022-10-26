<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-bubble />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexBubble = defineAsyncComponent(() =>
  import('src/components/charts/bubble/ApexBubble.vue')
)

export default defineComponent({
  name: 'BubbleCharts',
  components: {
    ApexBubble
  }
})
</script>
