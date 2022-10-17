
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'allCharts',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/bar-charts',
        name: 'barCharts',
        component: () => import('pages/chartTypes/BarCharts.vue')
      },
      {
        path: '/bubble-charts',
        name: 'bubbleCharts',
        component: () => import('pages/chartTypes/BubbleCharts.vue')
      },
      {
        path: '/candlestick-charts',
        name: 'candlestickCharts',
        component: () => import('pages/chartTypes/CandlestickCharts.vue')
      },
      {
        path: '/column-charts',
        name: 'columnCharts',
        component: () => import('pages/chartTypes/ColumnCharts.vue')
      },
      {
        path: '/donut-charts',
        name: 'donutCharts',
        component: () => import('pages/chartTypes/DonutCharts.vue')
      },
      {
        path: '/heatmap-charts',
        name: 'heatmapCharts',
        component: () => import('pages/chartTypes/HeatmapCharts.vue')
      },
      {
        path: '/line-charts',
        name: 'lineCharts',
        component: () => import('pages/chartTypes/LineCharts.vue')
      },
      {
        path: '/polar-area-charts',
        name: 'polarAreaCharts',
        component: () => import('pages/chartTypes/PolarAreaCharts.vue')
      },
      {
        path: '/radial-bar-charts',
        name: 'radialBarCharts',
        component: () => import('pages/chartTypes/RadialBarCharts.vue')
      },
      {
        path: '/scatter-charts',
        name: 'scatterCharts',
        component: () => import('pages/chartTypes/ScatterCharts.vue')
      }
      // Precisa de ajustes, está com problema na renderização
      // {
      //   path: '/timeline-charts',
      //   name: 'timelineCharts',
      //   component: () => import('pages/chartTypes/TimelineCharts.vue')
      // }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
