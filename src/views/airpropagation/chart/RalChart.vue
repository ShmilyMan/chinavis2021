<template>
  <div ref='ral_chart' style='height: 200px;width:400px;'></div>
</template>

<script>
  export default {
    name: "RalChart",
    data () {
      return {
        chartInstance: ''
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.initChart()
      })
    },
    methods: {
      initChart () {
        if (this.chartInstance != null && this.chartInstance != "" && this.chartInstance != undefined){
          this.chartInstance.dispose();
        }
        this.chartInstance = this.$echarts.init(this.$refs.ral_chart)

        var hours = ['PM2.5', 'PM10', 'SO2', 'CO', 'NO2', 'O3' ];

        var days = ['温度', '湿度', '风速'];

        var data = [
          [0, 0, 0.323],
          [0, 1, -0.282],
          [0, 2, 0.03],


          [1, 0, 0.492],
          [1, 1, -0.547],
          [1, 2, -0.012],


          [2, 0, 0.086],
          [2, 1, -0.495],
          [2, 2, 0.180],


          [3, 0, -0.213],
          [3, 1, 0.376],
          [3, 2, -0.229],


          [4, 0, 0.202],
          [4, 1, -0.439],
          [4, 2, -0.164],


          [5, 0, 0.581],
          [5, 1, -0.7],
          [5, 2, -0.083],
        ];
        let initOption = {
          tooltip: {
            position: 'top'
          },
          animation: false,
          grid: {
            height: '50%',
            top: '10%'
          },
          xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
              show: true
            },
            axisTick: {
              lineStyle: {
                color: '#c4c4c4'
              }
            }
          },
          yAxis: {
            type: 'category',
            data: days,
            splitArea: {
              show: true
            },
            axisTick: {
              show: false
            }
          },
          visualMap: {
            min: -1,
            max: 1,
            calculable: true,
            show: false,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%',
            color: ['#0d59b7', '#bee8ff']
          },
          series: [{
            name: '',
            type: 'heatmap',
            data: data,
            label: {
              show: true
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        }
        initOption && this.chartInstance.setOption(initOption);
      }
    }
  }
</script>

<style scoped>

</style>