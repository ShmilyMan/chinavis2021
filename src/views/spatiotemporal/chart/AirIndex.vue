<template>
  <div class="barsytle" ref="linez_chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: 'AirIndex',
  data () {
    return {
      chartInstance: ''
    }
  },
  watch: {
    indexData: function (val, oldVal) {
      this.initChart()
    },
    name: function (val, oldVal) {
      this.initChart()
    }
  },
  props: {
    indexData: {
      type: Object,
      default: function () {
        return {
          // 各个污染物指标的数据
          contaminantsData: [
            ['2013-01', 152],
            ['2013-02', 682],
            ['2013-03', 10],
            ['2013-04', 75],
            ['2013-05', 35],
            ['2013-06', 152],
            ['2013-07', 152],
            ['2013-08', 152],
            ['2013-09', 48],
            ['2013-10', 152],
            ['2013-11', 78],
            ['2013-12', 152]
          ],
          // 各个污染物指标对应的温度的数据
          temperatureData: [
            ['2013-01', 5],
            ['2013-02', 8],
            ['2013-03', 3],
            ['2013-04', 15],
            ['2013-05', 25],
            ['2013-06', 5.2],
            ['2013-07', 3.6],
            ['2013-08', 7.8],
            ['2013-09', 5.8],
            ['2013-10', 26],
            ['2013-11', 14],
            ['2013-12', 12]
          ]
        }
      }
    },
    name: {
      type: String,
      default: 'AQI'
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
      this.chartInstance = this.$echarts.init(this.$refs.linez_chart)
      // 求各个指标的最大值和最小值
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

      // 更改温度的格式
      let getTem = function (tem) {
        let res = []
        for (let i = 0; i < tem.length; i++) {
          let data = []
          data.push(tem[i][0])
          let num = parseFloat((tem[i][1] - 273.15).toFixed(2))
          data.push(num)
          res.push(data)
        }
        return res
      }
      const initOption = {
        legend: {
          data: [this.name,'温度'],
          left: 189,
          top: 0,
          textStyle: { color: "#989D9B" }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          left:30,
          right: 30,
          top: 50,
          bottom: 50,
          containLabel: true
        },
        xAxis: {
          type: 'time',
          boundaryGap: false,
          splitLine:{show: false},
          axisLabel: {
            show: true,
            textStyle: {
              color: '#989D9B'   //这里用参数代替了
            }
          }
        },
        yAxis: [
          {
            // show: false,
            type: 'value',
            name: this.name,
            nameTextStyle:{
              color:"#989D9B",
              fontSize:12,
            },
            min: getMin(this.indexData.contaminantsData),
            max: getMax(this.indexData.contaminantsData),
            position: 'left',
            axisLine: {
              show: true,
              textStyle: {
                color: '#E0E0E0',   //这里用参数代替了
              }
            },
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#989D9B',   //这里用参数代替了
              }
            },
            splitLine:{show: false}
          },
          {
            // show: false,
            type: 'value',
            name: '温度',
            nameTextStyle:{
              color:"#989D9B",
              fontSize:12,
            },
            min: getMin(getTem(this.indexData.temperatureData)),
            max: getMax(getTem(this.indexData.temperatureData)),
            position: 'right',
            axisLine: {
              show: true
            },
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#989D9B',  //更改坐标轴文字颜色
              }
            },
            splitLine:{show: false}
          }
        ],
        series: [
          {
            name: this.name,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 7,
            yAxisIndex: 0,
            lineStyle: {
              color: 'rgba(224,75,75,0.9)'
            },
            data: this.indexData.contaminantsData,
            itemStyle: {
              normal: {
                color: 'rgba(224,75,75)',
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(224,75,75,0.01)'
                  }, {
                    offset: 1,
                    color: 'rgba(224,75,75)'
                  }]),
                }
              }
            },
          },
          {
            name: '温度',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            yAxisIndex: 1,
            lineStyle: {
              color: 'rgba(117,149,234,0.7)'
            },
            itemStyle: {
              normal: {
                color: 'rgba(117,149,234,0.7)',
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(188,118,232,0.01)'
                  }, {
                    offset: 1,
                    color: 'rgba(188,118,232,0.4)'
                  }]),
                }
              }
            },
            data: getTem(this.indexData.temperatureData)
          }
        ]
      }
      this.chartInstance.setOption(initOption)
    }
  }
}

</script>

<style scoped>
  .barsytle {
    height: 90%;
    width: 98%
  }
</style>
