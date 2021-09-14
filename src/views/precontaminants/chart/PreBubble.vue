<template>
  <div style="height: 50px;width:400px;" ref='pre_bubble_chart'></div>
</template>

<script>
  export default {
    name: "PreBubble",
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    props: {
      bubbleData: {
        type: Object,
        default: function () {
          return {
            data: [[0,0,3757797],[0,1,3779244],[0,2,3523351],[0,3,3293561],[0,4,3267607],[0,5,3179798]]
          }
        }
      }
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
        this.myChart = this.$echarts.init(this.$refs.pre_bubble_chart)
        var option;
        var hours = ['2013', '2014', '2015', '2016', '2017', '2018'];
        var days = [1];

        option = {
          tooltip: {
            position: 'top'
          },
          backgroundColor: '#ffffff',
          title: [],
          singleAxis: [],
          series: []
        };

        this.$echarts.util.each(days, function (day, idx) {
          // option.title.push({
          //   textBaseline: 'middle',
          //   top: (idx + 0.5) * 100 / 7 + '%',
          //   text: day
          // });
          option.singleAxis.push({
            left: 40,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: 20,
            height: (100 / 7 - 10) + '%',
            width: 320,
            axisLabel: {
              //   show: day==5?true:false,
              interval: 0
            },
            axisLine: {
              //   show: day==5?true:false,
            },
            splitLine: {
              //   show: day==5?false:false,
            },
            axisTick:{
              //   show: day==5?true:false,
            }
          });
          option.series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            // symbol: 'pin',
            symbolSize: function (dataItem) {
              if (dataItem[1] >= 2500000) {
                return dataItem[1] / 100000
              } else {
                return dataItem[1] / 12000
              }

            }
          });
        });

        this.$echarts.util.each(this.bubbleData.data, function (dataItem) {
          option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
        });

        option && this.myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>