<template>
  <div style="height: 150px;width: 100%;" ref='industry_bar'></div>
</template>

<script>
  import * as echarts from 'echarts'
  export default {
    name: "IndustryBar",
    watch: {
      indBarData: function (val, oldVal) {
        this.initChart()
      }
    },
    props: {
      indBarData: {
        type: Array,
        default: function () {
          return [2799,795,2326]
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
        myChart: '',
      }
    },
    methods: {
      initChart() {
        if (this.myChart != null && this.myChart != "" && this.myChart != undefined){
          this.myChart.dispose();
        }
        this.myChart = this.$echarts.init(this.$refs.industry_bar)

        let option;
        option = {
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '10%',
            containLabel: true
          },
          backgroundColor: '#020C43',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none'
            },
            formatter: function(params) {
              return params[0].name + '<br/>' +
                  "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                  params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 1).toFixed(2)).toLocaleString() + '<br/>'
            }
          },
          xAxis: {
            show: false,
            type: 'value'
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              },
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: ['工业SO2排放量', '氮氧化物排放量', '烟(粉尘)排放量']
          }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '12'
              },
              formatter: function(value) {
                if (value >= 10000) {
                  return (value / 1).toLocaleString() + '/吨';
                } else {
                  return value.toLocaleString() + '/吨';
                }
              },
            },
            data: this.indBarData
          }],
          series: [{
            name: '排放量',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgb(57,89,255,1)'
                }, {
                  offset: 1,
                  color: 'rgb(46,200,207,1)'
                }]),
              },
            },
            barWidth: 20,
            data: this.indBarData
          }
          ]
        }

        option && this.myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>