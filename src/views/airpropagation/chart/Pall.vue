<template>
  <div ref='Pall_chart' style='height: 96%;width:95%;'></div>
</template>

<script>
export default {
  name: 'Pall',
  watch: {
    palldata: function (val, oval) {
      this.initChart()
    }
  },
  props: {
    palldata: {
      type: Array,
      default: function () {
        return [
          [1, 55, 9, 56, 0.46, 18, 6, 15, '良'],
          [2, 25, 11, 21, 0.65, 34, 9, 10, '优'],
          [3, 56, 7, 63, 0.3, 14, 5, 20, '良'],
          [4, 33, 7, 29, 0.33, 16, 6, 32, '优'],
          [5, 42, 24, 44, 0.76, 40, 16, 10, '优'],
          [6, 82, 58, 90, 1.77, 68, 33, 50, '良'],
          [7, 74, 49, 77, 1.46, 48, 27, 10, '良'],
          [8, 78, 55, 80, 1.29, 59, 29, 10, '良'],
          [9, 267, 216, 280, 4.8, 108, 64, 10, '重度污染'],
          [10, 185, 127, 216, 2.52, 61, 27, 15, '中度污染'],
          [11, 39, 19, 38, 0.57, 31, 15, 14, '优'],
          [12, 41, 11, 40, 0.43, 21, 7, 14, '优'],
          [13, 64, 38, 74, 1.04, 46, 22, 14, '良'],
          [14, 108, 79, 120, 1.7, 75, 41, 20, '轻度污染'],
          [15, 108, 63, 116, 1.48, 44, 26, 35, '轻度污染'],
          [16, 33, 6, 29, 0.34, 13, 5, 14, '优'],
          [17, 94, 66, 110, 1.54, 62, 31, 25, '良'],
          [18, 186, 142, 192, 3.88, 93, 79, 14, '中度污染'],
          [19, 57, 31, 54, 0.96, 32, 14, 25, '良'],
          [20, 22, 8, 17, 0.48, 23, 10, 48, '优'],
          [21, 39, 15, 36, 0.61, 29, 13, 45, '优'],
          [22, 94, 69, 114, 2.08, 73, 39, 42, '良'],
          [23, 99, 73, 110, 2.43, 76, 48, 42, '良'],
          [24, 31, 12, 30, 0.5, 32, 16, 10, '优'],
          [25, 42, 27, 43, 1, 53, 22, 5, '优'],
          [26, 154, 117, 157, 3.05, 92, 58, 52, '中度污染'],
          [27, 234, 185, 230, 4.09, 123, 69, 45, '重度污染'],
          [28, 160, 120, 186, 2.77, 91, 50, 24, '中度污染'],
          [29, 134, 96, 165, 2.76, 83, 41, 15, '轻度污染'],
          [30, 52, 24, 60, 1.03, 50, 21, 12, '良'],
          [31, 46, 5, 49, 0.28, 10, 6, 5, '优']
        ]
      }
    }
  },
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
      this.chartInstance = this.$echarts.init(this.$refs.Pall_chart)
      const schema = [
        { name: 'date', index: 0, text: '日期' },
        { name: 'AQIindex', index: 1, text: 'AQI' },
        { name: 'PM25', index: 2, text: 'PM2.5' },
        { name: 'PM10', index: 3, text: 'PM10' },
        { name: 'CO', index: 4, text: ' CO' },
        { name: 'NO2', index: 5, text: 'NO2' },
        { name: 'SO2', index: 6, text: 'SO2' },
        { name: 'O3', index: 7, text: 'O3' },
        { name: '等级', index: 8, text: '等级' }
      ]
      const initOption = {
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1
        },
        parallelAxis: [
          { dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start' },
          { dim: 1, name: schema[1].text },
          { dim: 2, name: schema[2].text },
          { dim: 3, name: schema[3].text },
          { dim: 4, name: schema[4].text },
          { dim: 5, name: schema[5].text },
          { dim: 6, name: schema[6].text },
          { dim: 7, name: schema[7].text},
          { dim: 8, name: schema[8].text, type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'] }
        ],
        visualMap: {
          show: true,
          min: 0,
          max: 150,
          dimension: 2,
          left: 10,
          bottom: 30,
          inRange: {
            color: ['#ED2424', '#D1F015', '#1739E5'].reverse()
          }
        },
        parallel: {
          parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
              color: '#fff',
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: '#aaa'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#777'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            type: 'parallel',
            lineStyle: {
              normal: {
                width: 1,
                opacity: 0.5
              }
            },
            data: this.palldata
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
    height: 100%;
    width: 100%
  }
</style>
