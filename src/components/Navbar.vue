<template>
  <q-list>
    <q-item-label
      header
    >
      Charts
    </q-item-label>

    <RouterLink
      route="/"
      title="All"
      icon="select_all"
    />

    <RouterLink
      route="/bar-charts"
      title="Bar charts"
      icon="table_rows"
    />

    <RouterLink
      route="/bubble-charts"
      title="Bubble charts"
      icon="bubble_chart"
    />

    <RouterLink
      route="/candlestick-charts"
      title="Candlestick charts"
      icon="waterfall_chart"
    />

    <RouterLink
      route="/column-charts"
      title="Column charts"
      icon="leaderboard"
    />

    <RouterLink
      route="/donut-charts"
      title="Donut charts"
      icon="donut_small"
    />

    <RouterLink
      route="/heatmap-charts"
      title="Heatmap charts"
      icon="view_comfy"
    />

    <RouterLink
      route="/line-charts"
      title="Line charts"
      icon="show_chart"
    />

    <RouterLink
      route="/polar-area-charts"
      title="Polar Area charts"
      icon="track_changes"
    />

    <RouterLink
      route="/radial-bar-charts"
      title="Radial bar charts"
      icon="data_saver_off"
    />

    <RouterLink
      route="/scatter-charts"
      title="Scatter charts"
      icon="scatter_plot"
    />

    <!-- Precisa de ajustes, está com problema na renderização -->
    <!-- <RouterLink
      route="/timeline-charts"
      title="Timeline charts"
      icon="timeline"
    /> -->

    <q-item-label
      header
    >
      More about Quasar
    </q-item-label>

    <ExternalLink
      v-for="link in quasarLinks"
      :key="link.title"
      v-bind="link"
    />
  </q-list>
</template>

<script>
import ExternalLink from 'src/components/ExternalLink.vue'
import RouterLink from 'src/components/RouterLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DrawerNavbar',

  components: {
    ExternalLink,
    RouterLink
  },

  setup () {
    return {
      quasarLinks: linksList
    }
  }
})
</script>
