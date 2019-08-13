<template>
  <q-page class="container bg-grey-10">
    <div class="row">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column></apex-column>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-donut></apex-donut>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line></apex-line>
      </div>
    </div>
  </q-page>
</template>

<script>
import ApexColumn from 'components/ApexColumn'
import ApexDonut from 'components/ApexDonut'
import ApexLine from 'components/ApexLine'
export default {
  name: 'PageIndex',
  components: {
    ApexColumn,
    ApexDonut,
    ApexLine
  }
}
</script>
