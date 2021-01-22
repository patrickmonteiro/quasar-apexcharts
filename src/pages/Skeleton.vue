<template>
  <q-page>
    <card-skeleton />
  </q-page>
</template>

<script>

export default {
  name: 'SkeletonPage',
  components: {
    CardSkeleton: () => import('components/CardSkeleton')
  }
}
</script>
