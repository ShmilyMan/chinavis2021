<template>
  <div id="container" style='width: 100%; height: 98%;' ref="map_charts"></div>
</template>

<script>
require('echarts-gl/dist/echarts-gl.min')
require('echarts-stat/dist/ecStat.min')
require('echarts/dist/echarts.min')
require('echarts/dist/extension/dataTool.min')
require('echarts-map/js/china')
require('echarts-map/js/world')
require('echarts/extension/bmap/bmap')

import {loadBMap} from "@/assets/js/util/map"
import axios from "axios"

export default {
  name: "WindMap",
  watch: {
    aqiData: function (val, oldVal) {
      this.initChart()
    }
  },
  props: {
    aqiData: {
      type: Array
    },
    hours: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      loadBMap("m6R4RiIh4QQ6mxyNk14NcjUNSmWOt8h9").then(() => {
        this.initChart()
      })
    })
  },
  data() {
    return {
      myChart: ''
    }
  },
  methods: {
    initChart() {
      if (this.myChart != null && this.myChart != "" && this.myChart != undefined) {
        this.myChart.dispose();
      }
      this.myChart = this.$echarts.init(this.$refs.map_charts)
      let app = {}
      let option;

      let geoFixMap = {
        '北京': [116.395645, 39.929986],
        '上海': [121.487899, 31.249162],
        '天津': [117.210813, 39.14393],
        '重庆': [106.530635, 29.544606],
        '安徽': [117.216005, 31.859252],
        '福建': [119.330221, 26.047125],
        '甘肃': [103.823305, 36.064226],
        '广东': [113.30765, 23.120049],
        '广西': [108.297234, 22.806493],
        '贵州': [106.709177, 26.629907],
        '海南': [110.330802, 20.022071],
        '河北': [114.522082, 38.048958],
        '河南': [113.649644, 34.75661],
        '黑龙江': [126.657717, 45.773225],
        '湖北': [114.3162, 30.581084],
        '湖南': [112.979353, 28.213478],
        '江苏': [119.919606, 32.476053],
        '江西': [115.893528, 28.689578],
        '吉林': [125.313642, 43.898338],
        '辽宁': [123.432791, 41.808645],
        '内蒙古': [111.660351, 40.828319],
        '宁夏': [106.206479, 38.502621],
        '青海': [101.767921, 36.640739],
        '山东': [118.059134, 36.804685],
        '山西': [112.550864, 37.890277],
        '陕西': [108.953098, 34.2778],
        '四川': [104.067923, 30.679943],
        '西藏': [81.107669, 30.404557],
        '新疆': [86.041865, 44.308259],
        '云南': [102.714601, 25.049153],
        '浙江': [120.219375, 30.259244],
        '香港': [114.1543731, 22.28198083]
      };
      let convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoFixMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      }
      let myConvertData = function (data) {
        let res = []
        for (let i = 0; i < data.length; i++) {
          res.push({
            value: [parseFloat(data[i]["lon"]), parseFloat(data[i]["lat"]), parseFloat(data[i]["aqi"])]
          });
        }
        return res
      }
      let getWindData = function (data) {
        let windData = []
        for (let i = 0; i < data.length; i++) {
          let de = []
          de.push(
              data[i].lon,
              data[i].lat,
              data[i].v,
              data[i].u,
              data[i].max
          )
          windData.push(de)
        }
        return windData
      }

      axios.all([
        axios({
          url: './winddata/winddata1.json'
        }),
        axios({
          url: './winddata/winddata2.json'
        }),
        axios({
          url: './winddata/winddata3.json'
        }),
        axios({
          url: './winddata/winddata4.json'
        }),
        axios({
          url: './winddata/winddata5.json'
        }),
        axios({
          url: './winddata/winddata6.json'
        }),
        axios({
          url: './winddata/winddata7.json'
        }),
        axios({
          url: './winddata/winddata8.json'
        }),
        axios({
          url: './winddata/winddata9.json'
        }),
        axios({
          url: './winddata/winddata10.json'
        }),
        axios({
          url: './winddata/winddata11.json'
        }),
        axios({
          url: './winddata/winddata12.json'
        }),
        axios({
          url: './winddata/winddata13.json'
        }),
        axios({
          url: './winddata/winddata14.json'
        }),
        axios({
          url: './winddata/winddata15.json'
        }),
        axios({
          url: './winddata/winddata16.json'
        }),
        axios({
          url: './winddata/winddata17.json'
        }),
        axios({
          url: './winddata/winddata18.json'
        }),
        axios({
          url: './winddata/winddata19.json'
        }),
        axios({
          url: './winddata/winddata20.json'
        }),
        axios({
          url: './winddata/winddata21.json'
        }),
        axios({
          url: './winddata/winddata22.json'
        }),
        axios({
          url: './winddata/winddata23.json'
        }),
        axios({
          url: './winddata/winddata24.json'
        }),
        axios({
          url: './coverdata/coverdata1.json'
        }),
        axios({
          url: './coverdata/coverdata2.json'
        }),
        axios({
          url: './coverdata/coverdata3.json'
        }),
        axios({
          url: './coverdata/coverdata4.json'
        }),
        axios({
          url: './coverdata/coverdata5.json'
        }),
        axios({
          url: './coverdata/coverdata6.json'
        }),
        axios({
          url: './coverdata/coverdata7.json'
        }),
        axios({
          url: './coverdata/coverdata8.json'
        }),
        axios({
          url: './coverdata/coverdata9.json'
        }),
        axios({
          url: './coverdata/coverdata10.json'
        }),
        axios({
          url: './coverdata/coverdata11.json'
        }),
        axios({
          url: './coverdata/coverdata12.json'
        }),
        axios({
          url: './coverdata/coverdata13.json'
        }),
        axios({
          url: './coverdata/coverdata14.json'
        }),
        axios({
          url: './coverdata/coverdata15.json'
        }),
        axios({
          url: './coverdata/coverdata16.json'
        }),
        axios({
          url: './coverdata/coverdata17.json'
        }),
        axios({
          url: './coverdata/coverdata18.json'
        }),
        axios({
          url: './coverdata/coverdata19.json'
        }),
        axios({
          url: './coverdata/coverdata20.json'
        }),
        axios({
          url: './coverdata/coverdata21.json'
        }),
        axios({
          url: './coverdata/coverdata22.json'
        }),
        axios({
          url: './coverdata/coverdata23.json'
        }),
        axios({
          url: './coverdata/coverdata24.json'
        }),
      ]).then(res => {
        this.myChart.setOption(option = {
          baseOption: {
            tooltip: {
              trigger: 'item'
            },
            timeline: {
              axisType: 'category',
              bottom: '6%',
              autoPlay: false,
              currentIndex: this.hours,
              playInterval: 5000,
              data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
            },
            visualMap: [{
              left: 'right',
              min: 0,
              max: 30,
              dimension: 4,
              inRange: {
                // color: ['green', 'yellow', 'red']
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#E5D174', '#F0836A']
              },
              realtime: true,
              calculable: false,
              textStyle: {
                color: '#fff'
              }
            }, {
              type: 'piecewise',
              min: 0,
              max: 350,
              show: false,
              //分段数量
              splitNumber: 6,
              pieces: [
                {min: 0, max: 50},
                {min: 51, max: 100},
                {min: 101, max: 150},
                {min: 151, max: 200},
                {min: 201, max: 300},
                {min: 301},
              ],
              inRange: {
                color: ['#4B6F55', '#F4E925', '#F5AF58', '#F04D31', '#E855E8', '#791A27']
              },
              textStyle: {
                color: '#fff',
                fontWeight: 'bolder'
              },
              calculable: false,
              bottom: 10,
              left: 'right',
              right: 1
            }],

            bmap: {
              center: [116.395645, 39.929986],
              zoom: 6,
              roam: true,
              mapStyle: {
                'styleJson': [{
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    "color": "#141D4C"
                  }
                }, {
                  'featureType': 'land',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#0F2842'
                  }
                }, {
                  'featureType': 'railway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    // 'color': '#fdfdfd'
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'highway',
                  'elementType': 'labels',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#fefefe'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#fefefe'
                  }
                }, {
                  'featureType': 'poi',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'green',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'subway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'local',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'labels',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#189aeaff'
                  }
                }, {
                  'featureType': 'building',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'label',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#999999'
                  }
                }, {
                  "featureType": "districtlabel",
                  "elementType": "all",
                  "stylers": {
                    "color": "#0F2842",
                  }
                }, {
                  "featureType": "boundary",
                  "elementType": "geometry.stroke",
                  "stylers": {
                    "color": "#FC0308"
                  }
                }]
              }
            },
            series: [
              {
                type: 'flowGL',
                coordinateSystem: 'bmap',
                // data: data,
                supersampling: 4,
                particleType: 'line',
                particleDensity: 128,
                particleSpeed: 1,
                itemStyle: {
                  opacity: 0.7
                },
              },
              {
                name: 'AQI',
                type: 'scatter',
                coordinateSystem: 'bmap',
                // data: convertData(geodata),
                symbol: 'pin',
                symbolSize: 40,
                encode: {
                  value: 2
                },
                showEffectOn: 'render',
                rippleEffect: {
                  brushType: 'stroke'
                },
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: '#fff',
                      fontSize: 9,
                    },
                    formatter(value) {
                      return value.data.value[2]
                    }
                  },
                },
                itemStyle: {
                  color: '#D8BC37', //标志颜色
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              },
              {
                type: 'heatmap',
                coordinateSystem: 'bmap',
                pointSize: 2.4,
                // data: myConvertData(res[1].data),
                blurSize: 5
              },
              {
                type: 'lines',
                coordinateSystem: 'bmap',
                zlevel: 2,
                effect: {
                  show: true,
                  period: 4, //箭头指向速度，值越小速度越快
                  trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                  symbol: 'arrow', //箭头图标
                  symbolSize: 7, //图标大小
                },
                lineStyle: {
                  normal: {
                    color: '#1DE9B6'
                    ,
                    width: 1, //线条宽度
                    opacity: 0.1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                  }
                },
              },
              {
                "type": "effectScatter",
                "coordinateSystem": "bmap",
                "showEffectOn": "render",
                "zlevel": 1,
                "symbol": "path://M409,271.9c0,40.2-69.6,73.8-155.5,73.8S98,313.1,98,272.9s69.6-72.8,155.5-72.8S409,231.7,409,271.9z M362,274.3c0,28.2-48.8,51.7-109,51.7s-109-22.8-109-51s48.8-51,109-51S362,246.1,362,274.3z M252.1,309.5c-37.9,0-67.6-14.7-67.6-33.5s29.7-33.5,67.6-33.5c17.7,0,34.3,3.2,46.8,8.9c13.4,6.2,20.8,14.8,20.8,24.2C319.7,294.6,290,309.5,252.1,309.5z M252.1,249.5c-32.9,0-60.6,12.1-60.6,26.5s27.8,26.5,60.6,26.5c16.6,0,32.1-3.1,43.8-8.7c10.7-5.1,16.8-11.7,16.8-18.3C312.7,261.4,285,249.5,252.1,249.5z M250.5,223h-2v-8h2V223z M258.5,215h-2v-8h2V215z M250.5,207h-2v-8h2V207z M258.5,199h-2v-8h2V199z M250.5,191h-2v-8h2V191z M258.5,183h-2v-8h2V183z M250.5,175h-2v-8h2V175z M258.5,167h-2v-8h2V167z M250.5,159h-2v-8h2V159z M258.5,151h-2v-8h2V151z M250.5,143h-2v-8h2V143z M258.5,135h-2v-8h2V135z M250.5,127h-2v-8h2V127z M258.5,119h-2v-8h2V119z M250.5,111h-2v-8h2V111z M258.5,103h-2v-8h2V103z M250.5,95h-2v-8h2V95z M258.5,87h-2v-8h2V87z M250.5,79h-2v-8h2V79z M258.5,71h-2v-8h2V71z M250.5,63h-2v-8h2V63z M258.5,55h-2v-8h2V55z M250.5,47h-2v-5h5v2h-3V47z",
                "rippleEffect": {
                  "period": 15,
                  "scale": 4,
                  "brushType": "fill"
                },
                "hoverAnimation": true,
                "label": {
                  "normal": {
                    "formatter": "{b}",
                    "position": "bottom",
                    "offset": [
                      0,
                      10
                    ],
                    "color": "#fff",
                    "show": true
                  }
                },
                "itemStyle": {
                  "normal": {
                    "color": "#1DE9B6",
                    "shadowBlur": 10,
                    "shadowColor": "#333"
                  }
                },
                "symbolSize": 8,
              }
            ]
          },
          options: [
            {
              series: [
                {
                  data: getWindData(res[0].data)
                },
                {
                  data: convertData(this.aqiData[0])
                },
                {
                  data: myConvertData(res[24].data),
                },
                { //1
                  data: [
                    {coords: [[115.7205430250843, 39.40033419848886],[114.16299955033332, 41.333751729449446]],lineStyle:{color:'#F5AF58'}}
                    , {coords: [[116.5054292898474, 39.3278529985738],[115.33191569664373, 40.45459612248312]],lineStyle:{color:'#4B6F55'}}
                    , {coords: [[116.70963326617274, 39.526159764040514],[114.78433038416517, 40.3081226524911]],lineStyle:{color:'#F4E925'}}
                    , {coords: [[115.98161971138242, 39.49106583200048],[114.6822539428708, 40.937288665257874]],lineStyle:{color:'#F04D31'}}
                    , {coords: [[116.71761426147614, 39.52861144733396],[115.48343663835783, 41.60314619574137]],lineStyle:{color:'#4B6F55'}}
                    , {coords: [[117.01240210779996, 39.76793918854631],[115.51609750000918, 42.5789317216605]],lineStyle:{color:'#F4E925'}}
                    , {coords: [[116.99640912565307, 39.89220839408563], [115.31946509660834, 40.2983432761199]],lineStyle:{color:'#F4E925'}}
                    , {coords: [[117.41457869478904, 40.051508786394855],[115.75369477458912, 40.8162032100679]],lineStyle:{color:'#4B6F55'}}
                    , {coords: [[117.50742737263927, 40.42345402963516],[115.28171948088847, 41.0967029839558]],lineStyle:{color:'#4B6F55'}}
                    , {coords: [[117.66560909158578, 40.55204323362298],[115.24074935780202, 41.26016749785955]],lineStyle:{color:'#4B6F55'}}
                    , {coords: [[117.0845878724791, 39.98809955244307],[115.5854211471497, 40.40345310404948]],lineStyle:{color:'#F4E925'}}

                    , {
                      coords: [[116.395645, 39.929986], [115.31771782857406, 40.857029322301514]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.10670685135706, 41.14007017171146]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.56938357507221, 41.1164135467472]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.01494409279363, 41.34914881693673]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.00334784307844, 42.37752487537683]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.97750105468454, 40.886541665841186]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.99729798972233, 41.717625700374555]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.76511179001086, 40.44678093604192]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.24148316451702, 41.69797607458453]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.65622395344131, 40.64211871501029]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.32146349237249, 40.97337829333188]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.37973159051488, 40.42939881888353]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.45349810321002, 40.3843951318117]],
                      lineStyle: {color: '#4B6F55'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.91473522357494, 41.293986463419515]],
                      lineStyle: {color: '#4B6F55'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "东丽区",
                      "value": [
                        115.7205430250843,
                        39.40033419848886
                      ],
                      "itemStyle": {
                        "color": "rgba(19,198,249,1)"
                      },
                      "visualMap": false
                    },
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "鹰手营子矿区",
                      "value": [
                        117.66560909158578,
                        40.55204323362298
                      ],
                      "visualMap": false
                    },

                    {
                      "name": "崇礼区",
                      "value": [
                        115.31771782857406, 40.857029322301514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "赤城县",
                      "value": [
                        116.10670685135706, 41.14007017171146
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "张北县",
                      "value": [
                        114.56938357507221, 41.1164135467472
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "张北县",
                      "value": [
                        115.01494409279363, 41.34914881693673
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "镶黄旗",
                      "value": [
                        114.00334784307844, 42.37752487537683
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "崇礼区",
                      "value": [
                        114.97750105468454, 40.886541665841186
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "沽源县",
                      "value": [
                        115.99729798972233, 41.717625700374555
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "延庆区",
                      "value": [
                        115.76511179001086, 40.44678093604192
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "太仆寺旗",
                      "value": [
                        115.24148316451702, 41.69797607458453
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "怀安县",
                      "value": [
                        114.65622395344131, 40.64211871501029
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "崇礼区",
                      "value": [
                        115.32146349237249, 40.97337829333188
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "怀来县",
                      "value": [
                        115.37973159051488, 40.42939881888353
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "怀来县",
                      "value": [
                        115.45349810321002, 40.3843951318117
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "张北县",
                      "value": [
                        114.91473522357494, 41.293986463419515
                      ],
                      "visualMap": false
                    }
                  ]
                }
              ]
            },
            {
              series: [
                {
                  data: getWindData(res[1].data)
                },
                {
                  data: convertData(this.aqiData[1])
                },
                {
                  data: myConvertData(res[25].data),
                },
                { // 2
                  data: [
                    {coords: [[116.5054292898474, 39.3278529985738],[115.14721318199716, 40.67554029938644]],lineStyle:{color:'rgba(19,198,249,1)'}}
                    , {coords: [[116.70963326617274, 39.526159764040514],[115.19974671799994, 40.32732405490771]],lineStyle:{color:'rgba(19,198,249,1)'}}
                    , {coords: [[115.98161971138242, 39.49106583200048],[114.65336674614258, 40.858771855613774]],lineStyle:{color:'rgba(19,198,249,1)'}}
                    , {coords: [[116.71761426147614, 39.52861144733396],[114.84843853065374, 41.455883180600836]],lineStyle:{color:'rgba(19,198,249,1)'}}
                    , {coords: [[117.01240210779996, 39.76793918854631],[115.25427333366906, 42.23816540326858]],lineStyle:{color:'rgba(19,198,249,1)'}}
                    , {coords: [[116.99640912565307, 39.89220839408563],[116.07132050966962, 40.95551058936712]],lineStyle:{color:'rgba(19,198,249,1)'}}
                    , {coords: [[117.0845878724791, 39.98809955244307], [116.0668250454707, 40.915777910770885]],lineStyle:{color:'rgba(19,198,249,1)'}}
                    , {coords: [[117.41457869478904, 40.051508786394855],[116.18373533782948, 41.024146833455966]],lineStyle:{color:'rgba(19,198,249,1)'}}
                    , {coords: [[117.50742737263927, 40.42345402963516],[115.4027558956542, 41.438173582183325]],lineStyle:{color:'rgba(19,198,249,1)'}}

                    , {
                      coords: [[116.395645, 39.929986], [115.31340804615758, 40.959929776394425]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.02284036253837, 40.76957001619917]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.5511519724086, 41.07251543831762]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.0248715702866, 41.40612263583789]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [113.9786833681516, 42.30816035884643]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.87650746345679, 40.83112402517203]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.9912789708684, 41.50571729082117]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.8533421015314, 40.467707204386144]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.26299443161562, 41.75452673805403]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.73037917146137, 40.56699499725171]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.47786651115483, 40.7983354312874]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.26217606692771, 40.45745601448024]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.31451616134845, 40.320433777964595]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.15034033425525, 41.2026302873765]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                { // 2
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "鹰手营子矿区",
                      "value": [
                        117.66560909158578,
                        40.55204323362298
                      ],
                      "visualMap": false
                    },

                    {
                      'name': '崇礼区',
                      'value': [115.31340804615758, 40.959929776394425],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [116.02284036253837, 40.76957001619917],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.5511519724086, 41.07251543831762],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.0248715702866, 41.40612263583789],
                      'visualMap': 'false'
                    }, {
                      'name': '镶黄旗',
                      'value': [113.9786833681516, 42.30816035884643],
                      'visualMap': 'false'
                    }, {
                      'name': '桥西区',
                      'value': [114.87650746345679, 40.83112402517203],
                      'visualMap': 'false'
                    }, {
                      'name': '丰宁满族自治县',
                      'value': [115.9912789708684, 41.50571729082117],
                      'visualMap': 'false'
                    }, {
                      'name': '延庆区',
                      'value': [115.8533421015314, 40.467707204386144],
                      'visualMap': 'false'
                    }, {
                      'name': '太仆寺旗',
                      'value': [115.26299443161562, 41.75452673805403],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.73037917146137, 40.56699499725171],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.47786651115483, 40.7983354312874],
                      'visualMap': 'false'
                    }, {
                      'name': '下花园区',
                      'value': [115.26217606692771, 40.45745601448024],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.31451616134845, 40.320433777964595],
                      'visualMap': 'false'
                    }, {'name': '崇礼区', 'value': [115.15034033425525, 41.2026302873765], 'visualMap': 'false'}
                  ]
                }
              ]
            },
            {
              series: [
                {
                  data: getWindData(res[2].data)
                },
                {
                  data: convertData(this.aqiData[2])
                },
                {
                  data: myConvertData(res[26].data),
                },
                { // 3
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)1'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.66560909158578, 40.55204323362298], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986], [115.36298298206916, 40.937160142783114]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.06971410148532, 40.36387413927717]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.59834691076031, 40.9955761369633]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.1146002028709, 41.310977439691726]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.15824749535227, 42.1097863175043]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.96584540197296, 40.609354300720106]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.97868057810672, 41.40246220680008]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.85063673776092, 40.33852657203851]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.33088277716257, 41.61027333439635]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.70633386872647, 40.50840990003264]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.67643908560571, 40.57432456120544]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.24688418966271, 40.433700236640334]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.22456367080805, 40.28794337488274]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.2671817225955, 41.01024008881592]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                { // 3
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "鹰手营子矿区",
                      "value": [
                        117.66560909158578,
                        40.55204323362298
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '崇礼区',
                      'value': [115.36298298206916, 40.937160142783114],
                      'visualMap': 'false'
                    }, {
                      'name': '延庆区',
                      'value': [116.06971410148532, 40.36387413927717],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.59834691076031, 40.9955761369633],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.1146002028709, 41.310977439691726],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.15824749535227, 42.1097863175043],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.96584540197296, 40.609354300720106],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.97868057810672, 41.40246220680008],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.85063673776092, 40.33852657203851],
                      'visualMap': 'false'
                    }, {
                      'name': '太仆寺旗',
                      'value': [115.33088277716257, 41.61027333439635],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.70633386872647, 40.50840990003264],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.67643908560571, 40.57432456120544],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.24688418966271, 40.433700236640334],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.22456367080805, 40.28794337488274],
                      'visualMap': 'false'
                    }, {'name': '崇礼区', 'value': [115.2671817225955, 41.01024008881592], 'visualMap': 'false'}
                  ]
                }
              ]
            },
            {
              series: [
                {
                  data: getWindData(res[3].data)
                },
                {
                  data: convertData(this.aqiData[3])
                },
                {
                  data: myConvertData(res[27].data),
                },
                { // 4
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)4'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.66560909158578, 40.55204323362298], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }

                    , {
                      coords: [[116.395645, 39.929986], [115.40142408173087, 40.9382389829182]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.28765623100799, 40.148990458508564]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.60632165235305, 40.95127077175865]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.19053423032807, 41.19794712972331]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.2329271532529, 41.90340798609333]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.18297984087472, 40.35375479218656]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.01324084356449, 41.38482045698602]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.75062673703243, 40.30546976606221]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.38389995351072, 41.4083341223925]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.70546550208374, 40.45034637321857]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.8658944894226, 40.47554817024682]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.16395948647047, 40.50618839463664]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.14559097623638, 40.270819712877724]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.3422898528672, 40.86637285508792]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                { // 4
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "鹰手营子矿区",
                      "value": [
                        117.66560909158578,
                        40.55204323362298
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '崇礼区',
                      'value': [115.40142408173087, 40.9382389829182],
                      'visualMap': 'false'
                    }, {
                      'name': '昌平区',
                      'value': [116.28765623100799, 40.148990458508564],
                      'visualMap': 'false'
                    }, {
                      'name': '万全区',
                      'value': [114.60632165235305, 40.95127077175865],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.19053423032807, 41.19794712972331],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.2329271532529, 41.90340798609333],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.18297984087472, 40.35375479218656],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [116.01324084356449, 41.38482045698602],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.75062673703243, 40.30546976606221],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.38389995351072, 41.4083341223925],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.70546550208374, 40.45034637321857],
                      'visualMap': 'false'
                    }, {
                      'name': '延庆区',
                      'value': [115.8658944894226, 40.47554817024682],
                      'visualMap': 'false'
                    }, {
                      'name': '下花园区',
                      'value': [115.16395948647047, 40.50618839463664],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.14559097623638, 40.270819712877724],
                      'visualMap': 'false'
                    }, {'name': '崇礼区', 'value': [115.3422898528672, 40.86637285508792], 'visualMap': 'false'}
                  ]
                }
              ]
            },
            {
              series: [
                {
                  data: getWindData(res[4].data)
                },
                {
                  data: convertData(this.aqiData[4])
                },
                {
                  data: myConvertData(res[28].data),
                },
                { // 5
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.66560909158578, 40.55204323362298], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986], [115.41515773331518, 40.950127083154555]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.45970838493528, 40.0008053295937]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.66127594449341, 40.965388604184504]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.2772637994251, 41.08797067712392]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.30710220033548, 41.86793620393658]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.2125072691096, 40.251128853803095]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.03347731052493, 41.3878915984028]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.66529686847275, 40.432230186553]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.37945011935261, 41.28616420934083]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.74889812006779, 40.43643515710629]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.99771726479712, 40.49533784053654]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.09057557940606, 40.56871308192507]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.07381613788885, 40.29349468540513]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.25723161593734, 40.94120765240249]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "鹰手营子矿区",
                      "value": [
                        117.66560909158578,
                        40.55204323362298
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '崇礼区',
                      'value': [115.41515773331518, 40.950127083154555],
                      'visualMap': 'false'
                    }, {
                      'name': '朝阳区',
                      'value': [116.45970838493528, 40.0008053295937],
                      'visualMap': 'false'
                    }, {
                      'name': '万全区',
                      'value': [114.66127594449341, 40.965388604184504],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.2772637994251, 41.08797067712392],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.30710220033548, 41.86793620393658],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.2125072691096, 40.251128853803095],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [116.03347731052493, 41.3878915984028],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.66529686847275, 40.432230186553],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.37945011935261, 41.28616420934083],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.74889812006779, 40.43643515710629],
                      'visualMap': 'false'
                    }, {
                      'name': '延庆区',
                      'value': [115.99771726479712, 40.49533784053654],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.09057557940606, 40.56871308192507],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.07381613788885, 40.29349468540513],
                      'visualMap': 'false'
                    }, {'name': '崇礼区', 'value': [115.25723161593734, 40.94120765240249], 'visualMap': 'false'}
                  ]
                }
              ]
            },
            // 6
            {
              series: [
                {
                  data: getWindData(res[5].data)
                },
                {
                  data: convertData(this.aqiData[5])
                },
                {
                  data: myConvertData(res[29].data),
                },
                { // 6
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }

                    , {
                      coords: [[116.395645, 39.929986], [115.45466705392607, 40.90739787839212]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [116.71620831613184, 39.93312514552622]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.69282717833052, 40.839621103371385]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.38880471942987, 40.91065238504197]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.39238130241634, 41.75504009158784]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.24467326085546, 40.28194989451736]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.9975918285996, 41.3796015623138]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.7036494433865, 40.52816773417349]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.38050016517597, 41.2515564099401]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.77635252047033, 40.32142869218301]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.10248853049856, 40.629728803491496]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.22787505044329, 40.52069099294124]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.10547090639263, 40.36750194063136]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.0548778599969, 41.24454421020966]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '崇礼区',
                      'value': [115.45466705392607, 40.90739787839212],
                      'visualMap': 'false'
                    }, {
                      'name': '通州区',
                      'value': [116.71620831613184, 39.93312514552622],
                      'visualMap': 'false'
                    }, {
                      'name': '万全区',
                      'value': [114.69282717833052, 40.839621103371385],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.38880471942987, 40.91065238504197],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.39238130241634, 41.75504009158784],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.24467326085546, 40.28194989451736],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.9975918285996, 41.3796015623138],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.7036494433865, 40.52816773417349],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.38050016517597, 41.2515564099401],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.77635252047033, 40.32142869218301],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [116.10248853049856, 40.629728803491496],
                      'visualMap': 'false'
                    }, {
                      'name': '下花园区',
                      'value': [115.22787505044329, 40.52069099294124],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.10547090639263, 40.36750194063136],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.0548778599969, 41.24454421020966],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 7
            {
              series: [
                {
                  data: getWindData(res[6].data)
                },
                {
                  data: convertData(this.aqiData[6])
                },
                {
                  data: myConvertData(res[30].data),
                },
                { // 7
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }

                    , {
                      coords: [[116.395645, 39.929986], [115.45466705392607, 40.90739787839212]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.71620831613184, 39.93312514552622]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.69282717833052, 40.839621103371385]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.38880471942987, 40.91065238504197]  ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.39238130241634, 41.75504009158784]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.24467326085546, 40.28194989451736]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.9975918285996, 41.3796015623138]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.7036494433865, 40.52816773417349]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.38050016517597, 41.2515564099401]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.77635252047033, 40.32142869218301]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.10248853049856, 40.629728803491496]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.22787505044329, 40.52069099294124]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.10547090639263, 40.36750194063136]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.0548778599969, 41.24454421020966]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '崇礼区',
                      'value': [115.45466705392607, 40.90739787839212],
                      'visualMap': 'false'
                    }, {
                      'name': '通州区',
                      'value': [116.71620831613184, 39.93312514552622],
                      'visualMap': 'false'
                    }, {
                      'name': '万全区',
                      'value': [114.69282717833052, 40.839621103371385],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.38880471942987, 40.91065238504197],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.39238130241634, 41.75504009158784],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.24467326085546, 40.28194989451736],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.9975918285996, 41.3796015623138],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.7036494433865, 40.52816773417349],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.38050016517597, 41.2515564099401],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.77635252047033, 40.32142869218301],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [116.10248853049856, 40.629728803491496],
                      'visualMap': 'false'
                    }, {
                      'name': '下花园区',
                      'value': [115.22787505044329, 40.52069099294124],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.10547090639263, 40.36750194063136],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.0548778599969, 41.24454421020966],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 8
            {
              series: [
                {
                  data: getWindData(res[7].data)
                },
                {
                  data: convertData(this.aqiData[7])
                },
                {
                  data: myConvertData(res[31].data),
                },
                { // 8
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }

                    , {
                      coords: [[116.395645, 39.929986], [115.63359282847279, 40.50405869545136]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.86924527872686, 40.46643628409847]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.0979507195073, 40.37610722181928]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.81371551878273, 40.232574369492525]  ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.46461799415236, 41.94194620783842]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.36551541149123, 40.39138682682278]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.94708107301295, 41.501748573490374]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.9206338544129, 40.84905433134663]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.4241841432351, 41.28547922624378]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.9900207848822, 40.37882961592408]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.03144697530698, 40.444849154179316]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.58323884236121, 40.50089724427191]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.36417219560846, 40.211182437001916]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.81650790212184, 41.49413565014548]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '怀来县',
                      'value': [115.63359282847279, 40.50405869545136],
                      'visualMap': 'false'
                    }, {
                      'name': '密云区',
                      'value': [116.86924527872686, 40.46643628409847],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.0979507195073, 40.37610722181928],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.81371551878273, 40.232574369492525],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.46461799415236, 41.94194620783842],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.36551541149123, 40.39138682682278],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.94708107301295, 41.501748573490374],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.9206338544129, 40.84905433134663],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.4241841432351, 41.28547922624378],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.9900207848822, 40.37882961592408],
                      'visualMap': 'false'
                    }, {
                      'name': '延庆区',
                      'value': [116.03144697530698, 40.444849154179316],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.58323884236121, 40.50089724427191],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.36417219560846, 40.211182437001916],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.81650790212184, 41.49413565014548],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 9
            {
              series: [
                {
                  data: getWindData(res[8].data)
                },
                {
                  data: convertData(this.aqiData[8])
                },
                {
                  data: myConvertData(res[32].data),
                },
                { // 9
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986], [115.63766821087685, 40.32071709791446]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [116.7086297551324, 40.68463118346281]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.21627374393172, 40.11042893026579]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.91248333743292, 40.08477845163818] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.51718486596141, 41.794197008824106]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.39072282806278, 40.24058837695884]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.87108124241841, 41.64584580193261]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.78599224316764, 40.82330949060922]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.39684421932049, 41.25170469274557]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.02944103473101, 40.32773722022259]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.78540847507533, 40.40834477575865]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.68478273944703, 40.24275534753339]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.28790611588758, 40.04378509357588]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.79111861095338, 41.30668910337933]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '怀来县',
                      'value': [115.63766821087685, 40.32071709791446],
                      'visualMap': 'false'
                    }, {
                      'name': '怀柔区',
                      'value': [116.7086297551324, 40.68463118346281],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.21627374393172, 40.11042893026579],
                      'visualMap': 'false'
                    }, {
                      'name': '门头沟区',
                      'value': [115.91248333743292, 40.08477845163818],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.51718486596141, 41.794197008824106],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.39072282806278, 40.24058837695884],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.87108124241841, 41.64584580193261],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.78599224316764, 40.82330949060922],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.39684421932049, 41.25170469274557],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.02944103473101, 40.32773722022259],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.78540847507533, 40.40834477575865],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.68478273944703, 40.24275534753339],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.28790611588758, 40.04378509357588],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.79111861095338, 41.30668910337933],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 10
            {
              series: [
                {
                  data: getWindData(res[9].data)
                },
                {
                  data: convertData(this.aqiData[9])
                },
                {
                  data: myConvertData(res[33].data),
                },
                { // 10
                  data: [
                    {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.66560909158578, 40.55204323362298], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }

                    , {
                      coords: [[116.395645, 39.929986], [115.41350494542787, 40.877132241579794]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.54029338125612, 40.673147584756755]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.80809435731342, 41.10732720194787]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.30904177856542, 41.561771899655696] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.2035825501283, 42.08874385167866]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.4246851253761, 40.717072462908256]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.84297932803484, 41.17451401885153]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.74624845422387, 40.15559511336441]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.5658979039647, 41.66611900529389]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.95980071221166, 39.99826281774789]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.94854361096054, 40.482968399784724]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.10087681078465, 40.23487748821671]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.84371172943274, 40.3757466987951]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.04499103421111, 40.63973116044697]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "鹰手营子矿区",
                      "value": [
                        117.66560909158578,
                        40.55204323362298
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '崇礼区',
                      'value': [115.41350494542787, 40.877132241579794],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.54029338125612, 40.673147584756755],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.80809435731342, 41.10732720194787],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.30904177856542, 41.561771899655696],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.2035825501283, 42.08874385167866],
                      'visualMap': 'false'
                    }, {
                      'name': '万全区',
                      'value': [114.4246851253761, 40.717072462908256],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.84297932803484, 41.17451401885153],
                      'visualMap': 'false'
                    }, {
                      'name': '门头沟区',
                      'value': [115.74624845422387, 40.15559511336441],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.5658979039647, 41.66611900529389],
                      'visualMap': 'false'
                    }, {
                      'name': '蔚县',
                      'value': [114.95980071221166, 39.99826281774789],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.94854361096054, 40.482968399784724],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.10087681078465, 40.23487748821671],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.84371172943274, 40.3757466987951],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.04499103421111, 40.63973116044697],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 11
            {
              series: [
                {
                  data: getWindData(res[10].data)
                },
                {
                  data: convertData(this.aqiData[10])
                },
                {
                  data: myConvertData(res[34].data),
                },
                { // 11
                  data: [
                    {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.66560909158578, 40.55204323362298], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986], [115.50511849736695, 40.84822194871054]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.32207034667091, 40.91036438445937]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [114.9195995662273, 41.10463133410791]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.37541432843156, 41.49539242077614] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.26265622773604, 42.03694198210502]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.7379737547542, 40.65133480988553]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [116.16639220294525, 40.88061020825496]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.68185370474212, 40.134183570728666]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.46771604264973, 41.47884427633479]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.09611019366208, 40.02896893311972]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],[114.94530379929796, 40.41183979326142]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.0571307968615, 40.31095188774957]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.66701337413838, 40.44134072750851]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.8222883740961, 40.42514404138159]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "鹰手营子矿区",
                      "value": [
                        117.66560909158578,
                        40.55204323362298
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '赤城县',
                      'value': [115.50511849736695, 40.84822194871054],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.32207034667091, 40.91036438445937],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.9195995662273, 41.10463133410791],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.37541432843156, 41.49539242077614],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.26265622773604, 42.03694198210502],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.7379737547542, 40.65133480988553],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [116.16639220294525, 40.88061020825496],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.68185370474212, 40.134183570728666],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.46771604264973, 41.47884427633479],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.09611019366208, 40.02896893311972],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.94530379929796, 40.41183979326142],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.0571307968615, 40.31095188774957],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.66701337413838, 40.44134072750851],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.8222883740961, 40.42514404138159],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 12
            {
              series: [
                {
                  data: getWindData(res[11].data)
                },
                {
                  data: convertData(this.aqiData[11])
                },
                {
                  data: myConvertData(res[35].data),
                },
                { // 12
                  data: [
                    {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.66560909158578, 40.55204323362298], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986], [115.37104147610302, 40.64808549575419]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.51930375586659, 40.80874872601308]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.76592452845327, 41.106248456408956]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.161863211577, 41.29818970804259] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.11664779193785, 42.0502774634759]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.87601140399265, 40.53735555604234]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [116.46779975269192, 40.981423543403494]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.50150727111593, 40.236303529126005]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.23074941266935, 41.198401904942926]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.00453387538134, 40.03727893155203]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.10450855344726, 40.48005449262172]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.90411016813759, 40.34885015844792]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.6062613275549, 40.62991440496808]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.90667189691969, 40.4197691723027]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "鹰手营子矿区",
                      "value": [
                        117.66560909158578,
                        40.55204323362298
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.37104147610302, 40.64808549575419],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.51930375586659, 40.80874872601308],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.76592452845327, 41.106248456408956],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.161863211577, 41.29818970804259],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.11664779193785, 42.0502774634759],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.87601140399265, 40.53735555604234],
                      'visualMap': 'false'
                    }, {
                      'name': '丰宁满族自治县',
                      'value': [116.46779975269192, 40.981423543403494],
                      'visualMap': 'false'
                    }, {
                      'name': '怀来县',
                      'value': [115.50150727111593, 40.236303529126005],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.23074941266935, 41.198401904942926],
                      'visualMap': 'false'
                    }, {
                      'name': '蔚县',
                      'value': [115.00453387538134, 40.03727893155203],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.10450855344726, 40.48005449262172],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.90411016813759, 40.34885015844792],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.6062613275549, 40.62991440496808],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.90667189691969, 40.4197691723027],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 13
            {
              series: [
                {
                  data: getWindData(res[12].data)
                },
                {
                  data: convertData(this.aqiData[12])
                },
                {
                  data: myConvertData(res[36].data),
                },
                { // 13
                  data: [
                    {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }

                    , {
                      coords: [[116.395645, 39.929986],  [115.26345795737352, 40.50682708805349]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.74197056306528, 40.83613073706942]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.53866690336591, 40.979246243175865]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.9789139088592, 40.96779659651108] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [113.95890179549734, 41.98845420584318]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.68747378095185, 40.66756182429989]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [116.41116815341974, 41.001638002275335]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.20992446765766, 40.327757328740645]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.1885998010401, 41.13421751067436]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.74664397808839, 40.09614107373953]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.2919391158728, 40.55981627830165]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.78376717112567, 40.45671091962918]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.68198035178654, 40.6800092494709]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.98647541806129, 40.70371172884015]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '下花园区',
                      'value': [115.26345795737352, 40.50682708805349],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.74197056306528, 40.83613073706942],
                      'visualMap': 'false'
                    }, {
                      'name': '万全区',
                      'value': [114.53866690336591, 40.979246243175865],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [114.9789139088592, 40.96779659651108],
                      'visualMap': 'false'
                    }, {
                      'name': '镶黄旗',
                      'value': [113.95890179549734, 41.98845420584318],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.68747378095185, 40.66756182429989],
                      'visualMap': 'false'
                    }, {
                      'name': '丰宁满族自治县',
                      'value': [116.41116815341974, 41.001638002275335],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.20992446765766, 40.327757328740645],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.1885998010401, 41.13421751067436],
                      'visualMap': 'false'
                    }, {
                      'name': '蔚县',
                      'value': [114.74664397808839, 40.09614107373953],
                      'visualMap': 'false'
                    }, {
                      'name': '下花园区',
                      'value': [115.2919391158728, 40.55981627830165],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.78376717112567, 40.45671091962918],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.68198035178654, 40.6800092494709],
                      'visualMap': 'false'
                    }, {
                      'name': '桥东区',
                      'value': [114.98647541806129, 40.70371172884015],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 14
            {
              series: [
                {
                  data: getWindData(res[13].data)
                },
                {
                  data: convertData(this.aqiData[13])
                },
                {
                  data: myConvertData(res[37].data),
                },
                { // 14
                  data: [
                    {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986],  [115.34523917682428, 40.63404264052764]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.73707807577377, 41.06567141748426]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.75059642269935, 40.83258073133726]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.24519523506771, 40.763603195948185] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.06021336614279, 41.98893603282603]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.63082767327464, 40.64216258362356]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [116.37663644715937, 41.18991923099093]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.25523403696602, 40.62622107449575]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.18634466152804, 41.238367352061964]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.76171664963263, 40.21773822832355]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.46435627006001, 40.724377583441594]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.75071263699279, 40.65640805747016]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.82358104498161, 40.77215033405656]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.78682341558464, 41.14587720414133]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.34523917682428, 40.63404264052764],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.73707807577377, 41.06567141748426],
                      'visualMap': 'false'
                    }, {
                      'name': '万全区',
                      'value': [114.75059642269935, 40.83258073133726],
                      'visualMap': 'false'
                    }, {
                      'name': '桥东区',
                      'value': [115.24519523506771, 40.763603195948185],
                      'visualMap': 'false'
                    }, {
                      'name': '镶黄旗',
                      'value': [114.06021336614279, 41.98893603282603],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.63082767327464, 40.64216258362356],
                      'visualMap': 'false'
                    }, {
                      'name': '丰宁满族自治县',
                      'value': [116.37663644715937, 41.18991923099093],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.25523403696602, 40.62622107449575],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.18634466152804, 41.238367352061964],
                      'visualMap': 'false'
                    }, {
                      'name': '阳原县',
                      'value': [114.76171664963263, 40.21773822832355],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.46435627006001, 40.724377583441594],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.75071263699279, 40.65640805747016],
                      'visualMap': 'false'
                    }, {
                      'name': '桥西区',
                      'value': [114.82358104498161, 40.77215033405656],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.78682341558464, 41.14587720414133],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 15
            {
              series: [
                {
                  data: getWindData(res[14].data)
                },
                {
                  data: convertData(this.aqiData[14])
                },
                {
                  data: myConvertData(res[38].data),
                },
                { //15
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986],   [115.34653291220688, 40.68896622484794]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.61894905679303, 41.25798685551741]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.90776179636805, 40.813743499429336]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.27487185464157, 40.66437685019837] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.11189199338087, 42.02853172443749]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.73713597512577, 40.626690099133064]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [116.31411716876686, 41.38952713017743]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.36492611477078, 40.82580636700536]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.97300807149189, 41.3362993374187]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.82378802692796, 40.553158406013615]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.49089556603573, 40.832857414106826]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.82531413345939, 40.854552673649614]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.00040524993626, 40.88395282845878]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.59913170674119, 41.34030406542664]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                { // 15
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.34653291220688, 40.68896622484794],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.61894905679303, 41.25798685551741],
                      'visualMap': 'false'
                    }, {
                      'name': '桥东区',
                      'value': [114.90776179636805, 40.813743499429336],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.27487185464157, 40.66437685019837],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.11189199338087, 42.02853172443749],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.73713597512577, 40.626690099133064],
                      'visualMap': 'false'
                    }, {
                      'name': '丰宁满族自治县',
                      'value': [116.31411716876686, 41.38952713017743],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.36492611477078, 40.82580636700536],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.97300807149189, 41.3362993374187],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.82378802692796, 40.553158406013615],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.49089556603573, 40.832857414106826],
                      'visualMap': 'false'
                    }, {
                      'name': '桥西区',
                      'value': [114.82531413345939, 40.854552673649614],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.00040524993626, 40.88395282845878],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.59913170674119, 41.34030406542664],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 16
            {
              series: [
                {
                  data: getWindData(res[15].data)
                },
                {
                  data: convertData(this.aqiData[15])
                },
                {
                  data: myConvertData(res[39].data),
                },
                { // 16
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986],  [115.17463044861722, 40.615207205180845]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.65368601495531, 41.47536645924223]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.79153006992792, 40.6916722526926]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.01546280760137, 40.57569195635049] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.12270161544052, 41.96996830624764]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.78530886629837, 40.61391768545868]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [116.10053340840847, 41.53711713683505]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.38098866926217, 41.003935627614766]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.83681601837752, 41.32939081987429]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.77514997070355, 40.67208508523492]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986], [115.47693097530892, 40.83642187132277]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.98227399975273, 40.99654378607766]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.16955544154234, 41.00792151826218]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.56606042053834, 41.219544620073066]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.17463044861722, 40.615207205180845],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.65368601495531, 41.47536645924223],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.79153006992792, 40.6916722526926],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.01546280760137, 40.57569195635049],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.12270161544052, 41.96996830624764],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.78530886629837, 40.61391768545868],
                      'visualMap': 'false'
                    }, {
                      'name': '丰宁满族自治县',
                      'value': [116.10053340840847, 41.53711713683505],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.38098866926217, 41.003935627614766],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.83681601837752, 41.32939081987429],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.77514997070355, 40.67208508523492],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.47693097530892, 40.83642187132277],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [114.98227399975273, 40.99654378607766],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.16955544154234, 41.00792151826218],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.56606042053834, 41.219544620073066],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 17
            { // 17
              series: [
                {
                  data: getWindData(res[16].data)
                },
                {
                  data: convertData(this.aqiData[16])
                },
                {
                  data: myConvertData(res[40].data),
                },
                { // 16
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986],  [115.0706450076522, 40.59523971550548]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.7807059426711, 41.87033089859703]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.67336540862516, 40.5767716350203]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.94852996500664, 40.43901355561512] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.14912480356992, 41.846834295935224]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.78923586205916, 40.50813103520883]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.84601842742985, 41.65646092666847]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.36858963685287, 41.112232383779514]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.87100270492554, 41.20578679216395]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.66147338472624, 40.63185712183037]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.6433174623614, 40.84622427017271]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.15692939117234, 41.08851892221529]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.32784410054501, 41.09917401922906]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.71859356220841, 41.044068626890216]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.0706450076522, 40.59523971550548],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.7807059426711, 41.87033089859703],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.67336540862516, 40.5767716350203],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.94852996500664, 40.43901355561512],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.14912480356992, 41.846834295935224],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.78923586205916, 40.50813103520883],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.84601842742985, 41.65646092666847],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.36858963685287, 41.112232383779514],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.87100270492554, 41.20578679216395],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.66147338472624, 40.63185712183037],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.6433174623614, 40.84622427017271],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.15692939117234, 41.08851892221529],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.32784410054501, 41.09917401922906],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.71859356220841, 41.044068626890216],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 18
            { // 18
              series: [
                {
                  data: getWindData(res[17].data)
                },
                {
                  data: convertData(this.aqiData[17])
                },
                {
                  data: myConvertData(res[41].data),
                },
                { // 16
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }

                    , {
                      coords: [[116.395645, 39.929986],  [115.11128342600841, 40.54962066254985]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.98517646483303, 42.264753302616526]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.71878553010706, 40.44479334903334]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.06725969534924, 40.21705542518164] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.1264733095645, 41.67567131063418]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.79477064690838, 40.32600543698092]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],      [115.83906924542195, 41.50260107855126]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.47411140466319, 41.1551801604616]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.96733643932566, 41.0693288329547]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.75315153180722, 40.54853154724053]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.7558175952368, 40.956836072506455]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.25029451820392, 41.03851128440152]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.39411119020217, 41.09853912106087]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.83958100873544, 41.17879021139813]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.11128342600841, 40.54962066254985],
                      'visualMap': 'false'
                    }, {
                      'name': '正蓝旗',
                      'value': [115.98517646483303, 42.264753302616526],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.71878553010706, 40.44479334903334],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.06725969534924, 40.21705542518164],
                      'visualMap': 'false'
                    }, {
                      'name': '商都县',
                      'value': [114.1264733095645, 41.67567131063418],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.79477064690838, 40.32600543698092],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.83906924542195, 41.50260107855126],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.47411140466319, 41.1551801604616],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [114.96733643932566, 41.0693288329547],
                      'visualMap': 'false'
                    }, {
                      'name': '怀安县',
                      'value': [114.75315153180722, 40.54853154724053],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.7558175952368, 40.956836072506455],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.25029451820392, 41.03851128440152],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.39411119020217, 41.09853912106087],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.83958100873544, 41.17879021139813],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 19
            {
              series: [
                {
                  data: getWindData(res[18].data)
                },
                {
                  data: convertData(this.aqiData[18])
                },
                {
                  data: myConvertData(res[42].data),
                },
                { // 16
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986],   [115.3416699315272, 40.472445191024704]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.86669910142282, 42.23859788282089]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.00927996372124, 40.30850901980731]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.4546381814448, 40.16621873755688] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.1921069530658, 41.6417011240938]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.91243369798174, 40.139887415002676]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.68351034363754, 41.5547756504807]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.54238926772666, 41.10006228872368]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.11269561526173, 41.139393790648285]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.88213702419276, 40.540133212445376]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.69079016054864, 41.01976475566321]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.29726602635634, 40.97155341013404]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.50727081423489, 40.93419402113829]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.79729706021479, 41.36915932543049]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '怀来县',
                      'value': [115.3416699315272, 40.472445191024704],
                      'visualMap': 'false'
                    }, {
                      'name': '正蓝旗',
                      'value': [115.86669910142282, 42.23859788282089],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.00927996372124, 40.30850901980731],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.4546381814448, 40.16621873755688],
                      'visualMap': 'false'
                    }, {
                      'name': '商都县',
                      'value': [114.1921069530658, 41.6417011240938],
                      'visualMap': 'false'
                    }, {
                      'name': '蔚县',
                      'value': [114.91243369798174, 40.139887415002676],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.68351034363754, 41.5547756504807],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.54238926772666, 41.10006228872368],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.11269561526173, 41.139393790648285],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.88213702419276, 40.540133212445376],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.69079016054864, 41.01976475566321],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.29726602635634, 40.97155341013404],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.50727081423489, 40.93419402113829],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.79729706021479, 41.36915932543049],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 20
            { // 20
              series: [
                {
                  data: getWindData(res[19].data)
                },
                {
                  data: convertData(this.aqiData[19])
                },
                {
                  data: myConvertData(res[43].data),
                },
                {
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986],   [115.46317632901255, 40.67236743078759]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.85137878658844, 42.20393665866358]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.06725673891654, 40.597187481619635]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],      [115.44696969596791, 40.593634493683304] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.0691397822005, 41.77538400657615]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.88331601455975, 40.262523317772356]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.26311587428947, 41.56375908502015]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.59577241354968, 41.030911719000734]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.10280508697531, 41.3212557653326]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.91101953045987, 40.567752604208906]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.66034672790653, 41.0065370807147]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.34161247404114, 40.91257018059958]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.55819286532027, 40.832474953966674]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.72597235082368, 41.398872419733586]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.46317632901255, 40.67236743078759],
                      'visualMap': 'false'
                    }, {
                      'name': '正蓝旗',
                      'value': [115.85137878658844, 42.20393665866358],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.06725673891654, 40.597187481619635],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.44696969596791, 40.593634493683304],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.0691397822005, 41.77538400657615],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.88331601455975, 40.262523317772356],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.26311587428947, 41.56375908502015],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.59577241354968, 41.030911719000734],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.10280508697531, 41.3212557653326],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.91101953045987, 40.567752604208906],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.66034672790653, 41.0065370807147],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.34161247404114, 40.91257018059958],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.55819286532027, 40.832474953966674],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [114.72597235082368, 41.398872419733586],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 21
            { // 21
              series: [
                {
                  data: getWindData(res[20].data)
                },
                {
                  data: convertData(this.aqiData[20])
                },
                {
                  data: myConvertData(res[44].data),
                },
                { // 16
                  data: [
                    {
                      coords: [[116.5054292898474, 39.3278529985738], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.66560909158578, 40.55204323362298], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986],    [115.40974121424209, 40.65166445683127]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.83299089080516, 42.081247979534005]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.99899098558853, 40.623377098044]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],       [115.30191215907553, 40.58407620209782] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.00322054961973, 41.852376900742264]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.91094315738876, 40.32369208527916]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.02126089266768, 41.65797103025414]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.69731302393767, 40.98872725565503]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.06051910233289, 41.3397454864925]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.92915590762489, 40.61562727052572] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.62324874074231, 40.96158796875913]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.42615028848775, 40.99657720609892]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.55076300472814, 40.86267156150009]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.56926905083438, 41.51318679572514]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "涞水县",
                      "value": [
                        116.5054292898474,
                        39.3278529985738
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.40974121424209, 40.65166445683127],
                      'visualMap': 'false'
                    }, {
                      'name': '正蓝旗',
                      'value': [115.83299089080516, 42.081247979534005],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.99899098558853, 40.623377098044],
                      'visualMap': 'false'
                    }, {
                      'name': '下花园区',
                      'value': [115.30191215907553, 40.58407620209782],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.00322054961973, 41.852376900742264],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.91094315738876, 40.32369208527916],
                      'visualMap': 'false'
                    }, {
                      'name': '太仆寺旗',
                      'value': [115.02126089266768, 41.65797103025414],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.69731302393767, 40.98872725565503],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.06051910233289, 41.3397454864925],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.92915590762489, 40.61562727052572],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.62324874074231, 40.96158796875913],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.42615028848775, 40.99657720609892],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.55076300472814, 40.86267156150009],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.56926905083438, 41.51318679572514],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 22
            { // 22
              series: [
                {
                  data: getWindData(res[21].data)
                },
                {
                  data: convertData(this.aqiData[21])
                },
                {
                  data: myConvertData(res[45].data),
                },
                {
                  data: [
                    {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }



                    , {
                      coords: [[116.395645, 39.929986],    [115.38014945741655, 40.6305103906022]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.89826988439454, 41.83630418317749]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.98284086453691, 40.5697009540886]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],      [115.32961188394047, 40.57915120609015] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],      [114.021859050221, 41.84844142203151]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.98606539941858, 40.27619899041358]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.88682412759208, 41.70875918206014]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [115.76230608268509, 41.00118714084127]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.10795584245318, 41.34569570303782]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.8865989510546, 40.545900904034866] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.6707497879206, 40.86435832425835]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.41164418027341, 41.090216768856315]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.54731743732346, 40.829209702312625]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],  [114.61287256863115, 41.45132547803176]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.38014945741655, 40.6305103906022],
                      'visualMap': 'false'
                    }, {
                      'name': '沽源县',
                      'value': [115.89826988439454, 41.83630418317749],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.98284086453691, 40.5697009540886],
                      'visualMap': 'false'
                    }, {
                      'name': '下花园区',
                      'value': [115.32961188394047, 40.57915120609015],
                      'visualMap': 'false'
                    }, {
                      'name': '化德县',
                      'value': [114.021859050221, 41.84844142203151],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [114.98606539941858, 40.27619899041358],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.88682412759208, 41.70875918206014],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.76230608268509, 41.00118714084127],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.10795584245318, 41.34569570303782],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.8865989510546, 40.545900904034866],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.6707497879206, 40.86435832425835],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.41164418027341, 41.090216768856315],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.54731743732346, 40.829209702312625],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.61287256863115, 41.45132547803176],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 23
            { //23
              series: [
                {
                  data: getWindData(res[22].data)
                },
                {
                  data: convertData(this.aqiData[22])
                },
                {
                  data: myConvertData(res[46].data),
                },
                {
                  data: [
                    {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }



                    , {
                      coords: [[116.395645, 39.929986],    [115.40135877211401, 40.65819977865616]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.99902469504703, 41.86428804114466]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.99279255923238, 40.62025138178878]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],      [115.3138740330982, 40.66025638670699] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],      [114.00137811763842, 41.98513115825836]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.05439157495168, 40.36713723288235]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.78319662527787, 41.7195602683962]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.80197636780763, 41.037310452727425]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.08657088041683, 41.44323452488179]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.93874123788149, 40.569880695499144] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.77976430514889, 40.87336769578431]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.38806365223226, 41.11280523839867]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.52122623401605, 40.828477338076205]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.7056178371889, 41.47430451174676]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.40135877211401, 40.65819977865616],
                      'visualMap': 'false'
                    }, {
                      'name': '多伦县',
                      'value': [115.99902469504703, 41.86428804114466],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.99279255923238, 40.62025138178878],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.3138740330982, 40.66025638670699],
                      'visualMap': 'false'
                    }, {
                      'name': '镶黄旗',
                      'value': [114.00137811763842, 41.98513115825836],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.05439157495168, 40.36713723288235],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.78319662527787, 41.7195602683962],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.80197636780763, 41.037310452727425],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.08657088041683, 41.44323452488179],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.93874123788149, 40.569880695499144],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.77976430514889, 40.87336769578431],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.38806365223226, 41.11280523839867],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.52122623401605, 40.828477338076205],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.7056178371889, 41.47430451174676],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
            // 24
            { // 24
              series: [
                {
                  data: getWindData(res[23].data)
                },
                {
                  data: convertData(this.aqiData[23])
                },
                {
                  data: myConvertData(res[47].data),
                },
                {
                  data: [
                    {
                      coords: [[116.70963326617274, 39.526159764040514], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[115.98161971138242, 39.49106583200048], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.71761426147614, 39.52861144733396], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.01240210779996, 39.76793918854631], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[116.99640912565307, 39.89220839408563], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.41457869478904, 40.051508786394855], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.50742737263927, 40.42345402963516], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }
                    , {
                      coords: [[117.0845878724791, 39.98809955244307], [116.395645, 39.929986]],
                      lineStyle: {color: 'rgba(19,198,249,1)'}
                    }


                    , {
                      coords: [[116.395645, 39.929986],    [115.40135877211401, 40.65819977865616]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],      [115.99902469504703, 41.86428804114466]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.99279255923238, 40.62025138178878]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],      [115.3138740330982, 40.66025638670699] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [114.00137811763842, 41.98513115825836]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [115.05439157495168, 40.36713723288235]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.78319662527787, 41.7195602683962]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.80197636780763, 41.037310452727425]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.08657088041683, 41.44323452488179]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [114.93874123788149, 40.569880695499144] ],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],    [115.77976430514889, 40.87336769578431]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.38806365223226, 41.11280523839867]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],     [115.52122623401605, 40.828477338076205]],
                      lineStyle: {color: '#F04D31'}
                    }
                    , {
                      coords: [[116.395645, 39.929986],   [114.7056178371889, 41.47430451174676]],
                      lineStyle: {color: '#F04D31'}
                    }
                  ]
                },
                {
                  "data": [
                    {
                      "name": "永清县",
                      "value": [
                        116.70963326617274,
                        39.526159764040514
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "曹妃甸区",
                      "value": [
                        115.98161971138242,
                        39.49106583200048
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蔚县",
                      "value": [
                        116.71761426147614,
                        39.52861144733396
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "涿鹿县",
                      "value": [
                        117.01240210779996,
                        39.76793918854631
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "大厂回族自治县",
                      "value": [
                        116.99640912565307,
                        39.89220839408563
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "蓟州区",
                      "value": [
                        117.41457869478904,
                        40.051508786394855
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "兴隆县",
                      "value": [
                        117.50742737263927,
                        40.42345402963516
                      ],
                      "visualMap": false
                    },
                    {
                      "name": "三河市",
                      "value": [
                        117.0845878724791,
                        39.98809955244307
                      ],
                      "visualMap": false
                    },
                    {
                      'name': '宣化区',
                      'value': [115.40135877211401, 40.65819977865616],
                      'visualMap': 'false'
                    }, {
                      'name': '多伦县',
                      'value': [115.99902469504703, 41.86428804114466],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.99279255923238, 40.62025138178878],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [115.3138740330982, 40.66025638670699],
                      'visualMap': 'false'
                    }, {
                      'name': '镶黄旗',
                      'value': [114.00137811763842, 41.98513115825836],
                      'visualMap': 'false'
                    }, {
                      'name': '涿鹿县',
                      'value': [115.05439157495168, 40.36713723288235],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.78319662527787, 41.7195602683962],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.80197636780763, 41.037310452727425],
                      'visualMap': 'false'
                    }, {
                      'name': '张北县',
                      'value': [115.08657088041683, 41.44323452488179],
                      'visualMap': 'false'
                    }, {
                      'name': '宣化区',
                      'value': [114.93874123788149, 40.569880695499144],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.77976430514889, 40.87336769578431],
                      'visualMap': 'false'
                    }, {
                      'name': '崇礼区',
                      'value': [115.38806365223226, 41.11280523839867],
                      'visualMap': 'false'
                    }, {
                      'name': '赤城县',
                      'value': [115.52122623401605, 40.828477338076205],
                      'visualMap': 'false'
                    }, {
                      'name': '康保县',
                      'value': [114.7056178371889, 41.47430451174676],
                      'visualMap': 'false'
                    }
                  ]
                }
              ]
            },
          ]
        })
      })

      if (option && typeof option === 'object') {
        this.myChart.setOption(option);
      }

    }
  }
}
</script>

<style scoped>
#container {
  position: relative;
}
</style>