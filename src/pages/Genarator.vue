<template>
  <q-page padding>
    <div class="row">
      <q-select
        class="col-4"
        label-color="purple-2"
        color="purple-2"
        dark
        outlined
        v-model="typeChart"
        :options="options"
        label="Tipo de Gráfico"
      />
    </div>
    <div class="row q-pt-sm" v-if="!!typeChart">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-generic-chart
          title="Chart Generator"
          :dataChart="data"
          :typeChart="typeChart"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import ApexGenericChart from 'components/ApexGenericChart'
export default {
  name: 'PageIndex',
  components: {
    ApexGenericChart
  },
  data () {
    return {
      typeChart: '',
      options: [
        'area', 'bar', 'line', 'heatmap', 'radar', 'polarArea'
      ],
      data: [56, 87, 10, 87]
    }
  }
}
</script>
