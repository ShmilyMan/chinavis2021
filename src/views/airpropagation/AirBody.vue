<template>
  <div>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple province">
          <div class="province_border">
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="beijingClick" autofocus>北京</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="shanghaiClick">上海</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="tianjinClick">天津</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="chongqingClick()" >重庆</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="anhuiClick">安徽</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="fujianClick">福建</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="gansuClick">甘肃</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="guangdongClick">广东</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="guangxiClick">广西</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="guizhouClick">贵州</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="hainanClick">海南</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="hebeiClick">河北</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="henanClick">河南</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="heilongjiangClick">黑龙江</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="hubeiClick">湖北</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="hunanClick">湖南</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="jiangsuClick">江苏</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="jiangxiClick">江西</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="jilinClick">吉林</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="liaoningClick">辽宁</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="neimengguClick">内蒙古</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="ningxiaClick">宁夏</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="qinghaiClick">青海</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="shandongClick">山东</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="shanxiClick">山西</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="shanXiClick">陕西</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="sichuanClick">四川</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="xizangClick">西藏</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="xinjiangClick">新疆</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="yunnanClick">云南</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="zhejiangClick">浙江</el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark base_button">
                    <el-button class="button" type="primary" @click="xianggangClick">香港</el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <div  class="province_map">
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <div class="map_border panel map_panel">
                    <h2>污染时空态势图</h2>
                    <province-map
                      :center="center"
                      :zoom="zoom"
                      :pdata="pdata"
                      :geo-coord-map="geoCoordMap"
                      @emitYear="getYear"
                    />
                    <div class="panel-footer"></div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <div class="line_border panel line_panel">
                    <h2>{{getBaseTitle}}</h2>
                    <el-row>
                      <el-col :span="12">
                        <div class="grid-content bg-purple">
                          <div  class="my_select" style="margin-left: 35px;">
                            <el-select v-model="value" placeholder="请选择指标" size="mini" :popper-append-to-body="false">
                              <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="grid-content bg-purple-light" style="line-height: 40px; margin-left: 100px; margin-top: 5px;">
                          <el-popover
                              popper-class="popover-parm"
                              placement="right"
                              width="400"
                              trigger="click">
                            <ral-chart />
                            <el-button slot="reference" class="info-chart" type="primary">相关性</el-button>
                          </el-popover>
                        </div>
                      </el-col>
                    </el-row>
                    <contaminants-line
                      style="margin-top: 15px;"
                      :linedata="linedata"
                    />
                    <div class="panel-footer"></div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div  class="info_chart">
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <div class="time_border panel time_panel">
                    <h2>AQI日变化图</h2>
                    <calendar
                    :pdata="calData"
                    :range="range"
                    @emitMonth="getMonth"
                    style="margin-top: 1px"
                    />
                    <div class="panel-footer"></div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <div class="loc_border panel loc_panel">
                    <h2>污染物日变化图({{month}}月)</h2>
                    <pall
                    :palldata="palldata"
                    style="margin-top: 20px"
                    />
                    <div class="panel-footer"></div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ProvinceMap from "@/views/airpropagation/chart/map/ProvinceMap"
  import Calendar from "@/views/airpropagation/chart/Calendar"
  import Pall from "@/views/airpropagation/chart/Pall"
  import RalChart from "@/views/airpropagation/chart/RalChart"

  import ContaminantsLine from "@/views/airpropagation/chart/ContaminantsLine"
  import provincedata from "../../../public/province/provincedata"
  import calendardata from "../../../public/airpropagation/calendardata/calendardata"
  import wholeCountry from "../../../public/spatiotemporal/airquality/wholeCountry"
  import air_index from "../../../public/spatiotemporal/airindex/air_index"
  import map_point from "../../../public/spatiotemporal/map_point/map_point"
  import pall from "../../../public/airpropagation/pall/pall"
  import conline from "../../../public/airpropagation/conline/conline"
  import calendardata2 from "../../../public/airpropagation/calendardata/calendardata2"
  import calendardata3 from "../../../public/airpropagation/calendardata/calendardata3"
  import calendardata4 from "../../../public/airpropagation/calendardata/calendardata4"
  import calendardata5 from "../../../public/airpropagation/calendardata/calendardata5"
  import calendardata6 from "../../../public/airpropagation/calendardata/calendardata6"
  import conline2 from "../../../public/airpropagation/conline/conline2"
  import conline3 from "../../../public/airpropagation/conline/conline3"

  export default {
    name: "AirBody",
    components: {
      RalChart,
      ContaminantsLine,
      Pall,
      ProvinceMap,
      Calendar
    },
    watch: {
      dataChange: {
        handler: function (val, oldVal) {
          let year = val.year                       // 时间
          let provinceName = val.provinceName       // 地区
          let month = val.month                     // 月
          let value = val.value                     // 污染物指标

          // 控制折线图的数据
          for (let i = 0; i < conline.length; i++) {
            if (provinceName == conline[i].provinceName &&
                year == conline[i].year &&
                month == conline[i].month &&
                value == conline[i].contaminants) {
              this.linedata = conline[i].linedata
            }
          }
          for (let i = 0; i < conline2.length; i++) {
            if (provinceName == conline2[i].provinceName &&
                year == conline2[i].year &&
                month == conline2[i].month &&
                value == conline2[i].contaminants) {
              this.linedata = conline2[i].linedata
            }
          }
          for (let i = 0; i < conline3.length; i++) {
            if (provinceName == conline3[i].provinceName &&
                year == conline3[i].year &&
                month == conline3[i].month &&
                value == conline3[i].contaminants) {
              this.linedata = conline3[i].linedata
            }
          }
        },
        deep: true,
      },
      calDataChange: {
        handler: function (val, oldVal) {
          let year = val.year                       // 时间
          let provinceName = val.provinceName       // 地区

          // 控制日历图的动态效果
          for (let i = 0; i < calendardata.length; i++) {
            if (provinceName == calendardata[i].provinceName &&
                year == calendardata[i].year) {
              this.range = calendardata[i].range
              this.calData = calendardata[i].data
            }
          }

          for (let i = 0; i < calendardata2.length; i++) {
            if (provinceName == calendardata2[i].provinceName &&
                year == calendardata2[i].year) {
              this.range = calendardata2[i].range
              this.calData = calendardata2[i].data
            }
          }

          for (let i = 0; i < calendardata3.length; i++) {
            if (provinceName == calendardata3[i].provinceName &&
                year == calendardata3[i].year) {
              this.range = calendardata3[i].range
              this.calData = calendardata3[i].data
            }
          }

          for (let i = 0; i < calendardata4.length; i++) {
            if (provinceName == calendardata4[i].provinceName &&
                year == calendardata4[i].year) {
              this.range = calendardata4[i].range
              this.calData = calendardata4[i].data
            }
          }

          for (let i = 0; i < calendardata5.length; i++) {
            if (provinceName == calendardata5[i].provinceName &&
                year == calendardata5[i].year) {
              this.range = calendardata5[i].range
              this.calData = calendardata5[i].data
            }
          }

          for (let i = 0; i < calendardata6.length; i++) {
            if (provinceName == calendardata6[i].provinceName &&
                year == calendardata6[i].year) {
              this.range = calendardata6[i].range
              this.calData = calendardata6[i].data
            }
          }
        },
        deep: true,
      },
      pallDataChange:  {
        handler: function (val, oldVal) {
          let year = val.year                       // 时间
          let provinceName = val.provinceName       // 地区
          let month = val.month                     // 月

          // 控制pall图表的数据
          for(let i = 0; i < pall.length; i++) {
            if (provinceName == pall[i].provinceName &&
                year == pall[i].year &&
                month == pall[i].month) {
              this.palldata = pall[i].dayData
            }
          }
        },
        deep: true,
      }
    },
    data() {
      return {
        center: [116.395645,39.929986],
        zoom: 11,
        pdata: [
          { name: '西城区', value: 120.38 },
          { name: '朝阳区', value: 90.77 },
          { name: '丰台区', value: 121.65 },
          { name: '海淀区', value: 107.75 },
          { name: '门头沟区', value: 78.25 },
          { name: '房山区', value: 97.25 },
          { name: '通州区', value: 104.15 },
          { name: '顺义区', value: 111.55 },
          { name: '昌平区', value: 91.54 },
          { name: '大兴区', value: 133.41 },
          { name: '怀柔区', value: 71.13 },
          { name: '平谷区', value: 95.15 },
          { name: '密云区', value: 78.33 },
          { name: '延庆区', value: 70.0 }
        ],
        geoCoordMap: {
          '西城区': [116.366794,39.915309],
          '朝阳区': [116.486409,39.921489],
          '丰台区': [116.286968,39.863642],
          '海淀区': [116.310316,39.956074],
          '门头沟区': [116.105381,39.937183],
          '房山区': [116.139157,39.735535],
          '通州区': [116.658603,39.902486],
          '顺义区': [116.653525,40.128936],
          '昌平区': [116.235906,40.218085],
          '大兴区': [116.338033,39.728908],
          '怀柔区': [116.637122,40.324272],
          '平谷区': [117.112335,40.144783],
          '密云区': [116.843352,40.377362],
          '延庆区': [115.985006,40.465325]
        },
        options: [{
          value: 'AQI',
          label: 'AQI指数'
        }, {
          value: 'PM2.5',
          label: 'PM2.5污染物'
        }, {
          value: 'PM10',
          label: 'PM10污染物'
        }, {
          value: 'SO2',
          label: 'SO2污染物'
        }, {
          value: 'NO2',
          label: 'NO2污染物'
        }, {
          value: 'CO',
          label: 'CO污染物'
        }, {
          value: 'O3',
          label: 'O3污染物'
        }],
        value: 'AQI',
        provinceName: '北京市',
        year: '2013',
        calData: calendardata[0].data,
        range: calendardata[0].range,
        month: '01',
        palldata: pall[0].dayData,
        linedata: conline[0].linedata
      }
    },
    methods: {
      beijingClick() {
        this.provinceName = '北京市'
        this.center = provincedata[0].center
        this.zoom = provincedata[0].zoom
        this.pdata = provincedata[0].data
        this.geoCoordMap = provincedata[0].geoCoordMap
      },
      shanghaiClick() {
        this.provinceName = '上海市'
        this.center = provincedata[6].center
        this.zoom = provincedata[6].zoom
        this.pdata = provincedata[6].data
        this.geoCoordMap = provincedata[6].geoCoordMap
      },
      tianjinClick() {
        this.provinceName = '天津市'
        this.center = provincedata[7].center
        this.zoom = provincedata[7].zoom
        this.pdata = provincedata[7].data
        this.geoCoordMap = provincedata[7].geoCoordMap
      },
      chongqingClick() {
        this.provinceName = '重庆市'
        this.center = provincedata[8].center
        this.zoom = provincedata[8].zoom
        this.pdata = provincedata[8].data
        this.geoCoordMap = provincedata[8].geoCoordMap
      },
      anhuiClick() {
        this.provinceName = '安徽省'
        this.center = provincedata[9].center
        this.zoom = provincedata[9].zoom
        this.pdata = provincedata[9].data
        this.geoCoordMap = provincedata[9].geoCoordMap
      },
      fujianClick() {
        this.provinceName = '福建省'
        this.center = provincedata[10].center
        this.zoom = provincedata[10].zoom
        this.pdata = provincedata[10].data
        this.geoCoordMap = provincedata[10].geoCoordMap
      },
      gansuClick() {
        this.provinceName = '甘肃省'
        this.center = provincedata[11].center
        this.zoom = provincedata[11].zoom
        this.pdata = provincedata[11].data
        this.geoCoordMap = provincedata[11].geoCoordMap
      },
      guangdongClick() {
        this.provinceName = '广东省'
        this.center = provincedata[12].center
        this.zoom = provincedata[12].zoom
        this.pdata = provincedata[12].data
        this.geoCoordMap = provincedata[12].geoCoordMap
      },
      guangxiClick() {
        this.provinceName = '广西省'
        this.center = provincedata[13].center
        this.zoom = provincedata[13].zoom
        this.pdata = provincedata[13].data
        this.geoCoordMap = provincedata[13].geoCoordMap
      },
      guizhouClick() {
        this.provinceName = '贵州省'
        this.center = provincedata[14].center
        this.zoom = provincedata[14].zoom
        this.pdata = provincedata[14].data
        this.geoCoordMap = provincedata[14].geoCoordMap
      },
      hainanClick() {
        this.provinceName = '海南省'
        this.center = provincedata[15].center
        this.zoom = provincedata[15].zoom
        this.pdata = provincedata[15].data
        this.geoCoordMap = provincedata[15].geoCoordMap
      },
      hebeiClick() {
        this.provinceName = '河北省'
        this.center = provincedata[16].center
        this.zoom = provincedata[16].zoom
        this.pdata = provincedata[16].data
        this.geoCoordMap = provincedata[16].geoCoordMap
      },
      henanClick() {
        this.provinceName = '河南省'
        this.center = provincedata[17].center
        this.zoom = provincedata[17].zoom
        this.pdata = provincedata[17].data
        this.geoCoordMap = provincedata[17].geoCoordMap
      },
      heilongjiangClick() {
        this.provinceName = '黑龙江省'
        this.center = provincedata[18].center
        this.zoom = provincedata[18].zoom
        this.pdata = provincedata[18].data
        this.geoCoordMap = provincedata[18].geoCoordMap
      },
      hubeiClick() {
        this.provinceName = '湖北省'
        this.center = provincedata[19].center
        this.zoom = provincedata[19].zoom
        this.pdata = provincedata[19].data
        this.geoCoordMap = provincedata[19].geoCoordMap
      },
      hunanClick() {
        this.provinceName = '湖南省'
        this.center = provincedata[20].center
        this.zoom = provincedata[20].zoom
        this.pdata = provincedata[20].data
        this.geoCoordMap = provincedata[20].geoCoordMap
      },
      jiangsuClick() {
        this.provinceName = '江苏省'
        this.center = provincedata[21].center
        this.zoom = provincedata[21].zoom
        this.pdata = provincedata[21].data
        this.geoCoordMap = provincedata[21].geoCoordMap
      },
      jiangxiClick() {
        this.provinceName = '江西省'
        this.center = provincedata[22].center
        this.zoom = provincedata[22].zoom
        this.pdata = provincedata[22].data
        this.geoCoordMap = provincedata[22].geoCoordMap
      },
      jilinClick() {
        this.provinceName = '吉林省'
        this.center = provincedata[23].center
        this.zoom = provincedata[23].zoom
        this.pdata = provincedata[23].data
        this.geoCoordMap = provincedata[23].geoCoordMap
      },
      liaoningClick() {
        this.provinceName = '辽宁省'
        this.center = provincedata[24].center
        this.zoom = provincedata[24].zoom
        this.pdata = provincedata[24].data
        this.geoCoordMap = provincedata[24].geoCoordMap
      },
      neimengguClick() {
        this.provinceName = '内蒙古自治区'
        this.center = provincedata[25].center
        this.zoom = provincedata[25].zoom
        this.pdata = provincedata[25].data
        this.geoCoordMap = provincedata[25].geoCoordMap
      },
      ningxiaClick() {
        this.provinceName = '宁夏回族自治区'
        this.center = provincedata[26].center
        this.zoom = provincedata[26].zoom
        this.pdata = provincedata[26].data
        this.geoCoordMap = provincedata[26].geoCoordMap
      },
      qinghaiClick() {
        this.provinceName = '青海省'
        this.center = provincedata[27].center
        this.zoom = provincedata[27].zoom
        this.pdata = provincedata[27].data
        this.geoCoordMap = provincedata[27].geoCoordMap
      },
      shandongClick() {
        this.provinceName = '山东省'
        this.center = provincedata[28].center
        this.zoom = provincedata[28].zoom
        this.pdata = provincedata[28].data
        this.geoCoordMap = provincedata[28].geoCoordMap
      },
      shanxiClick() {
        this.provinceName = '山西省'
        this.center = provincedata[29].center
        this.zoom = provincedata[29].zoom
        this.pdata = provincedata[29].data
        this.geoCoordMap = provincedata[29].geoCoordMap
      },
      shanXiClick() {
        this.provinceName = '陕西省'
        this.center = provincedata[30].center
        this.zoom = provincedata[30].zoom
        this.pdata = provincedata[30].data
        this.geoCoordMap = provincedata[30].geoCoordMap
      },
      sichuanClick() {
        this.provinceName = '四川省'
        this.center = provincedata[31].center
        this.zoom = provincedata[31].zoom
        this.pdata = provincedata[31].data
        this.geoCoordMap = provincedata[31].geoCoordMap
      },
      xizangClick() {
        this.provinceName = '西藏自治区'
        this.center = provincedata[32].center
        this.zoom = provincedata[32].zoom
        this.pdata = provincedata[32].data
        this.geoCoordMap = provincedata[32].geoCoordMap
      },
      xinjiangClick() {
        this.provinceName = '新疆维吾尔自治区'
        this.center = provincedata[33].center
        this.zoom = provincedata[33].zoom
        this.pdata = provincedata[33].data
        this.geoCoordMap = provincedata[33].geoCoordMap
      },
      yunnanClick() {
        this.provinceName = '云南省'
        this.center = provincedata[34].center
        this.zoom = provincedata[34].zoom
        this.pdata = provincedata[34].data
        this.geoCoordMap = provincedata[34].geoCoordMap
      },
      zhejiangClick() {
        this.provinceName = '浙江省'
        this.center = provincedata[35].center
        this.zoom = provincedata[35].zoom
        this.pdata = provincedata[35].data
        this.geoCoordMap = provincedata[35].geoCoordMap
      },
      xianggangClick() {
        this.provinceName = '香港'
        this.center = provincedata[36].center
        this.zoom = provincedata[36].zoom
        this.pdata = provincedata[36].data
        this.geoCoordMap = provincedata[36].geoCoordMap
      },

      // 获取子组件的年份并根据时间轴改变年份
      getYear(year) {
        this.year = year
      },

      // 获取子组件传过来的月份
      getMonth(month) {
        this.month = month
      }
    },
    computed: {
      getCalTitle: function () {
        return this.provinceName + this.year + '年AQI日变化图'
      },
      getBaseTitle: function () {
        return '污染物与气象要素日关系图' + '(' + this.month + '月' + ')'
      },
      dataChange: function () {
        const {year,provinceName,month,value} = this;
        return {year,provinceName,month,value}
      },
      calDataChange: function () {
        const {year,provinceName} = this;
        return {year,provinceName}
      },
      pallDataChange: function () {
        const {year,provinceName,month} = this;
        return {year,provinceName,month}
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/airpropagation/air_body.css";
  @import "../../assets/css/airpropagation/air_panel.css";
  .my_select{
    display: block;
    height: 5px;
    width: 150px;
    line-height: 10px;
    margin-top: 10px;
    margin-left: 5px;
  }
  .my_select>>>.el-input--mini .el-input__inner {
    background: none;
  }
  .my_select>>>.el-input__inner {
    color: #5BB9FC;
    border: none;
    font-size: 10px;
  }
  .info-chart {
    height: 35px;
    width: 70px;
    padding-left: 15px;
    padding-top: 10px;
    background-image: linear-gradient(#1F3D81, #192F63);
    border-color: #357ebd;
    color: #fff;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    vertical-align: middle;
    border: 1px solid transparent;
    font-weight: 500;
    font-size: 13px;
    box-shadow: 0 3px 15px 1px rgba(70, 98, 171, .7);
  }
</style>