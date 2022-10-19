<template>
  <q-item
    clickable replace
    class="text-grey-1"
    exact-active-class="bg-secondary"
    :to="route"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    route: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
