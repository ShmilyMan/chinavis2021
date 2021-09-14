<template>
  <div id="china_map" style='width:100%;height:96%;' ref='chart'> </div>
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

  import provincedata from "../../../../../public/province/provincedata"

  export default {
    name: "ProvinceMap",
    mounted() {
      this.$nextTick(() => {
        loadBMap("m6R4RiIh4QQ6mxyNk14NcjUNSmWOt8h9").then(() => {
          this.initMap()
        })
      })
    },
    data() {
      return {
        myChart: ''
      }
    },
    props: {
      pdata: {
        type: Array
      },
      geoCoordMap: {
        type: Object
      },
      center: {
        type: Array
      },
      zoom: {
        type: Number
      }
    },
    watch: {
      center: function (val, oldVal) {
        this.initMap()
      },
      geoCoordMap: function (val, oldVal) {
        this.initMap()
      }
    },
    methods: {
      initMap() {
        var dom = document.getElementById("china_map")
        if (this.myChart != null && this.myChart != "" && this.myChart != undefined){
          this.myChart.dispose();
        }
        this.myChart = this.$echarts.init(this.$refs.chart)
        // this.myChart = echarts.init(dom);
        var app = {};
        var option;
        option = {
          baseOption: {
            tooltip : {
              trigger: 'item'
            },
            timeline: {
              bottom: '4%',
              left: '10%',
              right: '10%',
              autoPlay: false,
              data: ['2013','2014','2015','2016','2017','2018']
            },
            bmap: {
              center: this.center,
              zoom: this.zoom,
              roam: true,
              mapStyle: {
                styleJson: [{
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#27438B'
                  }
                }, {
                  'featureType': 'land',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#141d4cff'
                  }
                }, {
                  'featureType': 'railway',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#D3402C'
                  }
                }, {
                  "featureType": "highway",
                  "elementType": "all",
                  "stylers": {
                    "color": "#3955E3"
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#141d4cff'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#141d4cff'
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
                    "color": "#4B6F55"
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
                    "visibility": "off"
                  }
                }, {
                  'featureType': 'local',
                  'elementType': 'all',
                  'stylers': {
                    "visibility": "off"
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
                    'color': '#05A0FC'
                  }
                }, {
                  'featureType': 'building',
                  'elementType': 'all',
                  'stylers': {
                    "visibility": "off"
                  }
                }, {
                  'featureType': 'label',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#999999'
                  }
                }, {
                  "featureType": "district",
                  "elementType": "all",
                  "stylers": {
                    "color": "#141d4cff"
                  }
                }, {
                  "featureType": "town",
                  "elementType": "all",
                  "stylers": {
                    "color": "#141d4cff"
                  }
                }, {
                  "featureType": "districtlabel",
                  "elementType": "all",
                  "stylers": {
                    "visibility": "off"
                  }
                }]
              }
            },
            series : [
              {
                name: 'AQI',
                type: 'scatter',
                coordinateSystem: 'bmap',
                // data: this.convertData(this.pdata),
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
                    formatter (value){
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
                name: 'AQI - Top 5',
                type: 'scatter',
                coordinateSystem: 'bmap',
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
                    formatter (value){
                      return value.data.value[2]
                    }
                  },
                },
                itemStyle: {
                  color: '#ED5858', //标志颜色
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              }
            ]
          },
          options: [
            {
              series: [
                {
                  data: this.convertData(this.pdata)
                },
                {
                  data: this.convertData(this.pdata.sort(function (a, b) {
                    return b.value - a.value;
                  }).slice(0, 5))
                }
              ]
            },
            {
              series: [
                {
                  data: this.convertData(provincedata[1].data)
                },
                {
                  data: this.convertData(provincedata[1].data.sort(function (a, b) {
                    return b.value - a.value;
                  }).slice(0, 5))
                }
              ]
            },
            {
              series: [
                {
                  data: this.convertData(provincedata[2].data)
                },
                {
                  data: this.convertData(provincedata[2].data.sort(function (a, b) {
                    return b.value - a.value;
                  }).slice(0, 5))
                }
              ]
            },
            {
              series: [
                {
                  data: this.convertData(provincedata[3].data)
                },
                {
                  data: this.convertData(provincedata[3].data.sort(function (a, b) {
                    return b.value - a.value;
                  }).slice(0, 5))
                }
              ]
            },
            {
              series: [
                {
                  data: this.convertData(provincedata[4].data)
                },
                {
                  data: this.convertData(provincedata[4].data.sort(function (a, b) {
                    return b.value - a.value;
                  }).slice(0, 5))
                }
              ]
            },
            {
              series: [
                {
                  data: this.convertData(provincedata[5].data)
                },
                {
                  data: this.convertData(provincedata[5].data.sort(function (a, b) {
                    return b.value - a.value;
                  }).slice(0, 5))
                }
              ]
            },
          ]
        };
        if (option && typeof option === 'object') {
          this.myChart.setOption(option);
        }

        this.myChart.on('timelineChanged',data => {
          // console.log(data.currentIndex);
          let currentIndex = data.currentIndex
          let year = '2013'
          if (currentIndex == 0) {
            year = '2013'
          }
          if (currentIndex == 1) {
            year = '2014'
          }
          if (currentIndex == 2) {
            year = '2015'
          }
          if (currentIndex == 3) {
            year = '2016'
          }
          if (currentIndex == 4) {
            year = '2017'
          }
          if (currentIndex == 5) {
            year = '2018'
          }
          // console.log(year);
          this.$emit('emitYear',year)
        })
      },
      convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = this.geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      }
    }
  }
</script>

<style scoped>

</style>