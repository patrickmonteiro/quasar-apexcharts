<template>
  <q-list id="qa-navbar">
    <RouterLink
      route="/"
      icon="home"
      :title="$t('sidebar.home')"
    />

    <q-item-label
      header
    >
      {{ $t('sidebar.section_charts') }}
    </q-item-label>

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
      route="/pie-charts"
      icon="incomplete_circle"
      :title="$t('sidebar.charts_pie')"
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

    <RouterLink
      route="/all-charts"
      icon="shape_line"
      :title="$t('sidebar.charts_all')"
    />

    <q-item-label
      header
    >
      {{ $t('sidebar.section_moreAboutApexCharts') }}
    </q-item-label>

    <ExternalLink
      v-for="link in apexChartsLinks"
      :key="link.title"
      v-bind="link"
    />

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

    <q-item-label
      header
    >
      {{ $t('sidebar.section_moreAboutVue') }}
    </q-item-label>

    <ExternalLink
      v-for="link in vueLinks"
      :key="link.title"
      v-bind="link"
    />
  </q-list>
</template>

<script>
import { defineComponent } from 'vue'

import ExternalLink from 'src/components/ExternalLink.vue'
import RouterLink from 'src/components/RouterLink.vue'

export default defineComponent({
  name: 'DrawerNavbar',

  components: {
    ExternalLink,
    RouterLink
  },

  setup () {
    const apexChartsLinks = [
      {
        title: 'sidebar.link_apexChartSite',
        caption: 'sidebar.linkCaption_apexChartSite',
        icon: 'home_filled',
        link: 'https://apexcharts.com'
      },
      {
        title: 'sidebar.link_apexChartDocs',
        caption: 'sidebar.linkCaption_apexChartDocs',
        icon: 'school',
        link: 'https://apexcharts.com/docs/installation/'
      },
      {
        title: 'sidebar.link_apexChartGithub',
        caption: 'sidebar.linkCaption_apexChartGithub',
        icon: 'code',
        link: 'https://github.com/apexcharts'
      }
    ]

    const quasarLinks = [
      {
        title: 'sidebar.link_quasarDocs',
        caption: 'sidebar.linkCaption_quasarDocs',
        icon: 'school',
        link: 'https://quasar.dev'
      },
      {
        title: 'sidebar.link_quasarGithub',
        caption: 'sidebar.linkCaption_quasarGithub',
        icon: 'code',
        link: 'https://github.com/quasarframework'
      },
      {
        title: 'sidebar.link_quasarDiscord',
        caption: 'sidebar.linkCaption_quasarDiscord',
        icon: 'question_answer',
        link: 'https://chat.quasar.dev'
      },
      {
        title: 'sidebar.link_quasarForum',
        caption: 'sidebar.linkCaption_quasarForum',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev'
      },
      {
        title: 'sidebar.link_quasarTwitter',
        caption: 'sidebar.linkCaption_quasarTwitter',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev'
      },
      {
        title: 'sidebar.link_quasarFacebook',
        caption: 'sidebar.linkCaption_quasarFacebook',
        icon: 'public',
        link: 'https://facebook.quasar.dev'
      },
      {
        title: 'sidebar.link_quasarAwesome',
        caption: 'sidebar.linkCaption_quasarAwesome',
        icon: 'favorite',
        link: 'https://awesome.quasar.dev'
      }
    ]

    const vueLinks = [
      {
        title: 'sidebar.link_vueSite',
        caption: 'sidebar.linkCaption_vueSite',
        icon: 'home_filled',
        link: 'https://vuejs.org/'
      },
      {
        title: 'sidebar.link_vueDocs',
        caption: 'sidebar.linkCaption_vueDocs',
        icon: 'school',
        link: 'https://vuejs.org/guide/introduction.html'
      },
      {
        title: 'sidebar.link_vueGithub',
        caption: 'sidebar.linkCaption_vueGithub',
        icon: 'code',
        link: 'https://github.com/vuejs/'
      },
      {
        title: 'sidebar.link_vueDiscord',
        caption: 'sidebar.linkCaption_vueDiscord',
        icon: 'question_answer',
        link: 'https://discord.com/invite/HBherRA'
      },
      {
        title: 'sidebar.link_vueTwitter',
        caption: 'sidebar.linkCaption_vueTwitter',
        icon: 'rss_feed',
        link: 'https://twitter.com/vuejs'
      }
    ]

    return {
      apexChartsLinks,
      quasarLinks,
      vueLinks
    }
  }
})
</script>
