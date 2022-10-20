<template>
  <q-list>
    <q-item-label
      header
    >
      {{ $t('sidebar.section_charts') }}
    </q-item-label>

    <RouterLink
      route="/"
      icon="select_all"
      :title="$t('sidebar.charts_all')"
    />

    <RouterLink
      route="/area-charts"
      icon="area_chart"
      :title="$t('sidebar.charts_area')"
    />

    <RouterLink
      route="/bar-charts"
      icon="table_rows"
      :title="$t('sidebar.charts_bar')"
    />

    <RouterLink
      route="/bubble-charts"
      icon="bubble_chart"
      :title="$t('sidebar.charts_bubble')"
    />

    <RouterLink
      route="/candlestick-charts"
      icon="waterfall_chart"
      :title="$t('sidebar.charts_candlestick')"
    />

    <RouterLink
      route="/column-charts"
      icon="leaderboard"
      :title="$t('sidebar.charts_column')"
    />

    <RouterLink
      route="/donut-charts"
      icon="donut_small"
      :title="$t('sidebar.charts_donut')"
    />

    <RouterLink
      route="/heatmap-charts"
      icon="view_comfy"
      :title="$t('sidebar.charts_heatmap')"
    />

    <RouterLink
      route="/line-charts"
      icon="show_chart"
      :title="$t('sidebar.charts_line')"
    />

    <RouterLink
      route="/polar-area-charts"
      icon="track_changes"
      :title="$t('sidebar.charts_polarArea')"
    />

    <RouterLink
      route="/radial-bar-charts"
      icon="data_saver_off"
      :title="$t('sidebar.charts_radialBar')"
    />

    <RouterLink
      route="/scatter-charts"
      icon="scatter_plot"
      :title="$t('sidebar.charts_scatterPlot')"
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
      {{ $t('sidebar.section_moreAboutQuasar') }}
    </q-item-label>

    <ExternalLink
      v-for="link in quasarLinks"
      :key="link.title"
      v-bind="link"
    />
  </q-list>
</template>

<script>
import { defineComponent, ref } from 'vue'

import ExternalLink from 'src/components/ExternalLink.vue'
import RouterLink from 'src/components/RouterLink.vue'

export default defineComponent({
  name: 'DrawerNavbar',

  components: {
    ExternalLink,
    RouterLink
  },

  setup () {
    const quasarLinks = ref([
      {
        title: 'sidebar.link_docs',
        caption: 'sidebar.linkCaption_docs',
        icon: 'school',
        link: 'https://quasar.dev'
      },
      {
        title: 'sidebar.link_github',
        caption: 'sidebar.linkCaption_github',
        icon: 'code',
        link: 'https://github.com/quasarframework'
      },
      {
        title: 'sidebar.link_discord',
        caption: 'sidebar.linkCaption_discord',
        icon: 'chat',
        link: 'https://chat.quasar.dev'
      },
      {
        title: 'sidebar.link_forum',
        caption: 'sidebar.linkCaption_forum',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev'
      },
      {
        title: 'sidebar.link_twitter',
        caption: 'sidebar.linkCaption_twitter',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev'
      },
      {
        title: 'sidebar.link_facebook',
        caption: 'sidebar.linkCaption_facebook',
        icon: 'public',
        link: 'https://facebook.quasar.dev'
      },
      {
        title: 'sidebar.link_quasarAwesome',
        caption: 'sidebar.linkCaption_quasarAwesome',
        icon: 'favorite',
        link: 'https://awesome.quasar.dev'
      }
    ])

    return {
      quasarLinks
    }
  }
})
</script>
