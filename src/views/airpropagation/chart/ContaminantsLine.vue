<template>
  <div className="barsytle" ref="linez_chart" style="height: 90%;width: 98%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ContaminantsLine',
  watch: {
    linedata: function (val, oval) {
      this.initChart()
    }
  },
  props: {
    linedata: {
      type: Object,
      default: function () {
        return {
          legendData: ['温度', '风速', '湿度','AQI'],
          tempData: [
            ['2013-01-01', 152],
            ['2013-01-02', 682],
            ['2013-01-03', 10],
            ['2013-01-04', 75],
            ['2013-01-05', 35],
            ['2013-01-06', 152],
            ['2013-01-07', 152],
            ['2013-01-08', 152],
            ['2013-01-09', 48],
            ['2013-01-10', 152],
            ['2013-01-11', 78],
            ['2013-01-12', 152],
            ['2013-01-13', 682],
            ['2013-01-14', 152],
            ['2013-01-15', 452],
            ['2013-01-16', 152],
            ['2013-01-17', 352],
            ['2013-01-18', 252],
            ['2013-01-19', 152],
            ['2013-01-20', 152],
            ['2013-01-21', 552],
            ['2013-01-22', 52],
            ['2013-01-23', 100],
            ['2013-01-24', 178]
          ],
          windSpeed: [
            ['2013-01-01', 5],
            ['2013-01-02', 8],
            ['2013-01-03', 3],
            ['2013-01-04', 15],
            ['2013-01-05', 25],
            ['2013-01-06', 5.2],
            ['2013-01-07', 3.6],
            ['2013-01-08', 7.8],
            ['2013-01-09', 5.8],
            ['2013-01-10', 26],
            ['2013-01-11', 14],
            ['2013-01-12', 12],
            ['2013-01-13', 16],
            ['2013-01-14', 15.2],
            ['2013-01-15', 22],
            ['2013-01-16', 12.5],
            ['2013-01-17', 12],
            ['2013-01-18', 25.2],
            ['2013-01-19', 15.2],
            ['2013-01-20', 15.2],
            ['2013-01-21', 5.52],
            ['2013-01-22', 5.2],
            ['2013-01-23', 10.0],
            ['2013-01-24', 17.8]
          ],
          humidity: [
            ['2013-01-01', 110],
            ['2013-01-02', 352],
            ['2013-01-03', 25],
            ['2013-01-04', 75],
            ['2013-01-05', 135],
            ['2013-01-06', 252],
            ['2013-01-07', 52],
            ['2013-01-08', 652],
            ['2013-01-09', 18],
            ['2013-01-10', 52],
            ['2013-01-11', 278],
            ['2013-01-12', 352],
            ['2013-01-13', 482],
            ['2013-01-14', 352],
            ['2013-01-15', 252],
            ['2013-01-16', 552],
            ['2013-01-17', 652],
            ['2013-01-18', 152],
            ['2013-01-19', 352],
            ['2013-01-20', 352],
            ['2013-01-21', 352],
            ['2013-01-22', 12],
            ['2013-01-23', 200],
            ['2013-01-24', 378]
          ],
          comData: [
            ['2013-01-01', 50],
            ['2013-01-02', 30],
            ['2013-01-03', 10],
            ['2013-01-04', 20],
            ['2013-01-05', 135],
            ['2013-01-06', 252],
            ['2013-01-07', 52],
            ['2013-01-08', 652],
            ['2013-01-09', 18],
            ['2013-01-10', 52],
            ['2013-01-11', 278],
            ['2013-01-12', 352],
            ['2013-01-13', 20],
            ['2013-01-14', 352],
            ['2013-01-15', 252],
            ['2013-01-16', 552],
            ['2013-01-17', 652],
            ['2013-01-18', 152],
            ['2013-01-19', 352],
            ['2013-01-20', 352],
            ['2013-01-21', 352],
            ['2013-01-22', 12],
            ['2013-01-23', 200],
            ['2013-01-24', 378]
          ]
        }
      }
    }
  },
  data() {
    return {
      chartInstance: ''
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.initChart()
    })
  },
  methods: {
    initChart() {
      if (this.chartInstance != null && this.chartInstance != "" && this.chartInstance != undefined){
        this.chartInstance.dispose();
      }
      this.chartInstance = this.$echarts.init(this.$refs.linez_chart)
      // 计算最小值和最大值
      // 最小值
      let getMin = function (datas) {
        let min = datas[0][1]
        for (let i = 0; i < datas.length; i++) {
          if (datas[i][1] < min) {
            min = datas[i][1]
          }
        }
        return min
      }
      // 最大值
      let getMax = function (datas) {
        let max = datas[0][1]
        for (let i = 0; i < datas.length; i++) {
          if (datas[i][1] > max) {
            max = datas[i][1]
          }
        }
        return max
      }

      // 将第四个值以一定比例缩小
      let scaleValue = function (data) {
        let result = []
        for (let i = 0; i < data.length; i++) {
          let temp = []
          temp.push(data[i][0])
          temp.push(parseFloat(data[i][1]  / 4.1).toFixed(2))
          result.push(temp)
        }
        return result
      }

      let getLastMax = () => {
        let num1 = getMax(this.linedata.tempData)
        let num2 = getMax(this.linedata.windSpeed)
        let num3 = getMax(this.linedata.humidity)
        let num4 = getMax(scaleValue(this.linedata.comData))
        return Math.max(num1,num2,num3,num4)
      }

      let getLastMin = () => {
        let num1 = getMin(this.linedata.tempData)
        let num2 = getMin(this.linedata.windSpeed)
        let num3 = getMin(this.linedata.humidity)
        let num4 = getMin(scaleValue(this.linedata.comData))
        return Math.min(num1,num2,num3,num4)
      }

      const initOption = {
        legend: {
          data: this.linedata.legendData,
          left: 60,
          top: 5,
          textStyle: { color: "#05B9EA" }
        },
        grid: {
          y: 5,
          height: 265
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'time',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',   //这里用参数代替了
            }
          }
        },
        yAxis: [
          {
            show: false,
            type: 'value',
            name: '温度',
            min: getLastMin(),
            max: getLastMax(),
            position: 'left',
            axisLine: {
              show: true
            },
            axisLabel: {
              formatter: '{value}'
            },
            splitLine:{show: false}
          },
          {
            show: false,
            type: 'value',
            name: '风速',
            min: getLastMin(),
            max: getLastMax(),
            position: 'right',
            axisLine: {
              show: true
            },
            axisLabel: {
              formatter: '{value}'
            },
            splitLine:{show: false}
          },
          {
            show: false,
            type: 'value',
            name: '湿度',
            min: getLastMin(),
            max: getLastMax(),
            offset: 40,
            position: 'right',
            axisLine: {
              show: true
            },
            axisLabel: {
              formatter: '{value}'
            },
            splitLine:{show: false}
          },
          {
            show: false,
            type: 'value',
            name: this.linedata.legendData[3],
            min: getLastMin(),
            max: getLastMax(),
            offset: 40,
            position: 'right',
            axisLine: {
              show: true
            },
            axisLabel: {
              formatter: '{value * 4}'
            },
            splitLine:{show: false}
          }
        ],
        series: [
          {
            name: '温度',
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 7,
            yAxisIndex: 0,
            // lineStyle: {
            //   color: '#315AC1'
            // },
            itemStyle: {
              normal: {
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,146,246,0.9)'
                  }]),
                }
              }
            },
            data: this.linedata.tempData
          },
          {
            name: '风速',
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 7,
            yAxisIndex: 1,
            // lineStyle: {
            //   color: '#62AFB7'
            // },
            itemStyle: {
              normal: {
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,212,199,0.9)'
                  }]),
                }
              }
            },
            data: this.linedata.windSpeed
          },
          {
            name: '湿度',
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 7,
            yAxisIndex: 2,
            // lineStyle: {
            //   color: '#B262B7'
            // },
            itemStyle: {
              normal: {
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(114,144,89,0.9)'
                  }]),
                }
              }
            },
            data: this.linedata.humidity
          },
          {
            name: this.linedata.legendData[3],
            type: 'line',
            // smooth: false,
            symbol: 'circle',
            symbolSize: 7,
            lineStyle: {
              color: '#E04B4B'
            },
            yAxisIndex: 2,
            itemStyle: {
              normal: {
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,46,101,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(224,75,75,0.9)'
                  }]),
                }
              }
            },
            data: scaleValue(this.linedata.comData)
          }
        ]
      }
      this.chartInstance.setOption(initOption)
    }
  }
}

</script>

<style scoped>

</style>
