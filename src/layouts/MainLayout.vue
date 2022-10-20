<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="no-wrap">
        <div class="col row">
          <q-btn
            flat dense round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title>
            Quasar ApexCharts
          </q-toolbar-title>
        </div>

        <div class="col row justify-center">
          <LangSwitch class="" />
        </div>

        <div class="col row justify-end">Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      dark
      class="bg-primary scrollbar"
    >
      <DrawerNavbar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

import DrawerNavbar from 'src/components/Navbar.vue'
import LangSwitch from 'src/components/LangSwitch.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    DrawerNavbar,
    LangSwitch
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
