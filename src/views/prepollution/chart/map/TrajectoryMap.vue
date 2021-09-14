<template>
  <div id="china_map" style='width:100%; height:100%;' ref='tremap_chart'> </div>
</template>

<script>
  import * as echarts from 'echarts'
  require('echarts-gl/dist/echarts-gl.min')
  require('echarts-stat/dist/ecStat.min')
  require('echarts/dist/echarts.min')
  require('echarts/dist/extension/dataTool.min')
  require('echarts-map/js/china')
  require('echarts-map/js/world')
  require('echarts/extension/bmap/bmap')
  import {loadBMap} from "@/assets/js/util/map"
  export default {
    name: "TrajectoryMap",
    watch: {
      mapData: function (val, oldVal) {
        this.initChart()
      },
      coverData: function (val, oldVal) {
        this.initChart()
      }
    },
    props: {
      mapData: {
        type: Object,
        default: function () {
          return {
            lineData: [
              {coords: [[115.7205430250843, 39.40033419848886],[114.16299955033332, 41.333751729449446]],lineStyle:{color:'#4ab2e5'}}
              , {coords: [[116.5054292898474, 39.3278529985738],[115.33191569664373, 40.45459612248312]],lineStyle:{color:'#4ab2e5'}}
              , {coords: [[116.70963326617274, 39.526159764040514],[114.78433038416517, 40.3081226524911]],lineStyle:{color:'#4ab2e5'}}
              , {coords: [[115.98161971138242, 39.49106583200048],[114.6822539428708, 40.937288665257874]],lineStyle:{color:'#4ab2e5'}}
              , {coords: [[116.71761426147614, 39.52861144733396],[115.48343663835783, 41.60314619574137]],lineStyle:{color:'#f56321'}}
              , {coords: [[117.01240210779996, 39.76793918854631],[115.51609750000918, 42.5789317216605]],lineStyle:{color:'#f56321'}}
              , {coords: [[116.99640912565307, 39.89220839408563], [115.31946509660834, 40.2983432761199]],lineStyle:{color:'#f56321'}}
              , {coords: [[117.41457869478904, 40.051508786394855],[115.75369477458912, 40.8162032100679]],lineStyle:{color:'#f5a305'}}
              , {coords: [[117.50742737263927, 40.42345402963516],[115.28171948088847, 41.0967029839558]],lineStyle:{color:'#f5a305'}}
              , {coords: [[117.66560909158578, 40.55204323362298],[115.24074935780202, 41.26016749785955]],lineStyle:{color:'#f5a305'}}
              , {coords: [[117.0845878724791, 39.98809955244307],[115.5854211471497, 40.40345310404948]],lineStyle:{color:'#f5a305'}}
            ],
            nameData: [
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
                "itemStyle": {
                  "color": "rgba(19,198,249,1)"
                },
                "visualMap": false
              },
              {
                "name": "永清县",
                "value": [
                  116.70963326617274,
                  39.526159764040514
                ],
                "itemStyle": {
                  "color": "rgba(19,198,249,1)"
                },
                "visualMap": false
              },
              {
                "name": "曹妃甸区",
                "value": [
                  115.98161971138242,
                  39.49106583200048
                ],
                "itemStyle": {
                  "color": "rgba(19,198,249,1)"
                },
                "visualMap": false
              },
              {
                "name": "蔚县",
                "value": [
                  116.71761426147614,
                  39.52861144733396
                ],
                "itemStyle": {
                  "color": "#f56321"
                },
                "visualMap": false
              },
              {
                "name": "涿鹿县",
                "value": [
                  117.01240210779996,
                  39.76793918854631
                ],
                "itemStyle": {
                  "color": "#f56321"
                },
                "visualMap": false
              },
              {
                "name": "大厂回族自治县",
                "value": [
                  116.99640912565307,
                  39.89220839408563
                ],
                "itemStyle": {
                  "color": "#f56321"
                },
                "visualMap": false
              },
              {
                "name": "蓟州区",
                "value": [
                  117.41457869478904,
                  40.051508786394855
                ],
                "itemStyle": {
                  "color": "#f5a305"
                },
                "visualMap": false
              },
              {
                "name": "兴隆县",
                "value": [
                  117.50742737263927,
                  40.42345402963516
                ],
                "itemStyle": {
                  "color": "#f5a305"
                },
                "visualMap": false
              },
              {
                "name": "鹰手营子矿区",
                "value": [
                  117.66560909158578,
                  40.55204323362298
                ],
                "itemStyle": {
                  "color": "#f5a305"
                },
                "visualMap": false
              },
              {
                "name": "三河市",
                "value": [
                  117.0845878724791,
                  39.98809955244307
                ],
                "itemStyle": {
                  "color": "#f5a305"
                },
                "visualMap": false
              },



              {
                "name": "尚义县",
                "value": [
                  114.16299955033332,
                  41.333751729449446
                ],
                "itemStyle": {
                  "color": "rgba(19,198,249,1)"
                },
                "visualMap": false
              },
              {
                "name": "怀来县",
                "value": [
                  115.33191569664373,
                  40.45459612248312
                ],
                "itemStyle": {
                  "color": "rgba(19,198,249,1)"
                },
                "visualMap": false
              },
              {
                "name": "宣化区",
                "value": [
                  114.78433038416517,
                  40.3081226524911
                ],
                "itemStyle": {
                  "color": "rgba(19,198,249,1)"
                },
                "visualMap": false
              },
              {
                "name": "万全区",
                "value": [
                  114.6822539428708,
                  40.937288665257874
                ],
                "itemStyle": {
                  "color": "rgba(19,198,249,1)"
                },
                "visualMap": false
              },
              {
                "name": "沽源县",
                "value": [
                  115.48343663835783,
                  41.60314619574137
                ],
                "itemStyle": {
                  "color": "#f56321"
                },
                "visualMap": false
              },
              {
                "name": "正蓝旗",
                "value": [
                  115.51609750000918,
                  42.5789317216605
                ],
                "itemStyle": {
                  "color": "#f56321"
                },
                "visualMap": false
              },
              {
                "name": "涿鹿县",
                "value": [
                  115.31946509660834, 40.2983432761199
                ],
                "itemStyle": {
                  "color": "#f56321"
                },
                "visualMap": false
              },
              {
                "name": "赤城县",
                "value": [
                  115.75369477458912, 40.8162032100679
                ],
                "itemStyle": {
                  "color": "#f5a305"
                },
                "visualMap": false
              },
              {
                "name": "崇礼区",
                "value": [
                  115.28171948088847, 41.0967029839558
                ],
                "itemStyle": {
                  "color": "#f5a305"
                },
                "visualMap": false
              },
              {
                "name": "张北县",
                "value": [
                  115.24074935780202, 41.26016749785955
                ],
                "itemStyle": {
                  "color": "#f5a305"
                },
                "visualMap": false
              },
              {
                "name": "怀来县",
                "value": [
                  115.5854211471497, 40.40345310404948
                ],
                "itemStyle": {
                  "color": "#f5a305"
                },
                "visualMap": false
              },
            ]
          }
        }
      },
      coverData: {
        type: Object,
        default: function () {
          return {
            covData: [
              {name: '东丽区', value: 142.58},
              {name: '涞水县', value: 38.63},
              {name: '永清县', value: 61.69},
              {name: '曹妃甸区', value: 155.87},
              {name: '蔚县', value: 36.82},
              {name: '逐鹿县', value: 51.29},
              {name: '大厂回族自治县', value: 66.05},
              {name: '蓟州区', value: 37.63},
              {name: '兴隆县', value: 14.51},
              {name: '鹰手营子矿区', value: 14.8},
              {name: '三河市', value: 56.44},

              {name: '尚义县', value: 13.85},
              {name: '怀来县', value: 14.7},
              {name: '宣化区', value: 16.37},
              {name: '万全区', value: 13.72},
              {name: '沽源县', value: 13.17},
              {name: '正蓝旗', value: 12.67},
              {name: '涿鹿县', value: 18.77},
              {name: '赤城县', value: 14.66},
              {name: '崇礼区', value: 13.46},
              {name: '张北县', value: 13.44},
            ],
            covGeoData: {
              '东丽区':[115.7205430250843, 39.40033419848886],
              '涞水县':[116.5054292898474, 39.3278529985738],
              '永清县':[116.70963326617274, 39.526159764040514],
              '曹妃甸区':[115.98161971138242, 39.49106583200048],
              '蔚县':[116.71761426147614, 39.52861144733396],
              '逐鹿县':[117.01240210779996, 39.76793918854631],
              '大厂回族自治县':[116.99640912565307, 39.89220839408563],
              '蓟州区':[117.41457869478904, 40.051508786394855],
              '兴隆县':[117.50742737263927, 40.42345402963516],
              '鹰手营子矿区':[117.66560909158578, 40.55204323362298],
              '三河市':[117.0845878724791, 39.98809955244307],


              '尚义县':[114.16299955033332,
                41.333751729449446],
              '怀来县':[115.33191569664373,
                40.45459612248312],
              '宣化区':[114.78433038416517,
                40.3081226524911],
              '万全区':[114.6822539428708,
                40.937288665257874],
              '沽源县':[115.48343663835783,
                41.60314619574137],
              '正蓝旗':[115.51609750000918,
                42.5789317216605],
              '涿鹿县':[115.31946509660834, 40.2983432761199],
              '赤城县':[115.75369477458912, 40.8162032100679],
              '崇礼区':[115.28171948088847, 41.0967029839558],
              '张北县':[115.24074935780202, 41.26016749785955],
            }
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
        loadBMap("m6R4RiIh4QQ6mxyNk14NcjUNSmWOt8h9").then(() => {
          if (this.myChart != null && this.myChart != "" && this.myChart != undefined){
            this.myChart.dispose();
          }
          this.myChart = this.$echarts.init(this.$refs.tremap_chart)

          var option;
          var convertData = data => {
            var res = [];
            for (var i = 0; i < data.length; i++) {
              var geoCoord = this.coverData.covGeoData[data[i].name];
              if (geoCoord) {
                res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value)
                });
              }
            }
            return res;
          }
          option = {
            baseOption: {
              tooltip : {
                trigger: 'item'
              },

              visualMap: [{
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
                center: [116.205645,40.929986],
                zoom: 8,
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
              series : [
                {
                  type: 'lines',
                  coordinateSystem: 'bmap',
                  zlevel: 2,
                  effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                  },
                  lineStyle: {
                    normal: {
                      color:'#1DE9B6'
                      ,
                      width: 1, //线条宽度
                      opacity: 0.1, //尾迹线条透明度
                      curveness: .3 //尾迹线条曲直度
                    }
                  },
                  data: this.mapData.lineData
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
                  "symbolSize": 5,
                  "data": this.mapData.nameData
                },
                {
                  name: 'AQI',
                  type: 'effectScatter',
                  coordinateSystem: 'bmap',
                  data: convertData(this.coverData.covData),
                  symbolSize: function (val) {
                    return val[2] / 5;
                  },
                  encode: {
                    value: 2
                  },
                  label: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                  },
                  emphasis: {
                    label: {
                      show: true
                    }
                  }
                }
              ]
            },
          };
          if (option && typeof option === 'object') {
            this.myChart.setOption(option);
          }
        })
      }
    }
  }
</script>

<style scoped>
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}
</style>