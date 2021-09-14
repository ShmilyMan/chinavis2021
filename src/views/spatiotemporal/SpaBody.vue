<template>
  <div>
    <el-row style="margin-top: 3px">
      <el-col :span="16"  style="padding-right: 10px">
        <div class="grid-content bg-purple mapbox">
          <div class="panel">
            <!--标题-->
            <el-row>
              <el-col :span="24">
                <!--标题-->
                <div class="grid-content bg-purple-dark map_title">
                  <h2>污染时空态势图</h2>
                </div>
              </el-col>
            </el-row>
            <div class="grid-content bg-purple" style="height:600px; float: top">
              <!-- 空气质量 -->
              <el-button class="button1" type="primary" autofocus @click="aqiClick">AQI</el-button>
              <el-button class="button2" type="primary" @click="pm25Click">PM2.5</el-button>
              <el-button class="button3" type="primary" @click="pm10Click">PM10</el-button>
              <el-button class="button4" type="primary" @click="so2Click">SO2</el-button>
              <el-button class="button5" type="primary" @click="no2Click">NO2</el-button>
              <el-button class="button6" type="primary" @click="coClick">CO</el-button>
              <el-button class="button7" type="primary" @click="o3Click">O3</el-button>
              <!--饼图-->
              <el-popover
                  popper-class="pip-popover"
                  placement="right"
                  width="400"
                  trigger="click">
                  <aqi-pip />
                <el-button slot="reference" class="pip-click"></el-button>
              </el-popover>

              <!-- 地区 -->
              <el-button type="success" class="button10"  @click="ncClick">华北</el-button>
              <el-button type="success" class="button11"  @click="ecClick">华东</el-button>
              <el-button type="success" class="button12"  @click="scClick">华南</el-button>
              <el-button type="success" class="button13"  @click="ccClick">华中</el-button>
              <el-button type="success" class="button14"  @click="nwClick">西北</el-button>
              <el-button type="success" class="button15"  @click="swClick">西南</el-button>
              <el-button type="success" class="button16"  @click="neClick">东北</el-button>
              <el-button type="success" class="button17"  @click="wholeClick">全国</el-button>
              <!-- 地图 -->
              <div id="china_map" class="map">

              </div>
            </div>
            <div class="panel-footer"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light tagbox">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark tag1box">
                <div class="panel">
                  <!--标题-->
                  <el-row>
                    <el-col :span="24">
                      <div class="grid-content bg-purple-dark tag1_title">
                        <h2>省市AQI年对比图</h2>
                      </div>
                    </el-col>
                  </el-row>
                  <air-quality
                    :con-data="conData"
                    :loc-name="locName"
                    @cityDataClick="changeAriIndexData"
                  />
                  <div class="panel-footer"></div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row style="margin-top: 8px">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark tag2box">
                <div class="panel">
                  <!--标题-->
                  <el-row>
                    <el-col :span="24">
                      <div class="grid-content bg-purple-dark tag2_title">
                        <h2>AQI与温度月关系图</h2>
                      </div>
                    </el-col>
                  </el-row>
                  <air-index style="margin-top: 35px"
                    :index-data="indexData"
                    :name="baseTitle"
                  />
                  <div class="panel-footer"></div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import AirQuality from "@/views/spatiotemporal/chart/AirQuality"
  import AirIndex from "@/views/spatiotemporal/chart/AirIndex"
  import AqiPip from "@/views/spatiotemporal/chart/AqiPip"
  import {loadBMap} from "@/assets/js/util/map"
  import * as echarts from "echarts"
  import axios from "axios"
  import wholeCountry from "../../../public/spatiotemporal/airquality/wholeCountry"
  import map_point from "../../../public/spatiotemporal/map_point/map_point"
  import air_index from "../../../public/spatiotemporal/airindex/air_index"
  import province from "../../../public/spatiotemporal/airindex/province"
  import province2 from "../../../public/spatiotemporal/airindex/province2"
  import province3 from "../../../public/spatiotemporal/airindex/province3"

  require('echarts-gl/dist/echarts-gl.min')
  require('echarts-stat/dist/ecStat.min')
  require('echarts/dist/echarts.min')
  require('echarts/dist/extension/dataTool.min')
  require('echarts/extension/bmap/bmap')

  export default {
    name: "SpaBody",
    mounted() {
      this.$nextTick(() => {
        loadBMap("m6R4RiIh4QQ6mxyNk14NcjUNSmWOt8h9").then(() => {
          this.initAqiMap(0,'aqi')
        })
      })
    },
    watch: {
      //会在任何被侦听的对象的属性值改变时被调用，不论其被嵌套多深
      dataChange: {
        handler: function (val, oldVal) {
          let time = val.time             // 时间
          let locName = val.locName       // 地区
          let baseTitle = val.baseTitle   // 污染物或指标

          // 污染物的热力图
          for(let i = 0; i < wholeCountry.length; i++) {
            if (wholeCountry[i].locName == locName &&
                wholeCountry[i].time == time &&
                wholeCountry[i].baseTitle == baseTitle) {
              this.conData = wholeCountry[i].conData
            }
          }
          // 折线图
          for(let i = 0; i < air_index.length; i++) {
            if (air_index[i].locName == locName &&
                air_index[i].year == time &&
                air_index[i].baseTitle == baseTitle) {
              this.indexData = air_index[i].indexData
            }
          }

          // 全国主要城市各个污染物
          for (let i = 0; i < map_point; i++) {
            if (map_point[i].baseTitle == 'AQI') {
              this.mapData = map_point[0]
            }
            if (map_point[i].baseTitle == 'CO') {
              this.mapData = map_point[1]
            }
            if (map_point[i].baseTitle == 'NO2') {
              this.mapData = map_point[2]
            }
            if (map_point[i].baseTitle == 'O3') {
              this.mapData = map_point[3]
            }
            if (map_point[i].baseTitle == 'PM2.5') {
              this.mapData = map_point[4]
            }
            if (map_point[i].baseTitle == 'PM10') {
              this.mapData = map_point[5]
            }
            if (map_point[i].baseTitle == 'SO2') {
              this.mapData = map_point[6]
            }
          }

          // 根据地区名改变center，zoom
          // if (locName == '华北') {
          //   this.zoom = 6
          //   this.center = [116.395645,39.929986]
          // }
          // if (locName == '华东') {
          //   this.zoom = 6
          //   this.center = [118.059134,36.804685]
          // }
          // if (locName == '华南') {
          //   this.zoom = 6
          //   this.center = [113.30765,23.120049]
          // }
          // if (locName == '华中') {
          //   this.zoom = 6
          //   this.center = [114.3162,30.581084]
          // }
          // if (locName == '西北') {
          //   this.zoom = 6
          //   this.center = [86.041865,44.308259]
          // }
          // if (locName == '西南') {
          //   this.zoom = 6
          //   this.center = [104.067923,30.679943]
          // }
          // if (locName == '东北') {
          //   this.zoom = 6
          //   this.center = [125.313642,43.898338]
          // }
          // if (locName == '全国') {
          //   this.zoom = 5
          //   this.center = [104.114129, 37.550339]
          // }
        },
        deep: true,
      },
      centerChange: function (val, oldVal) {
        if (val.baseTitle == 'AQI') {
          this.initAqiMap(0,'aqi')
        }
        if (val.baseTitle == 'PM2.5') {
          this.initAqiMap(1,'PM2.5')
        }
        if (val.baseTitle == 'PM10') {
          this.initAqiMap(2,'PM10')
        }
        if (val.baseTitle == 'SO2') {
          this.initAqiMap(3,'SO2')
        }
        if (val.baseTitle == 'NO2') {
          this.initAqiMap(4,'NO2')
        }
        if (val.baseTitle == 'CO') {
          this.initAqiMap(5,'CO')
        }
        if (val.baseTitle == 'O3') {
          this.initAqiMap(6,'O3')
        }
      }
    },
    data() {
      return {
        geoCoordMap: {
          '海门':[121.15,31.89],
          '鄂尔多斯':[109.781327,39.608266],
          '招远':[120.38,37.35],
          '舟山':[122.207216,29.985295],
          '齐齐哈尔':[123.97,47.33],
          '盐城':[120.13,33.38],
          '赤峰':[118.87,42.28],
          '青岛':[120.33,36.07],
          '乳山':[121.52,36.89],
          '金昌':[102.188043,38.520089],
          '泉州':[118.58,24.93],
          '莱西':[120.53,36.86],
          '日照':[119.46,35.42],
          '胶南':[119.97,35.88],
          '南通':[121.05,32.08],
          '拉萨':[91.11,29.97],
          '云浮':[112.02,22.93],
          '梅州':[116.1,24.55],
          '文登':[122.05,37.2],
          '上海':[121.48,31.22],
          '攀枝花':[101.718637,26.582347],
          '威海':[122.1,37.5],
          '承德':[117.93,40.97],
          '厦门':[118.1,24.46],
          '汕尾':[115.375279,22.786211],
          '潮州':[116.63,23.68],
          '丹东':[124.37,40.13],
          '太仓':[121.1,31.45],
          '曲靖':[103.79,25.51],
          '烟台':[121.39,37.52],
          '福州':[119.3,26.08],
          '瓦房店':[121.979603,39.627114],
          '即墨':[120.45,36.38],
          '抚顺':[123.97,41.97],
          '玉溪':[102.52,24.35],
          '张家口':[114.87,40.82],
          '阳泉':[113.57,37.85],
          '莱州':[119.942327,37.177017],
          '湖州':[120.1,30.86],
          '汕头':[116.69,23.39],
          '昆山':[120.95,31.39],
          '宁波':[121.56,29.86],
          '湛江':[110.359377,21.270708],
          '揭阳':[116.35,23.55],
          '荣成':[122.41,37.16],
          '连云港':[119.16,34.59],
          '葫芦岛':[120.836932,40.711052],
          '常熟':[120.74,31.64],
          '东莞':[113.75,23.04],
          '河源':[114.68,23.73],
          '淮安':[119.15,33.5],
          '泰州':[119.9,32.49],
          '南宁':[108.33,22.84],
          '营口':[122.18,40.65],
          '惠州':[114.4,23.09],
          '江阴':[120.26,31.91],
          '蓬莱':[120.75,37.8],
          '韶关':[113.62,24.84],
          '嘉峪关':[98.289152,39.77313],
          '广州':[113.23,23.16],
          '延安':[109.47,36.6],
          '太原':[112.53,37.87],
          '清远':[113.01,23.7],
          '中山':[113.38,22.52],
          '昆明':[102.73,25.04],
          '寿光':[118.73,36.86],
          '盘锦':[122.070714,41.119997],
          '长治':[113.08,36.18],
          '深圳':[114.07,22.62],
          '珠海':[113.52,22.3],
          '宿迁':[118.3,33.96],
          '咸阳':[108.72,34.36],
          '铜川':[109.11,35.09],
          '平度':[119.97,36.77],
          '佛山':[113.11,23.05],
          '海口':[110.35,20.02],
          '江门':[113.06,22.61],
          '章丘':[117.53,36.72],
          '肇庆':[112.44,23.05],
          '大连':[121.62,38.92],
          '临汾':[111.5,36.08],
          '吴江':[120.63,31.16],
          '石嘴山':[106.39,39.04],
          '沈阳':[123.38,41.8],
          '苏州':[120.62,31.32],
          '茂名':[110.88,21.68],
          '嘉兴':[120.76,30.77],
          '长春':[125.35,43.88],
          '胶州':[120.03336,36.264622],
          '银川':[106.27,38.47],
          '张家港':[120.555821,31.875428],
          '三门峡':[111.19,34.76],
          '锦州':[121.15,41.13],
          '南昌':[115.89,28.68],
          '柳州':[109.4,24.33],
          '三亚':[109.511909,18.252847],
          '自贡':[104.778442,29.33903],
          '吉林':[126.57,43.87],
          '阳江':[111.95,21.85],
          '泸州':[105.39,28.91],
          '西宁':[101.74,36.56],
          '宜宾':[104.56,29.77],
          '呼和浩特':[111.65,40.82],
          '成都':[104.06,30.67],
          '大同':[113.3,40.12],
          '镇江':[119.44,32.2],
          '桂林':[110.28,25.29],
          '张家界':[110.479191,29.117096],
          '宜兴':[119.82,31.36],
          '北海':[109.12,21.49],
          '西安':[108.95,34.27],
          '金坛':[119.56,31.74],
          '东营':[118.49,37.46],
          '牡丹江':[129.58,44.6],
          '遵义':[106.9,27.7],
          '绍兴':[120.58,30.01],
          '扬州':[119.42,32.39],
          '常州':[119.95,31.79],
          '潍坊':[119.1,36.62],
          '重庆':[106.54,29.59],
          '台州':[121.420757,28.656386],
          '南京':[118.78,32.04],
          '滨州':[118.03,37.36],
          '贵阳':[106.71,26.57],
          '无锡':[120.29,31.59],
          '本溪':[123.73,41.3],
          '克拉玛依':[84.77,45.59],
          '渭南':[109.5,34.52],
          '马鞍山':[118.48,31.56],
          '宝鸡':[107.15,34.38],
          '焦作':[113.21,35.24],
          '句容':[119.16,31.95],
          '北京':[116.46,39.92],
          '徐州':[117.2,34.26],
          '衡水':[115.72,37.72],
          '包头':[110,40.58],
          '绵阳':[104.73,31.48],
          '乌鲁木齐':[87.68,43.77],
          '枣庄':[117.57,34.86],
          '杭州':[120.19,30.26],
          '淄博':[118.05,36.78],
          '鞍山':[122.85,41.12],
          '溧阳':[119.48,31.43],
          '库尔勒':[86.06,41.68],
          '安阳':[114.35,36.1],
          '开封':[114.35,34.79],
          '济南':[117,36.65],
          '德阳':[104.37,31.13],
          '温州':[120.65,28.01],
          '九江':[115.97,29.71],
          '邯郸':[114.47,36.6],
          '临安':[119.72,30.23],
          '兰州':[103.73,36.03],
          '沧州':[116.83,38.33],
          '临沂':[118.35,35.05],
          '南充':[106.110698,30.837793],
          '天津':[117.2,39.13],
          '富阳':[119.95,30.07],
          '泰安':[117.13,36.18],
          '诸暨':[120.23,29.71],
          '郑州':[113.65,34.76],
          '哈尔滨':[126.63,45.75],
          '聊城':[115.97,36.45],
          '芜湖':[118.38,31.33],
          '唐山':[118.02,39.63],
          '平顶山':[113.29,33.75],
          '邢台':[114.48,37.05],
          '德州':[116.29,37.45],
          '济宁':[116.59,35.38],
          '荆州':[112.239741,30.335165],
          '宜昌':[111.3,30.7],
          '义乌':[120.06,29.32],
          '丽水':[119.92,28.45],
          '洛阳':[112.44,34.7],
          '秦皇岛':[119.57,39.95],
          '株洲':[113.16,27.83],
          '石家庄':[114.48,38.03],
          '莱芜':[117.67,36.19],
          '常德':[111.69,29.05],
          '保定':[115.48,38.85],
          '湘潭':[112.91,27.87],
          '金华':[119.64,29.12],
          '岳阳':[113.09,29.37],
          '长沙':[113,28.21],
          '衢州':[118.88,28.97],
          '廊坊':[116.7,39.53],
          '菏泽':[115.480656,35.23375],
          '合肥':[117.27,31.86],
          '武汉':[114.31,30.52],
          '大庆':[125.03,46.58]
        },
        mapData: map_point[0],
        baseTitle: 'AQI',
        topTitle: 'AQI - TOP10',
        allData: '',
        locName: '全国',
        conData: wholeCountry[0].conData,
        time: '2013',
        indexData: {
          // 各个污染物指标的数据
          contaminantsData: [
            ['2013-01', 42.26],
            ['2013-02', 31.64],
            ['2013-03', 28.22],
            ['2013-04', 29.79],
            ['2013-05', 32.71],
            ['2013-06', 27.59],
            ['2013-07', 22.69],
            ['2013-08', 25.76],
            ['2013-09', 32.46],
            ['2013-10', 32.19],
            ['2013-11', 27.42],
            ['2013-12', 37.86]
          ],
          // 各个污染物指标对应的温度的数据
          temperatureData: [
            ['2013-01', 264.64],
            ['2013-02', 267.79],
            ['2013-03', 275.11],
            ['2013-04', 279.71],
            ['2013-05', 286.31],
            ['2013-06', 290.74],
            ['2013-07', 292.79],
            ['2013-08', 292.3],
            ['2013-09', 286.87],
            ['2013-10', 281.22],
            ['2013-11', 273.24],
            ['2013-12', 267.54]
          ]
        },
        center: [104.114129, 37.550339],
        zoom: 5,
        my_province: '',
        myChart: '',
        isShow: false,
        provinceName: '全国'
      }
    },
    components: {
      AirQuality,
      AirIndex,
      AqiPip
    },
    methods: {
      initAqiMap(index,index_name) {
        var dom = document.getElementById("china_map")
        if (this.myChart != null && this.myChart != "" && this.myChart != undefined){
          this.myChart.dispose();
        }
        this.myChart = echarts.init(dom);
        let option;
        axios.all([
            axios({
              url: '/spatiotemporal/ave_year_json/2013.json'
            }),
            axios({
              url: '/spatiotemporal/ave_year_json/2014.json'
            }),
            axios({
              url: '/spatiotemporal/ave_year_json/2015.json'
            }),
            axios({
              url: '/spatiotemporal/ave_year_json/2016.json'
            }),
            axios({
              url: '/spatiotemporal/ave_year_json/2017.json'
            }),
            axios({
              url: '/spatiotemporal/ave_year_json/2018.json'
            })
        ]).then(res => {
          this.allData = res[0].data
          // 查找展示的污染物名称
          let getContaminantName = function(index) {
            switch (index) {
              case 0:
                return "aqi"
              case 1:
                return "PM2.5"
              case 2:
                return "PM10"
              case 3:
                return "SO2"
              case 4:
                return "NO2"
              case 5:
                return "CO"
              case 6:
                return "O3"
            }

          }
          // 计算覆盖热力图的数据
          let myConvertData = function (data) {
            let res = []
            for(let i = 0; i < data.length; i++){
              res.push({
                value: [parseFloat(data[i]["lon"]), parseFloat(data[i]["lat"]), parseFloat(data[i][index_name])]
              });
            }
            return res
          }
          // 计算图表的最大值
          let getMaxValue = function(data, index) {
            let typeName = getContaminantName(index)
            return Math.ceil(Math.max.apply(Math, data.map(item => {
              return item[typeName]
            })))
          }

          option = {
            baseOption: {
              tooltip : {
                trigger: 'item'
              },
              timeline: {
                bottom: '6%',
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
              visualMap: {
                type: 'piecewise',
                min: 0,
                max: 350,
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
                  color: ['#4B6F55', '#C9C458', '#F5AF58', '#F04D31','#E855E8','#791A27']
                },
                textStyle: {
                  color: '#fff',
                  fontWeight: 'bolder'
                },
                calculable: false,
                bottom: 10,
                left: 'right',
                right: 1
              },
              series : [
                {
                  name: this.baseTitle,
                  type: 'scatter',
                  coordinateSystem: 'bmap',
                  // data: this.convertData(this.mapData),
                  symbol: 'pin',
                  symbolSize: function (val) {
                    return val[2] / 2.5;
                  },
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
                  emphasis: {
                    label: {
                      show: true
                    }
                  }
                },
                {
                  name: this.topTitle,
                  type: 'effectScatter',
                  coordinateSystem: 'bmap',
                  /*data: this.convertData(this.mapData.sort(function (a, b) {
                    return b.value - a.value;
                  }).slice(0, 6)),*/
                  symbolSize: function (val) {
                    return val[2] / 8;
                  },
                  encode: {
                    value: 2
                  },
                  showEffectOn: 'render',
                  rippleEffect: {
                    brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  color: '#E34A47',
                  label: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                  },
                  itemStyle: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                  },
                  zlevel: 1
                },
                {
                  type: 'heatmap',
                  coordinateSystem: 'bmap',
                  pointSize: 2.4,
                  data: myConvertData(this.allData),
                  blurSize: 5
                }
              ]
            },
            options: [
              {
                series: [
                  {
                    data: this.convertData(this.mapData.year_2013.mapData)
                  },
                  {
                    data: this.convertData(this.mapData.year_2013.mapData.sort(function (a, b) {
                      return b.value - a.value;
                    }).slice(0, 10))
                  },
                  {
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    pointSize: 2.4,
                    data: myConvertData(res[0].data),
                    blurSize: 5
                  }
                ]
              },
              {
                series: [
                  {
                    data: this.convertData(this.mapData.year_2014.mapData)
                  },
                  {
                    data: this.convertData(this.mapData.year_2014.mapData.sort(function (a, b) {
                      return b.value - a.value;
                    }).slice(0, 10))
                  },
                  {
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    pointSize: 2.4,
                    data: myConvertData(res[1].data),
                    blurSize: 5
                  }
                ]
              },
              {
                series: [
                  {
                    data: this.convertData(this.mapData.year_2015.mapData)
                  },
                  {
                    data: this.convertData(this.mapData.year_2015.mapData.sort(function (a, b) {
                      return b.value - a.value;
                    }).slice(0, 10))
                  },
                  {
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    pointSize: 2.4,
                    data: myConvertData(res[2].data),
                    blurSize: 5
                  }
                ]
              },
              {
                series: [
                  {
                    data: this.convertData(this.mapData.year_2016.mapData)
                  },
                  {
                    data: this.convertData(this.mapData.year_2016.mapData.sort(function (a, b) {
                      return b.value - a.value;
                    }).slice(0, 10))
                  },
                  {
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    pointSize: 2.4,
                    data: myConvertData(res[3].data),
                    blurSize: 5
                  }
                ]
              },
              {
                series: [
                  {
                    data: this.convertData(this.mapData.year_2017.mapData)
                  },
                  {
                    data: this.convertData(this.mapData.year_2017.mapData.sort(function (a, b) {
                      return b.value - a.value;
                    }).slice(0, 10))
                  },
                  {
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    pointSize: 2.4,
                    data: myConvertData(res[4].data),
                    blurSize: 5
                  }
                ]
              },
              {
                series: [
                  {
                    data: this.convertData(this.mapData.year_2018.mapData)
                  },
                  {
                    data: this.convertData(this.mapData.year_2018.mapData.sort(function (a, b) {
                      return b.value - a.value;
                    }).slice(0, 10))
                  },
                  {
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    pointSize: 2.4,
                    data: myConvertData(res[5].data),
                    blurSize: 5
                  }
                ]
              }
            ]
          };
          if (option && typeof option === 'object') {
            this.myChart.setOption(option);
          }

          this.myChart.on('timelineChanged',data => {
            index = data.currentIndex
            switch (index) {
              case 0:
                // 2013
                this.time = '2013'
                break
              case 1:
                // 2014
                this.time = '2014'
                break
              case 2:
                // 2015
                this.time = '2015'
                break
              case 3:
                // 2016
                this.time = '2016'
                break
              case 4:
                // 2017
                this.time = '2017'
                break
              case 5:
                // 2018
                this.time = '2018'
                break
            }
          })
        })
      },
      // 处理图表中的data数据
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
      },
      aqiClick() {
        this.baseTitle = 'AQI'
        this.topTitle = 'AQI - TOP10'
        this.initAqiMap(0,'aqi')
        // this.barTitle = '全国/**省PM2.5排名'
      },
      pm25Click() {
        this.baseTitle = 'PM2.5'
        this.topTitle = 'PM2.5 - TOP10'
        this.initAqiMap(1,'PM2.5')
        // this.barTitle = '全国/**省空气质量排名'
      },
      pm10Click() {
        this.baseTitle = 'PM10'
        this.topTitle = 'PM10 - TOP10'
        this.initAqiMap(2,'PM10')
      },
      so2Click() {
        this.baseTitle = 'SO2'
        this.topTitle = 'SO2 - TOP10'
        this.initAqiMap(3,'SO2')
      },
      no2Click() {
        this.baseTitle = 'NO2'
        this.topTitle = 'NO2 - TOP10'
        this.initAqiMap(4,'NO2')
      },
      coClick() {
        this.baseTitle = 'CO'
        this.topTitle = 'CO - TOP10'
        this.initAqiMap(5,'CO')
      },
      o3Click() {
        this.baseTitle = 'O3'
        this.topTitle = 'O3 - TOP10'
        this.initAqiMap(6,'O3')
      },

      // 处理排名图表的数据
      ncClick() {
        this.isShow = true
        this.locName = '华北'
        // this.conName = ['北京','天津','河北','山西','内蒙古']
        // this.conData = [30, 50, 35, 60, 54]
      },
      ecClick() {
        this.isShow = true
        this.locName = '华东'
        // this.conName = ['山东','江苏','安徽','浙江','福建','上海','台湾']
        // this.conData = [21, 31, 35, 60, 54, 80, 40]
      },
      scClick() {
        this.isShow = true
        this.locName = '华南'
        // this.conName = ['广东','广西','海南','香港','澳门']
        // this.conData = [55, 33, 35, 60, 54]
      },
      ccClick() {
        this.isShow = true
        this.locName = '华中'
        // this.conName = ['湖北','湖南','河南','江西']
        // this.conData = [45, 25, 35, 60]
      },
      nwClick() {
        this.isShow = true
        this.locName = '西北'
        // this.conName = ['宁夏','新疆','青海','陕西','甘肃']
        // this.conData = [15, 30, 35, 60, 55]
      },
      swClick() {
        this.isShow = true
        this.locName = '西南'
        // this.conName = ['四川','云南','贵州','西藏','重庆']
        // this.conData = [35, 30, 35, 60, 55]
      },
      neClick() {
        this.isShow = true
        this.locName = '东北'
        // this.conName = ['辽宁','吉林','黑龙江']
        // this.conData = [45, 30, 35, 60, 55]
      },
      wholeClick() {
        this.isShow = true
        this.locName = '全国'
      },

      // 柱状图和折线图联动
      changeAriIndexData(data) {
        this.isShow = false
        this.provinceName = data
        for (let i = 0; i < province.length; i++) {
          if (this.time == province[i].year &&
              this.baseTitle == province[i].baseTitle &&
              data == province[i].locName) {
            this.indexData = province[i].indexData
          }
        }

        for (let i = 0; i < province2.length; i++) {
          if (this.time == province2[i].year &&
              this.baseTitle == province2[i].baseTitle &&
              data == province2[i].locName) {
            this.indexData = province2[i].indexData
          }
        }
        for (let i = 0; i < province3.length; i++) {
          if (this.time == province3[i].year &&
              this.baseTitle == province3[i].baseTitle &&
              data == province3[i].locName) {
            this.indexData = province3[i].indexData
          }
        }
      }
    },
    computed: {
      // 各个空气质量指标的城市排名
      rankName: function () {
        return this.locName + this.time + '年' +  this.baseTitle + '排名图'
      },
      dataChange: function () {
        const {time, locName, baseTitle} = this;
        return {time, locName, baseTitle}
      },
      centerChange: function () {
        const {baseTitle,zoom,center} = this;
        return {baseTitle,zoom,center}
      },
      showName: function () {
        if (this.isShow) {
          return this.locName
        } else {
          return this.provinceName
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/spatiotemporal/panel.css";
  @import "../../assets/css/spatiotemporal/base.css";
  @import "../../assets/css/spatiotemporal/map/spamap.css";
  .pip-click {
    display: inline-block;
    height: 30px;
    width: 30px;
    position: fixed;
    z-index: 2;
    margin-left: 790px;
    margin-top: 30px;
    padding-top: 8px;
    padding-left: 10px;

    background: url("../../assets/img/first.svg");
    background-size: 30px 30px;
    background-repeat: no-repeat;
    border: 0px;
  }
</style>