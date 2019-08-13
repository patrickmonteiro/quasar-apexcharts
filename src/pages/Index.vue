<template>
  <q-page class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column></apex-column>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-donut></apex-donut>
      </div>
    </div>
  </q-page>
</template>

<script>
import ApexColumn from 'components/ApexColumn'
import ApexDonut from 'components/ApexDonut'
export default {
  name: 'PageIndex',
  components: {
    ApexColumn,
    ApexDonut
  }
}
</script>
