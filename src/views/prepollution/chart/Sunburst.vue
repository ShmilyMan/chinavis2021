<template>
  <div style='width: 750px; height: 750px;' ref="sun_charts"> </div>
</template>

<script>
  export default {
    name: "Sunburst",
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
        this.myChart = this.$echarts.init(this.$refs.sun_charts)

        var option;

        var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
        var bgColor = 'rgba(128, 128, 128, 0.1)';

        var itemStyle = {
          star5: {
            color: colors[0]
          },
          star4: {
            color: colors[1]
          },
          star3: {
            color: colors[2]
          },
          star2: {
            color: colors[3]
          }
        };

        var data = [{
          // name: '北京',
          itemStyle: {
            color: 'rgba(128, 128, 128, 0.1)'
          },
          children: [{
            name: '2013',
            children: [{
              name: '1',
              children: [{}]
            }, {
              name: '2',
              children: [{}]
            }, {
              name: '3',
              children: [{}]
            }, {
              name: '4',
              children: [{}]
            }, {
              name: '5',
              children: [{}]
            } ,{
              name: '6',
              children: [{}]
            }, {
              name: '7',
              children: [{}]
            }, {
              name: '8',
              children: [{}]
            }, {
              name: '9',
              children: [{}]
            }, {
              name: '10',
              children: [{}]
            }, {
              name: '11',
              children: [{}]
            }, {
              name: '12',
              children: [{}]
            } ,{
              name: '13',
              children: [{}]
            }, {
              name: '14',
              children: [{}]
            }, {
              name: '15',
              children: [{}]
            }, {
              name: '16',
              children: [{}]
            }, {
              name: '17',
              children: [{}]
            }, {
              name: '18',
              children: [{}]
            }, {
              name: '19',
              children: [{}]
            } ,{
              name: '20',
              children: [{}]
            }, {
              name: '21',
              children: [{}]
            }, {
              name: '22',
              children: [{}]
            }, {
              name: '23',
              children: [{}]
            }, {
              name: '24',
              children: [{}]
            }, {
              name: '25',
              children: [{}]
            }, {
              name: '26',
              children: [{}]
            } ,{
              name: '27',
              children: [{}]
            }, {
              name: '28',
              children: [{}]
            }, {
              name: '29',
              children: [{}]
            }, {
              name: '30',
              children: [{}]
            }, {
              name: '31',
              children: [{}]
            }]
          },{
            name: '2014',
            children: [{
              name: '1',
              children: [{}]
            }, {
              name: '2',
              children: [{}]
            }, {
              name: '3',
              children: [{}]
            }, {
              name: '4',
              children: [{}]
            }, {
              name: '5',
              children: [{}]
            } ,{
              name: '6',
              children: [{}]
            }, {
              name: '7',
              children: [{}]
            }, {
              name: '8',
              children: [{}]
            }, {
              name: '9',
              children: [{}]
            }, {
              name: '10',
              children: [{}]
            }, {
              name: '11',
              children: [{}]
            }, {
              name: '12',
              children: [{}]
            } ,{
              name: '13',
              children: [{}]
            }, {
              name: '14',
              children: [{}]
            }, {
              name: '15',
              children: [{}]
            }, {
              name: '16',
              children: [{}]
            }, {
              name: '17',
              children: [{}]
            }, {
              name: '18',
              children: [{}]
            }, {
              name: '19',
              children: [{}]
            } ,{
              name: '20',
              children: [{}]
            }, {
              name: '21',
              children: [{}]
            }, {
              name: '22',
              children: [{}]
            }, {
              name: '23',
              children: [{}]
            }, {
              name: '24',
              children: [{}]
            }, {
              name: '25',
              children: [{}]
            }, {
              name: '26',
              children: [{}]
            } ,{
              name: '27',
              children: [{}]
            }, {
              name: '28',
              children: [{}]
            }, {
              name: '29',
              children: [{}]
            }, {
              name: '30',
              children: [{}]
            }, {
              name: '31',
              children: [{}]
            }]
          },{
            name: '2015',
            children: [{
              name: '1',
              children: [{}]
            }, {
              name: '2',
              children: [{}]
            }, {
              name: '3',
              children: [{}]
            }, {
              name: '4',
              children: [{}]
            }, {
              name: '5',
              children: [{}]
            } ,{
              name: '6',
              children: [{}]
            }, {
              name: '7',
              children: [{}]
            }, {
              name: '8',
              children: [{}]
            }, {
              name: '9',
              children: [{}]
            }, {
              name: '10',
              children: [{}]
            }, {
              name: '11',
              children: [{}]
            }, {
              name: '12',
              children: [{}]
            } ,{
              name: '13',
              children: [{}]
            }, {
              name: '14',
              children: [{}]
            }, {
              name: '15',
              children: [{}]
            }, {
              name: '16',
              children: [{}]
            }, {
              name: '17',
              children: [{}]
            }, {
              name: '18',
              children: [{}]
            }, {
              name: '19',
              children: [{}]
            } ,{
              name: '20',
              children: [{}]
            }, {
              name: '21',
              children: [{}]
            }, {
              name: '22',
              children: [{}]
            }, {
              name: '23',
              children: [{}]
            }, {
              name: '24',
              children: [{}]
            }, {
              name: '25',
              children: [{}]
            }, {
              name: '26',
              children: [{}]
            } ,{
              name: '27',
              children: [{}]
            }, {
              name: '28',
              children: [{}]
            }, {
              name: '29',
              children: [{}]
            }, {
              name: '30',
              children: [{}]
            }, {
              name: '31',
              children: [{}]
            }]
          },{
            name: '2016',
            children: [{
              name: '1',
              children: [{}]
            }, {
              name: '2',
              children: [{}]
            }, {
              name: '3',
              children: [{}]
            }, {
              name: '4',
              children: [{}]
            }, {
              name: '5',
              children: [{}]
            } ,{
              name: '6',
              children: [{}]
            }, {
              name: '7',
              children: [{}]
            }, {
              name: '8',
              children: [{}]
            }, {
              name: '9',
              children: [{}]
            }, {
              name: '10',
              children: [{}]
            }, {
              name: '11',
              children: [{}]
            }, {
              name: '12',
              children: [{}]
            } ,{
              name: '13',
              children: [{}]
            }, {
              name: '14',
              children: [{}]
            }, {
              name: '15',
              children: [{}]
            }, {
              name: '16',
              children: [{}]
            }, {
              name: '17',
              children: [{}]
            }, {
              name: '18',
              children: [{}]
            }, {
              name: '19',
              children: [{}]
            } ,{
              name: '20',
              children: [{}]
            }, {
              name: '21',
              children: [{}]
            }, {
              name: '22',
              children: [{}]
            }, {
              name: '23',
              children: [{}]
            }, {
              name: '24',
              children: [{}]
            }, {
              name: '25',
              children: [{}]
            }, {
              name: '26',
              children: [{}]
            } ,{
              name: '27',
              children: [{}]
            }, {
              name: '28',
              children: [{}]
            }, {
              name: '29',
              children: [{}]
            }, {
              name: '30',
              children: [{}]
            }, {
              name: '31',
              children: [{}]
            }]
          },{
            name: '2017',
            children: [{
              name: '1',
              children: [{}]
            }, {
              name: '2',
              children: [{}]
            }, {
              name: '3',
              children: [{}]
            }, {
              name: '4',
              children: [{}]
            }, {
              name: '5',
              children: [{}]
            } ,{
              name: '6',
              children: [{}]
            }, {
              name: '7',
              children: [{}]
            }, {
              name: '8',
              children: [{}]
            }, {
              name: '9',
              children: [{}]
            }, {
              name: '10',
              children: [{}]
            }, {
              name: '11',
              children: [{}]
            }, {
              name: '12',
              children: [{}]
            } ,{
              name: '13',
              children: [{}]
            }, {
              name: '14',
              children: [{}]
            }, {
              name: '15',
              children: [{}]
            }, {
              name: '16',
              children: [{}]
            }, {
              name: '17',
              children: [{}]
            }, {
              name: '18',
              children: [{}]
            }, {
              name: '19',
              children: [{}]
            } ,{
              name: '20',
              children: [{}]
            }, {
              name: '21',
              children: [{}]
            }, {
              name: '22',
              children: [{}]
            }, {
              name: '23',
              children: [{}]
            }, {
              name: '24',
              children: [{}]
            }, {
              name: '25',
              children: [{}]
            }, {
              name: '26',
              children: [{}]
            } ,{
              name: '27',
              children: [{}]
            }, {
              name: '28',
              children: [{}]
            }, {
              name: '29',
              children: [{}]
            }, {
              name: '30',
              children: [{}]
            }, {
              name: '31',
              children: [{}]
            }]
          },{
            name: '2018',
            children: [{
              name: '1',
              children: [{}]
            }, {
              name: '2',
              children: [{}]
            }, {
              name: '3',
              children: [{}]
            }, {
              name: '4',
              children: [{}]
            }, {
              name: '5',
              children: [{}]
            } ,{
              name: '6',
              children: [{}]
            }, {
              name: '7',
              children: [{}]
            }, {
              name: '8',
              children: [{}]
            }, {
              name: '9',
              children: [{}]
            }, {
              name: '10',
              children: [{}]
            }, {
              name: '11',
              children: [{}]
            }, {
              name: '12',
              children: [{}]
            } ,{
              name: '13',
              children: [{}]
            }, {
              name: '14',
              children: [{}]
            }, {
              name: '15',
              children: [{}]
            }, {
              name: '16',
              children: [{}]
            }, {
              name: '17',
              children: [{}]
            }, {
              name: '18',
              children: [{}]
            }, {
              name: '19',
              children: [{}]
            } ,{
              name: '20',
              children: [{}]
            }, {
              name: '21',
              children: [{}]
            }, {
              name: '22',
              children: [{}]
            }, {
              name: '23',
              children: [{}]
            }, {
              name: '24',
              children: [{}]
            }, {
              name: '25',
              children: [{}]
            }, {
              name: '26',
              children: [{}]
            } ,{
              name: '27',
              children: [{}]
            }, {
              name: '28',
              children: [{}]
            }, {
              name: '29',
              children: [{}]
            }, {
              name: '30',
              children: [{}]
            }, {
              name: '31',
              children: [{}]
            }]
          }]
        }, ];

        for (var j = 0; j < data.length; ++j) {
          var level1 = data[j].children;
          for (var i = 0; i < level1.length; ++i) {
            var block = level1[i].children;
            var bookScore = [];
            var bookScoreId;
            for (var star = 0; star < block.length; ++star) {
              var style = (function (name) {
                switch (name) {
                  case '1':
                    bookScoreId = 0;
                    return itemStyle.star2;
                  case '2':
                    bookScoreId = 1;
                    return itemStyle.star3;
                  case '3':
                    bookScoreId = 2;
                    return itemStyle.star4;
                  case '4':
                    bookScoreId = 3;
                    return itemStyle.star5;
                  case '5':
                    bookScoreId = 3;
                    return itemStyle.star2;
                  case '6':
                    bookScoreId = 3;
                    return itemStyle.star3;
                  case '7':
                    bookScoreId = 3;
                    return itemStyle.star4;
                  case '8':
                    bookScoreId = 0;
                    return itemStyle.star5;
                  case '9':
                    bookScoreId = 1;
                    return itemStyle.star2;
                  case '10':
                    bookScoreId = 2;
                    return itemStyle.star3;
                  case '11':
                    bookScoreId = 3;
                    return itemStyle.star4;
                  case '12':
                    bookScoreId = 3;
                    return itemStyle.star5;
                  case '13':
                    bookScoreId = 3;
                    return itemStyle.star2;
                  case '14':
                    bookScoreId = 3;
                    return itemStyle.star3;
                  case '15':
                    bookScoreId = 0;
                    return itemStyle.star4;
                  case '16':
                    bookScoreId = 1;
                    return itemStyle.star5;
                  case '17':
                    bookScoreId = 2;
                    return itemStyle.star2;
                  case '18':
                    bookScoreId = 3;
                    return itemStyle.star3;
                  case '19':
                    bookScoreId = 3;
                    return itemStyle.star4;
                  case '20':
                    bookScoreId = 3;
                    return itemStyle.star5;
                  case '21':
                    bookScoreId = 3;
                    return itemStyle.star2;
                  case '22':
                    bookScoreId = 0;
                    return itemStyle.star3;
                  case '23':
                    bookScoreId = 1;
                    return itemStyle.star4;
                  case '24':
                    bookScoreId = 2;
                    return itemStyle.star5;
                  case '25':
                    bookScoreId = 3;
                    return itemStyle.star2;
                  case '26':
                    bookScoreId = 3;
                    return itemStyle.star3;
                  case '27':
                    bookScoreId = 3;
                    return itemStyle.star4;
                  case '28':
                    bookScoreId = 3;
                    return itemStyle.star5;
                  case '29':
                    bookScoreId = 3;
                    return itemStyle.star4;
                  case '30':
                    bookScoreId = 3;
                    return itemStyle.star2;
                  case '31':
                    bookScoreId = 3;
                    return itemStyle.star3;
                }
              })(block[star].name);

              block[star].label = {
                color: style.color,
                downplay: {
                  opacity: 0.5
                }
              };
              if (block[star].children) {
                style = {
                  opacity: 1,
                  color: style.color
                };
                block[star].children.forEach(function (book) {
                  book.value = 1;
                  book.itemStyle = style;

                  book.label = {
                    color: style.color
                  };

                  var value = 1;
                  if (bookScoreId === 0 || bookScoreId === 3) {
                    value = 1;
                  }

                  if (bookScore[bookScoreId]) {
                    bookScore[bookScoreId].value += value;
                  }
                  else {
                    bookScore[bookScoreId] = {
                      color: colors[bookScoreId],
                      value: value
                    };
                  }
                });
              }
            }

            level1[i].itemStyle = {
              color: data[j].itemStyle.color
            };
          }
        }

        option = {
          backgroundColor: bgColor,
          color: 'rgba(128, 128, 128, 0.1)',
          series: [{
            type: 'sunburst',
            center: ['50%', '50%'],
            data: data,
            sort: function (a, b) {
              if (a.depth === 1) {
                return b.getValue() - a.getValue();
              }
              else {
                return a.dataIndex - b.dataIndex;
              }
            },
            label: {
              rotate: 'radial',
              color: '#9A2555'
            },
            itemStyle: {
              borderColor: bgColor,
              borderWidth: 2
            },
            levels: [{}, {
              r0: 0,
              r: 0,
              label: {
                rotate: 0
              }
            }, {
              r0: 100,
              r: 90,
              label: {
                rotate: 'tangential'
              },
            }, {
              r0: 125,
              r: 135,
              itemStyle: {
                shadowBlur: 10,
                shadowColor: colors[2],
                color: 'transparent'
              },
              label: {
                rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
              }
            }, {
              r0: 500,
              r: 800,
              itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
              },
              label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333'
              },
              downplay: {
                label: {
                  opacity: 0.2
                }
              }
            }]
          }]
        };

        option && this.myChart.setOption(option);

        this.myChart.on('click',val => {
          let name = val.name
          this.$emit('emitMonAndDay',name)
        });
      }
    }
  }
</script>

<style scoped>

</style>