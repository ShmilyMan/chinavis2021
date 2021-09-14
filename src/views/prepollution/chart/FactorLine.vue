<template>
  <div style="height: 98%;width:100%;" ref='line_chart'></div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: "FactorLine",
    watch: {
      lineData: function (val, oldVal) {
        this.initChart()
      }
    },
    props: {
      lineData: {
        type: Object,
        default: function () {
          return {
            aqiData: [3,5,13,22,26,31,10,8,2],
            temData: [5,12,20,27,42,11,8,13,5,1],
            humData: [0,0,8,16,53,27,13,6,2,2,1],
            preData: [0,7,14,31,12,5],
            windVData: [0,7,14,31,12,5],
          }
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
        this.myChart = this.$echarts.init(this.$refs.line_chart)

        var option;
        option = {
          backgroundColor:'rgba(128, 128, 128, 0.1)',
          color:['#f0c725','#16f892'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['AQI','温度', '湿度','气压','风速'],
            itemWidth: 5,
            x: 'center',
            top:'25',
            textStyle: {
              color:'#000',
              "fontSize": 10
            }
          },
          grid: {
            left: '6%',
            right: '4%',
            top:'25%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            show : true,
            orient: 'vertical',
            x: 'right',
            y: 'center'
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap: false,
              data : ['00-04', '04-08', '08-12', '12-16', '16-20','20-24'],
              axisLine:{
                lineStyle:{
                  color:'rgba(240,199,37,0.5)'
                }
              },
              axisLabel :{
                interval:0,
                rotate:'45',
                color:'#000'
              }
            }
          ],
          yAxis : [
            {
              type : 'value',
              name: '',
              nameTextStyle:{
                color:'#c1cadf',
                align:'right',
                lineHeight:10
              },
              axisLine:{
                lineStyle:{
                  size: 12,
                  color:'rgba(240,199,37,0.5)'
                }
              },
              axisLabel :{
                interval:0,
                color:'#000'
              },
              splitLine: {
                show: false
              }
            }
          ],
          series : [
            {
              name:'AQI',
              type:'line',
              smooth: true,
              symbolSize: 8,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(240,85,54,0.8)'
                }, {
                  offset: 1,
                  color: 'rgba(240,85,54,0.01)'
                }])
              },
              data: this.lineData.aqiData,
              barWidth: '30%',
              itemStyle:{ normal:{ color:'#F05536' } }
            },{
              name:'温度',
              type:'line',
              smooth: true,
              symbolSize: 8,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(49,90,193,0.3)'
                }, {
                  offset: 1,
                  color: 'rgba(49,90,193,0.01)'
                }])
              },
              data: this.lineData.temData,
              barWidth: '30%',
              itemStyle:{ normal:{ color:'rgba(49,90,193,0.7)' } }
            },{
              name:'湿度',
              type:'line',
              smooth: true,
              symbolSize: 8,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(114,144,89,0.9)'
                }, {
                  offset: 1,
                  color: 'rgba(114,144,89,0.01)'
                }])
              },
              data: this.lineData.humData,
              barWidth: '30%',
              itemStyle:{ normal:{ color:'rgba(114,144,89,0.9)' } }
            },{
              name:'气压',
              type:'line',
              smooth: true,
              symbolSize: 8,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(188,118,232,0.4)'
                }, {
                  offset: 1,
                  color: 'rgba(188,118,232,0.01)'
                }])
              },
              data: this.lineData.preData,
              barWidth: '30%',
              itemStyle:{ normal:{ color:'rgba(188,118,232,0.7)' } }
            },
            {
              name:'风速',
              type:'line',
              smooth: true,
              symbolSize: 8,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0,212,199,0.01)'
                }, {
                  offset: 1,
                  color: 'rgba(0,212,199,0.9)'
                }])
              },
              data: this.lineData.windVData,
              barWidth: '30%',
              itemStyle:{ normal:{ color:'rgba(0,212,199,0.9)' } }
            }
          ]
        };


        option && this.myChart.setOption(option);

      }
    }
  }
</script>

<style scoped>

</style>