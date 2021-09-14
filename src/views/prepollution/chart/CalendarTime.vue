<template>
  <div ref="cal_chart" style="height: 100%;width:98%"></div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: "CalendarTime",
    watch: {
      timeData: function (val, oldVal) {
        this.initChart()
      }
    },
    props: {
      timeData: {
        type: Array
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
        this.myChart = this.$echarts.init(this.$refs.cal_chart)
        var app = {};
        var option;

        var cellSize = [55, 55];
        var pieRadius = 20;

        var startDate = '2013-04-01';
        var endDate = '2013-04-25';
        var data_name = ['PM2.5', 'PM10', 'SO2','NO2','O3','CO'];//该出应该是从数据库中读取

        var data_arr = [];

        for(var i = 0; i < this.timeData.length; i++) {
          data_arr.push(this.timeData[i].data);
        }
        function getVirtulData() {
          var date = +echarts.number.parseDate(startDate);
          var end = +echarts.number.parseDate(endDate);
          var dayTime = 3600 * 24 * 1000;
          var data = [];
          for(var time = date; time < end; time += dayTime) {
            data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 10000)
            ]);
          }
          return data;
        }
        function getPieSeries(scatterData, chart) {
          return echarts.util.map(scatterData, function(item, index) {
            var center = chart.convertToPixel('calendar', item);

            return {
              id: index + 'pie',
              type: 'pie',
              center: center,
              label: {
                normal: {
                  formatter: '',
                  position: 'inside'
                }
              },
              radius: pieRadius,
              data: data_arr[index]
            };
          });
        }
        // 使用刚指定的配置项和数据显示图表。

        function getPieSeriesUpdate(scatterData, chart) {
          return echarts.util.map(scatterData, function(item, index) {
            var center = chart.convertToPixel('calendar', item);
            return {
              id: index + 'pie',
              center: center
            };
          });
        }

        var scatterData = getVirtulData();

        var option = {
          tooltip: {},
          legend: {
            data: data_name,
            top: 10,
            left: 50,
            textStyle: {
              color: '#000'
            }
          },
          calendar: {
            top: 'middle',
            left: 'center',
            orient: 'vertical',
            cellSize: cellSize,
            splitLine: {
              show: false
            },
            itemStyle: {
              color: 'rgba(128, 128, 128, 0.1)',
              borderWidth: 0
            },
            yearLabel: {
              show: false,
              textStyle: {
                fontSize: 30
              }
            },
            dayLabel: {
              show: false
            },
            monthLabel: {
              show: false
            },
            range: [startDate,endDate]
          },
          series: [{
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
              normal: {
                show: true,
                formatter: function(params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                  color: '#000',
                  fontSize: 12
                }
              }
            },
            data: scatterData
          }]
        };

        var pieInitialized;
        setTimeout(() => {
          pieInitialized = true;
          this.myChart.setOption({
            series: getPieSeries(scatterData, this.myChart)
          });
        }, 10);

        this.myChart.onresize = () => {
          if(pieInitialized) {
            this.myChart.setOption({
              series: getPieSeriesUpdate(scatterData, this.myChart)
            });
          }
        }

        option && this.myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>