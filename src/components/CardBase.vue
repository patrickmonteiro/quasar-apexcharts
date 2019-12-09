<template>
  <q-card class="my-card" :style="{backgroundImage: bgColor}"  >
    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CardBase',
  props: {
    bgColor: {
      // default: '#2B2D3E'
      default: 'linear-gradient( 135deg, #343E59 10%, #2B2D3E 40%)'
    }
  }
}
</script>
