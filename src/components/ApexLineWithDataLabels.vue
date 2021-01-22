<template>
  <apexchart type="line" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'ApexLineWithDataLabels',
  data () {
    return {
      series: [{
        name: 'High - 2013',
        data: [28, 29, 33, 36, 32, 32, 33]
      }, {
        name: 'Low - 2013',
        data: [12, 11, 14, 50, 45, 13, 13]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Line with data labels',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Temperature'
          },
          labels: {
            style: {
              colors: '#fff'
            }
          },
          min: 5,
          max: 60
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
          labels: {
            colors: '#FFF'
          }
        }
      }
    }
  }
}
</script>
