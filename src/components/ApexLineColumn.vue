<template>
  <apexchart type="line" height="230px" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexLineColumn',
  data () {
    return {
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      chartOptions: {
        title: {
          text: 'Line & Column',
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
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
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
