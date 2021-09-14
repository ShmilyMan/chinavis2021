<template>
  <div style="height: 98%;width: 100%;" ref='mult_color_bar'></div>
</template>

<script>
  import * as echarts from 'echarts'
  export default {
    name: "MulticolorProBar",
    watch: {
      mulDataBar: function (val,oldVal) {
        this.initChart()
      }
    },
    props: {
      mulDataBar: {
        type: Object,
        default: function () {
          return {
            barData: [
              {'name': '北京', 'value': 93.41},
              {'name': '天津', 'value': 119.4},
              {'name': '河北', 'value': 99.95},
              {'name': '山西', 'value': 78.91},
              {'name': '内蒙古', 'value': 30.33}
            ]
          }
        }
      },
      zoomData: {
        type: Array,
        default: function () {
          return [
            {
              type: 'slider',
              show: true,
              height: 5,
              bottom: 30,
              borderColor: 'transparent',
              backgroundColor: 'rgba(128, 128, 128,0.1)',
              // 拖拽手柄样式 svg 路径
              handleIcon: 'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
              handleColor: '#aab6c6',
              handleSize: 8,
              handleStyle: {
                borderColor: '#aab6c6',
                shadowBlur: 4,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                shadowColor: '#e5e5e5'
              },
              start: 0,
              end: 20,
            }
          ]
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    data() {
      return {
        myChart: ''
      }
    },
    methods: {
      initChart() {
        if (this.myChart != null && this.myChart != "" && this.myChart != undefined){
          this.myChart.dispose();
        }
        this.myChart = this.$echarts.init(this.$refs.mult_color_bar)

        let xAxisData = [];
        let seriesData1 = [];
        let sum = 0;
        let barTopColor = ["#02c3f1", "#53e568", "#a154e9","#02c3f1", "#53e568","#02c3f1", "#53e568", "#a154e9","#02c3f1", "#53e568","#02c3f1", "#53e568", "#a154e9","#02c3f1", "#53e568","#02c3f1", "#53e568", "#a154e9","#02c3f1", "#53e568","#02c3f1", "#53e568", "#a154e9","#02c3f1", "#53e568","#02c3f1", "#53e568", "#a154e9","#02c3f1", "#53e568","#02c3f1", "#53e568", "#a154e9","#02c3f1", "#53e568",];
        let barBottomColor = ["rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)",];
        // 对数组进行排序
        let dataSort = function (conData) {
          return conData.slice().sort((a, b) => b.value - a.value);
        }
        dataSort(this.mulDataBar.barData).forEach(item => {
          xAxisData.push(item.name);
          seriesData1.push(item.value);
          sum += item.value;
        });
        let option;
        option = {
          backgroundColor: 'rgba(128, 128, 128,0.1)',
          xAxis: {
            data: xAxisData,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              margin: 25,
              align: 'center',
              formatter: function(params, index) {
                return '{a|' + (seriesData1[index] / sum * 100).toFixed(2) + '%}' + '\n' + '{b|' + params + '}';
              },
              textStyle: {
                fontSize: 14,
                color: '#ffffff',
                rich: {
                  a: {
                    fontSize: 12,
                    color: '#ffffff'
                  },
                  b: {
                    height: 20,
                    fontSize: 14,
                    color: '#ffffff'
                  }
                }
              }
            },
            interval: 0
          },
          dataZoom: this.zoomData,
          yAxis: {
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          series: [{
            name: '柱顶部',
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
              normal: {
                color: function(params) {
                  return barTopColor[params.dataIndex];
                }
              }
            },
            label: {
              show: true,
              position: 'top',
              fontSize: 14,
              color: '#79B7F7'
            },
            symbolPosition: 'end',
            data: seriesData1,
          }, {
            name: '柱底部',
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, 5],
            z: 12,
            itemStyle: {
              normal: {
                color: function(params) {
                  return barTopColor[params.dataIndex];
                }
              }
            },
            data: seriesData1
          }, {
            name: '第一圈',
            type: 'pictorialBar',
            symbolSize: [47, 16],
            symbolOffset: [0, 11],
            z: 11,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#3ACDC5',
                borderWidth: 2
              }
            },
            data: seriesData1
          }, {
            name: '第二圈',
            type: 'pictorialBar',
            symbolSize: [62, 22],
            symbolOffset: [0, 17],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: barTopColor[0],
                borderWidth: 2
              }
            },
            data: seriesData1
          }, {
            type: 'bar',
            itemStyle: {
              normal: {
                color: function(params) {
                  return new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [{
                        offset: 1,
                        color: barTopColor[params.dataIndex]
                      },
                        {
                          offset: 0,
                          color: barBottomColor[params.dataIndex]
                        }
                      ]
                  );
                },
                opacity: 0.8
              }
            },
            z: 16,
            silent: true,
            barWidth: 26,
            barGap: '-100%', // Make series be overlap
            data: seriesData1
          }]
        }

        this.myChart.on('click',info => {
          let dicName = info.name
          this.$emit('emitDicName',dicName)
        })
        option && this.myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>