<template>
  <div id="main" style="height: 100%;width:100%" ref='cal_chart'></div>
</template>

<script>
  export default {
    name: 'Calendar',
    watch: {
      pdata: function (val, oval) {
        this.initChart()
      }
    },
    props: {
      pdata: {
        type: Object
      },
      name: {
        type: String,
        default: 'AQI'
      },
      range: {
        type: Array,
        default: function () {
          return ['2013-01-01', '2013-12-31']
        }
      },
    },
    data () {
      return {
        myChart: '',
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.initChart()
      })
    },
    methods: {
      initChart () {
        if (this.myChart != null && this.myChart != "" && this.myChart != undefined){
          this.myChart.dispose();
        }
        this.myChart = this.$echarts.init(this.$refs.cal_chart)
        let option;
        // 计算各个污染的程度
        let calendar1 = function (data) {
          let pre_data = []
          for (let i = 0; i < data.length; i++) {
            if (data[i][1] >= 0 && data[i][1] <= 50) {
              pre_data.push(data[i])
            }
          }
          return pre_data
        }

        let calendar2 = function (data) {
          let pre_data = []
          for (let i = 0; i < data.length; i++) {
            if (data[i][1] > 50 && data[i][1] <= 100) {
              pre_data.push(data[i])
            }
          }
          return pre_data
        }

        let calendar3 = function (data) {
          let pre_data = []
          for (let i = 0; i < data.length; i++) {
            if (data[i][1] > 100 && data[i][1] <= 150) {
              pre_data.push(data[i])
            }
          }
          return pre_data
        }

        let calendar4 = function (data) {
          let pre_data = []
          for (let i = 0; i < data.length; i++) {
            if (data[i][1] > 150 && data[i][1] <= 200) {
              pre_data.push(data[i])
            }
          }
          return pre_data
        }

        let calendar5 = function (data) {
          let pre_data = []
          for (let i = 0; i < data.length; i++) {
            if (data[i][1] > 200 && data[i][1] <= 300) {
              pre_data.push(data[i])
            }
          }
          return pre_data
        }

        let calendar6 = function (data) {
          let pre_data = []
          for (let i = 0; i < data.length; i++) {
            if (data[i][1] >300) {
              pre_data.push(data[i])
            }
          }
          return pre_data
        }
        option = {
          tooltip: {
            position: 'top'
          },
          calendar: [{
            top: 40,
            left: 'center',
            range: this.range,
            cellSize: [20, 22],
            splitLine: {
              show: true,
              lineStyle: {
                color: '#1F3C80',
                width: 4,
                type: 'solid'
              }
            },
            yearLabel: {
              show: false,
            },
            monthLabel: {
              color: '#fff'
            },
            dayLabel: {
              color: '#fff'
            },
            itemStyle: {
              color: '#051252',
              borderWidth: 1,
              borderColor: '#192D5E'
            }
          }],
          series: [
            {
              // name: 'AQI',
              type: 'scatter',
              coordinateSystem: 'calendar',
              data: this.pdata.calData,
              symbolSize: function (val) {
                return val[1] / 15;
              },
              itemStyle: {
                color: '#ddb926'
              }
            },
            {
              name: '优',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              data: calendar1(this.pdata.calData),
              symbolSize: function (val) {
                return val[1] / 15;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                color: '#0FD162',
                shadowBlur: 10,
                shadowColor: '#192D5E'
              },
              zlevel: 1
            },
            {
              name: '良',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              data: calendar2(this.pdata.calData),
              symbolSize: function (val) {
                return val[1] / 15;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                color: '#3650CB',
                shadowBlur: 10,
                shadowColor: '#192D5E'
              },
              zlevel: 1
            },
            {
              name: '轻度污染',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              data: calendar3(this.pdata.calData),
              symbolSize: function (val) {
                return val[1] / 15;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                color: '#AAB452',
                shadowBlur: 10,
                shadowColor: '#192D5E'
              },
              zlevel: 1
            },
            {
              name: '中度污染',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              data: calendar4(this.pdata.calData),
              symbolSize: function (val) {
                return val[1] / 15;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                color: '#C467CB',
                shadowBlur: 10,
                shadowColor: '#192D5E'
              },
              zlevel: 1
            },
            {
              name: '重度污染',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              data: calendar5(this.pdata.calData),
              symbolSize: function (val) {
                return val[1] / 15;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                color: '#D8B96A',
                shadowBlur: 10,
                shadowColor: '#192D5E'
              },
              zlevel: 1
            },
            {
              name: '严重污染',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              data: calendar6(this.pdata.calData),
              symbolSize: function (val) {
                return val[1] / 15;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                color: 'red',
                shadowBlur: 10,
                shadowColor: '#192D5E'
              },
              zlevel: 1
            }

          ]
        };

        this.myChart.setOption(option)
        this.myChart.on('click', data => {
          let date = data.data[0]
          // console.log(date.slice(5,7));
          let month = date.slice(5,7)
          this.$emit('emitMonth',month)
        })

      }
    }
  }
</script>

<style scoped>

</style>
