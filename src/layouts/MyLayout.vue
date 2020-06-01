<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="shadow-8">
      <q-toolbar class="bg-custom-blue-dark">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="fas fa-bars" />
        </q-btn>

        <q-toolbar-title>
          Quasar + ApexCharts
        </q-toolbar-title>

        <q-btn
          style="background: #36384c"
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fas fa-compress' : 'fas fa-expand'"
        />
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-custom-blue-dark"
      :breakpoint="400"
      overlay
      elevated
      behavior="mobile"
    >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px;">
      <q-list class="text-white" >
        <q-item-label header>Menu</q-item-label>
        <q-item clickable to="/" exact active-class="text-purple-3">
          <q-item-section avatar>
            <q-icon name="fas fa-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/dashboard" exact active-class="text-purple-3">
          <q-item-section avatar>
            <q-icon name="fas fa-chart-bar" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/patrickmonteiro/quasar-apexcharts">
          <q-item-section avatar>
            <q-icon name="fab fa-github" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github do Projeto</q-item-label>
            <q-item-label class="text-white" caption>Repositório com o código fonte</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
      <q-img class="absolute-top" src="statics/fundo-menu.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="statics/patrick_perfil.png">
            </q-avatar>
            <div class="text-weight-bold">Patrick Monteiro</div>
            <div class="q-gutter-sm">
              <q-btn dense color="white" text-color="primary" round size="sm" icon="fab fa-github"
              type="a" href="https://github.com/patrickmonteiro" target="_blank" />
              <q-btn dense color="white" text-color="primary" round size="sm" icon="fab fa-linkedin-in"
              type="a" href="https://www.linkedin.com/in/engpatrickmonteiro/" target="_blank" />
              <q-btn dense color="white" text-color="primary" round size="sm" icon="fab fa-twitter"
              type="a" href="https://twitter.com/monteiropatrick" target="_blank" />
            </div>
          </div>
        </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
.bg-custom-blue-dark {
  background: #2B2D3E;
}
</style>
