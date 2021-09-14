<template>
  <div class="barsytle" ref="bar_chart"></div>
</template>

<script>
export default {
  name: 'AirQuality',
  props: {
    conData: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return [
          {conName:"北京", data:50},
          {conName:"天津", data:40},
          {conName:"河北", data:30}
        ]
      }
    },
    locName: {
      type: String,
      default: '全国'
    }
  },
  watch: {
    conData: {
      handler: function (val, oldVal) {
        this.initChart()
      },
      deep: true
    },
  },
  data () {
    return {
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 20
      }, {
        start: 0,
        end: 20
      }],
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
      if (this.locName != '全国') {
        this.dataZoom = []
      } else {
        this.dataZoom = [{
          type: 'inside',
          start: 0,
          end: 20
        }, {
          start: 0,
          end: 20
        }]
      }
      if (this.chartInstance != null && this.chartInstance != "" && this.chartInstance != undefined){
        this.chartInstance.dispose();
      }
      this.chartInstance = this.$echarts.init(this.$refs.bar_chart)
      // 对数组进行排序
      let dataSort = function (conData) {
        return conData.slice().sort((a, b) => a.data - b.data);
      }
      // 获取城市名
      let getConName = function (sortData) {
        let names = []
        for (let data of sortData) {
          names.push(data.conName)
        }
        return names.reverse()
      }
      // 获取数据
      let getConData = function (sortData) {
        let datas = []
        for (let data of sortData) {
          datas.push(data.data)
        }
        return datas.reverse()
      }
      let initOption = {
        xAxis: {
          axisTick: {
            show: true
          },
          axisLine: {
            show: true
          },
          type: 'category',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#989D9B'   //这里用参数代替了
            }
          },
          data: getConName(dataSort(this.conData))
        },
        yAxis: {
          show: false,
          type: 'value',
        },
        dataZoom: this.dataZoom ,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.3)'
          }
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '5%',
          bottom: 0,
          containLabel: true
        },
        tooltip: {},
        series: [{
          label: {
            show: true,
            position: 'inside'
          },
          data: getConData(dataSort(this.conData)),
          type: 'bar',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          itemStyle: {
            color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(65,212,214,0.1)'
            }, {
              offset: 1,
              color: 'rgba(38,222,253,0.5)'
            }], false)
          }
        }]
      }

      this.chartInstance.setOption(initOption)
      this.chartInstance.on('click', 'series', data => {
        this.$emit('cityDataClick',data.name)
      })
    }
  }
}

</script>

<style scoped>
  .barsytle {
    height: 90%;
    width: 100%
  }
</style>
