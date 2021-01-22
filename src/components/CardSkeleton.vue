<template>
  <div class="row q-col-gutter-md">
    <div class="col-md-3" v-for="i in 4" :key="i">
      <!-- <card-base> -->
        <q-skeleton
            class="full-width"
            height="140px"
            style="background: #343E59;"
          />
      <!-- </card-base> -->
    </div>
    <div class="col-md-6 col-sm-12 col-xs-12" v-for="item in 6" :key="item">
      <!-- <card-base> -->
        <q-skeleton
          class="full-width"
          height="230px"
          style="background: #343E59;"
        />
      <!-- </card-base> -->
    </div>
  </div>
</template>

<script>
// import CardBase from 'components/CardBase'
export default {
  name: 'CardSkeleton',
  components: {
    // CardBase
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
