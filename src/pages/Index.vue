<template>
  <q-page class="">
    <div class="column justify-center window-height">
      <div class="col-4 self-center text-center" >
         <!-- <img
          alt="Quasar logo"
          src="/analysis.svg"
          style="width: 300px"
        > -->
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_q5qeoo3q.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="col-4">
          <p class="text-h3 text-white text-weight-bold full-width text-center">
            Quasar ApexCharts
          </p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped>
.pink-custom {
  color: #D705DC;
}
</style>
