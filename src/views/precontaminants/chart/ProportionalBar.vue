<template>
  <div style="height: 100%;width: 100%;" ref='pro_bar'></div>
</template>

<script>
  export default {
    name: "ProportionalBar",
    watch: {
      proProBarData: function (val, oldVal) {
        this.initChart()
      }
    },
    props: {
      proProBarData: {
        type: Object
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
        this.myChart = this.$echarts.init(this.$refs.pro_bar)

        var colors = ['#4C98FB', '#80ADD7', '#BC76E8', '#D4DCA9', '#BF9D7A', '#0486DA', '#05ADD4', '#9D50E0', '#634FDA']

        let option;
        option = {
          color: colors,
          legend: {
            top: 10,
            left: 200,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              fontSize: 14,
              color: '#96A4F4',
              padding: [3, 0, 0, 0]
            },
            data: this.proProBarData.legend
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '13%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              color: '#96A4F4'
            },
            axisLine: {
              lineStyle: {
                color: '#96A4F4'
              },
              width: 5
            },
            axisTick: {
              show: false,
            },
            data: this.proProBarData.area
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#96A4F4'
            },
            axisLine: {
              lineStyle: {
                color: '#96A4F4'
              },
              width: 5
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false
            },
          },
          series: [
          ]
        }

        for (var i = 0; i < this.proProBarData.legend.length; i++) {
          if (this.proProBarData.legend[i] == 'AQI') {
            option.series.push({
              name: this.proProBarData.legend[i],
              type: 'bar',
              stack: '总量',
              barWidth: '45%',
              label: {
                show: false,
                position: 'insideRight'
              },
              emphasis: {
                focus: 'series'
              },
              itemStyle: {
                //通常情况下：
                normal:{
                  //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                  color: params => {
                    var colorList = this.proProBarData.colorList;
                    return colorList[params.dataIndex];
                  }
                }
              },
              data: this.proProBarData.data[i]
            })
          } else {
            option.series.push({
              name: this.proProBarData.legend[i],
              type: 'bar',
              stack: '总量',
              barWidth: '45%',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: false,
                position: 'insideRight'
              },
              data: this.proProBarData.data[i]
            })
          }
        }

        option && this.myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>