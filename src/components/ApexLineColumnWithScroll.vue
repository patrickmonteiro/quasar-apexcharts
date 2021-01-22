<template>
<q-scroll-area
      horizontal
      style="minHeight: 250px; height: 100%; width: 100%;"
      class="bg-grey-1 rounded-borders shadow-2"
    >
  <card-base >
    <div style="width: 1200px; min-height: 200px">
      <apexchart type="line" height="230px" :options="chartOptions" :series="series" />
    </div>
  </card-base>
  </q-scroll-area>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'ApexLineColumnWithScroll',
  components: {
    CardBase
  },
  data () {
    return {
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      chartOptions: {
        // colors: ['#FCCF31', '#17ead9', '#f02fc2'],
        title: {
          text: 'Line & Column With Scroll',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        stroke: {
          width: [0, 4]
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001', '13 Jan 2001', '14 Jan 2001', '15 Jan 2001', '16 Jan 2001', '17 Jan 2001', '18 Jan 2001', '19 Jan 2001', '20 Jan 2001', '21 Jan 2001', '22 Jan 2001', '23 Jan 2001', '24 Jan 2001'],
        legend: {
          labels: {
            colors: '#FFF'
          }
        },
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: [{
          title: {
            text: 'Website Blog',
            style: {
              color: '#FFF'
            }
          },
          labels: {
            style: {
              colors: '#fff'
            }
          }

        }, {
          opposite: true,
          labels: {
            style: {
              colors: '#fff'
            }
          },
          title: {
            text: 'Social Media',
            style: {
              color: '#FFF'
            }
          }
        }]
      }
    }
  }
}
</script>
