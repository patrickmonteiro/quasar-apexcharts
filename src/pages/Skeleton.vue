<template>
  <!-- <q-page> -->
  <div style="background: linear-gradient( 135deg, #343E59 10%, #2B2D3E 40%)">
    <card-skeleton />
  </div>
  <!-- </q-page> -->
</template>

<script>

export default {
  name: 'SkeletonPage',
  components: {
    CardSkeleton: () => import('components/CardSkeleton')
  }
}
</script>
