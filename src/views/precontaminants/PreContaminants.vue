<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple column1">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark select panel sel_panel">
                <h2>筛选条件</h2>
                <!--筛选所选择的地区-->
                <div style="padding-top: 30px;">
                  <el-row>
                    <el-col :span="11">
                      <div class="grid-content bg-purple name_select">
                        <h3>地区：</h3>
                      </div>
                    </el-col>
                    <el-col :span="13">
                      <div class="grid-content bg-purple-light" style="line-height: 40px; padding-top: 8px;">
                        <div  class="my_select">
                          <el-select v-model="value" placeholder="全国" size="mini" :popper-append-to-body="false">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <!--筛选污染的行业-->
                  <el-row>
                    <el-col :span="11">
                      <div class="grid-content bg-purple name_select">
                        <h3>行业：</h3>
                      </div>
                    </el-col>
                    <el-col :span="13">
                      <div class="grid-content bg-purple-light" style="line-height: 40px; padding-top: 8px;">
                        <div  class="my_select">
                          <el-select v-model="value2" placeholder="选择行业" size="mini" :popper-append-to-body="false">
                            <el-option
                                v-for="item in options2"
                                :key="item.value2"
                                :label="item.label2"
                                :value="item.value2"
                            >
                            </el-option>
                          </el-select>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <!--AQI-->
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple my_name_select">
                        <h3>AQI</h3>
                      </div>
                    </el-col>
                    <el-col :span="14">
                      <div class="grid-content bg-purple-light my_value_select">
                        <div class="block">
                          <el-slider v-model="aqiValue" :max="100"></el-slider>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="grid-content bg-purple-light my_value_select base-title" >
                        {{aqiValue}}
                      </div>
                    </el-col>
                  </el-row>
                  <!--PM2.5-->
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple my_name_select">
                        <h3>PM2.5</h3>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-light my_value_select">
                        <div class="block">
                          <el-slider v-model="pm2Vallue" :max="100"></el-slider>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple-light my_value_select base-title" >
                        {{pm2Vallue}} ug / m³
                      </div>
                    </el-col>
                  </el-row>
                  <!--PM10-->
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple my_name_select">
                        <h3>PM10</h3>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-light my_value_select">
                        <div class="block">
                          <el-slider v-model="pm10Value" :max="100"></el-slider>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple-light my_value_select base-title" >
                        {{pm10Value}} ug / m³
                      </div>
                    </el-col>
                  </el-row>
                  <!--SO2-->
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple my_name_select">
                        <h3>SO2</h3>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-light my_value_select">
                        <div class="block">
                          <el-slider v-model="so2Value" :max="100"></el-slider>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple-light my_value_select base-title" >
                        {{so2Value}} ug / m³
                      </div>
                    </el-col>
                  </el-row>
                  <!--NO2-->
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple my_name_select">
                        <h3>NO2</h3>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-light my_value_select">
                        <div class="block">
                          <el-slider v-model="no2Value" :max="100"></el-slider>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple-light my_value_select base-title" >
                        {{no2Value}} ug / m³
                      </div>
                    </el-col>
                  </el-row>
                  <!--CO-->
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple my_name_select">
                        <h3>CO</h3>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-light my_value_select">
                        <div class="block">
                          <el-slider v-model="coValue" :max="100"></el-slider>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple-light my_value_select base-title" >
                        {{coValue}} ug / m³
                      </div>
                    </el-col>
                  </el-row>
                  <!--O3-->
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple my_name_select">
                        <h3>O3</h3>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-light my_value_select">
                        <div class="block">
                          <el-slider v-model="o3Value" :max="200"></el-slider>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple-light my_value_select base-title" >
                        {{o3Value}} ug / m³
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="panel-footer"></div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark ansuer panel ansuer_panel">
                <h2>推荐方案</h2>
                <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" style="line-height: 50px;">
                      <el-tabs :tab-position="tabPosition" style="height: 120px;">
                        <el-tab-pane label="方案一(不增加设施)" class="select1">
                          <p>PM2.5：{{-change_pm2Vallue}}&nbsp;&nbsp;&nbsp;吨 / 日</p>
                          <p>PM10：{{-change_pm10Value}}&nbsp;&nbsp;&nbsp;吨 / 日</p>
                          <p>SO2：{{-change_so2Value}}&nbsp;&nbsp;&nbsp;吨 / 日</p>
                          <p>NO2：{{-change_no2Value}}&nbsp;&nbsp;&nbsp;吨 / 日</p>
                          <p>CO：{{-change_coValue}}&nbsp;&nbsp;&nbsp;吨 / 日</p>
                          <p>O3：{{-change_o3Value}}&nbsp;&nbsp;&nbsp;吨 / 日</p>
                        </el-tab-pane>
                        <el-tab-pane label="方案二(增加设施)" class="select2">
                          <p>废气总排放量：{{-emData}}&nbsp;&nbsp;&nbsp;吨</p>
                          <p>设施总套数：+ {{countData}}&nbsp;&nbsp;&nbsp;套</p>
                          <p>设施运行费用：+ {{costData}}&nbsp;&nbsp;&nbsp;万元</p>
                        </el-tab-pane>
                        <el-tab-pane label="方案三(限定设施)">
                          <el-row>
                            <el-col :span="8">
                              <div class="grid-content bg-purple" style="line-height: 45px;">
                                <p style="color: #fff; font-size: 14px; margin-left: 60px; margin-top: 8px;">设备数：</p>
                              </div>
                            </el-col>
                            <el-col :span="9">
                              <div class="grid-content bg-purple-light" style="line-height: 40px;">
                                <div class="grid-content bg-purple-light my_value_select">
                                  <div class="block" style="width: 100%;">
                                    <el-slider v-model="addCountData" :max="150000"></el-slider>
                                  </div>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="7">
                              <div class="grid-content bg-purple" style="line-height: 40px;">
                                <p style="color: #fff; font-size: 14px; margin-top: 9px; margin-left: 10px;">+ {{addCountData}} 套</p>
                              </div>
                            </el-col>
                          </el-row>
                          <p style="color: #fff; font-size: 15px; margin-left: 100px; margin-top: 5px;">
                            设施运行费用：+ {{addCostData}} &nbsp;&nbsp;万元
                          </p>
                          <p style="color: #fff; font-size: 15px; margin-left: 80px; margin-top: 6px;">
                            废气平均每天排放量：- {{total_change}} 吨
                          </p>
                        </el-tab-pane>
                      </el-tabs>
                    </div>
                  </el-col>
                </el-row>
                <div class="panel-footer"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light column2">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark probar panel probar_panel">
                <h2>污染物月占比图</h2>
                <proportional-bar
                :pro-pro-bar-data="proProBarData"
                />
                <div class="panel-footer"></div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark map panel map_panel">
                <h2>污染时空态势图</h2>
                <pro-map
                :map-center="mapCenter"
                :map-zoom="mapZoom"
                :map-coords="mapCoords"
                :map-data="mapData"
                :aqi-value="aqiValue"
                :point-data="pointData"
                />
                <div class="panel-footer"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple column3">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark proaqi panel proaqi_panel">
                <h2>省市AQI年对比图</h2>
                <multicolor-pro-bar
                :mul-data-bar="mulDataBar"
                :zoom-data="zoomData"
                @emitDicName="getDicName"
                />
                <div class="panel-footer"></div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark dicaqi panel dicaqi_panel">
                <h2>废气排放及处理情况图</h2>
                <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" style="line-height: 15px;">
                      <el-tabs :tab-position="tabPosition" style="height: 50px;">
                        <el-tab-pane label="工业废气（总）" class="total">
                          <el-popover
                              placement="right"
                              width="400"
                              trigger="click">
                            <pre-bubble
                            :bubble-data="bubbleData1"
                            />
                            <el-button slot="reference" class="my-button1"></el-button>
                          </el-popover>
                          <p class="value1">排放总量：{{totalInfo.totalValue.value1}} 吨</p>
                          <p class="value2">治理设施：{{totalInfo.totalValue.value2}} 套</p>
                          <p class="value3">废气治理设施处理能力：{{totalInfo.totalValue.value3}} 万千米/时</p>
                          <p class="value4">废气治理设施本年运行费用：{{totalInfo.totalValue.value4}} 万元</p>
                        </el-tab-pane>
                        <el-tab-pane label="SO2" class="so2">
                          <el-popover
                              placement="right"
                              width="400"
                              trigger="click">
                            <pre-bubble
                                :bubble-data="bubbleData2"
                            />
                            <el-button slot="reference" class="my-button1"></el-button>
                          </el-popover>
                          <p class="value1">排放总量：{{so2Info.so2Value.value1}} 吨</p>
                          <p class="value2">{{so2DetailInfo}}</p>
                          <p class="value3">集中式污染治理设施：{{so2Info.so2Value.value4}} 套</p>
                          <detail-pip
                          :pip-name="so2PipName"
                          :pip-data="so2PipData"
                          style="margin-top: 20px;"
                          />
                        </el-tab-pane>
                        <el-tab-pane label="氮氧化物(NO,NO2)" class="no2">
                          <el-popover
                              placement="right"
                              width="400"
                              trigger="click">
                            <pre-bubble
                                :bubble-data="bubbleData3"
                            />
                            <el-button slot="reference" class="my-button1"></el-button>
                          </el-popover>
                          <p class="value1">排放总量：{{noInfo.noValue.value1}} 吨</p>
                          <p class="value2">{{noDetailInfo}}</p>
                          <p class="value3">机动车：{{noInfo.noValue.value4}} 吨</p>
                          <p class="value4">集中式污染治理设施：{{noInfo.noValue.value5}} 套</p>
                          <detail-pip
                          :pip-name="no2PipName"
                          :pip-data="no2PipData"
                          style="margin-top: 20px;"
                          />
                        </el-tab-pane>
                        <el-tab-pane label="烟(粉尘)" class="no2">
                          <el-popover
                              placement="right"
                              width="400"
                              trigger="click">
                            <pre-bubble
                                :bubble-data="bubbleData4"
                            />
                            <el-button slot="reference" class="my-button1"></el-button>
                          </el-popover>
                          <p class="value1">排放总量：{{pmInfo.pmValue.value1}} 吨</p>
                          <p class="value2">{{pmDetailInfo}}</p>
                          <p class="value3">机动车：{{pmInfo.pmValue.value4}} 吨</p>
                          <p class="value4">集中式污染治理设施：{{pmInfo.pmValue.value5}} 套</p>
                          <detail-pip
                          :pip-name="pmPipName"
                          :pip-data="pmPipData"
                          style="margin-top: 20px;"
                          />
                        </el-tab-pane>
                      </el-tabs>
                    </div>
                  </el-col>
                </el-row>
                <div class="panel-footer"></div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark pollution panel pollution_panel">
                <h2>行业废气排放及处理情况图</h2>
                <div v-if="value2 == ''">
                  <el-row>
                    <el-col :span="24">
                      <div class="grid-content bg-purple-dark" style="line-height: 50px;">
                        <img src="../../assets/img/nodata.svg">
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <div class="grid-content bg-purple-dark img_select" style="line-height: 10px;">
                        <p>暂无选择行业</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div v-else class="detail-info">
                  <p class="p1">工业废气排放量：{{industryData.value1}} 亿立方米</p>
                  <p class="p2">工业废气治理设施数：{{industryData.value2}} 套</p>
                  <p class="p3">工业废气治理设施治理能力：{{industryData.value3}} 万立方米/时</p>
                  <p class="p4">工业废气治理设施本年的运行费用：{{industryData.value4}} 万元</p>
                  <industry-bar
                  :ind-bar-data="barData"
                  />
                </div>
                <div class="panel-footer"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ProMap from "@/views/precontaminants/chart/map/ProMap"
  import IndustryBar from "@/views/precontaminants/chart/IndustryBar"
  import MulticolorProBar from "@/views/precontaminants/chart/MulticolorProBar"
  import ProportionalBar from "@/views/precontaminants/chart/ProportionalBar"
  import DetailPip from "@/views/precontaminants/chart/DetailPip"
  import PreBubble from "@/views/precontaminants/chart/PreBubble"

  import proprotionalbar from "../../../public/precontaminants/proprotionalbar/proprotionalbar"
  import multicolorprobar from "../../../public/precontaminants/multicolorprobar/multicolorprobar"
  import pipinfo from "../../../public/precontaminants/pipinfo/pipinfo"
  import prodetailinfo from "../../../public/precontaminants/detailinfo/prodetailinfo";
  import industryproinfo from "../../../public/precontaminants/detailinfo/industryproinfo"
  import industrybar from "../../../public/precontaminants/industrybar/industrybar"


  export default {
    name: "PreContaminants",
    watch: {
      value: function (val, oldVal) {
        let proName = val

        // 比例柱状图
        for (let i = 0; i < proprotionalbar.length; i++) {
          if (proprotionalbar[i].provinceName == proName) {
            this.proProBarData = proprotionalbar[i]
          }
        }

        // aqi柱状图
        if (proName != '全国') {
          this.zoomData =  [
            {
              type: 'slider',
              show: true,
              height: 5,
              bottom: 30,
              borderColor: 'transparent',
              backgroundColor: 'rgba(128, 128, 128,0.1)',
              // 拖拽手柄样式 svg 路径
              handleIcon: 'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
              handleColor: '#aab6c6',
              handleSize: 8,
              handleStyle: {
                borderColor: '#aab6c6',
                shadowBlur: 4,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                shadowColor: '#e5e5e5'
              },
              start: 0,
              end: 50,
            }
          ]
        }
        for (let i = 0; i < multicolorprobar.length; i++) {
          if (multicolorprobar[i].provinceName == proName) {
            this.mulDataBar = multicolorprobar[i].mulDataBar
          }
        }

        // 治理详细信息  pipinfo
        for (let i = 0; i < prodetailinfo.length; i++) {
          if (prodetailinfo[i].proName == proName) {
            this.so2Info = prodetailinfo[i]
            this.noInfo = prodetailinfo[i]
            this.pmInfo = prodetailinfo[i]
            this.totalInfo = prodetailinfo[i]
          }
        }

        for (let i = 0; i < pipinfo.length; i++) {
          if (pipinfo[i].proName == proName) {
            this.so2PipName = pipinfo[i].pipSo2Name
            this.so2PipData = pipinfo[i].pipSo2Data
            this.no2PipName = pipinfo[i].pipNo2Name
            this.no2PipName = pipinfo[i].pipNo2Data
            this.pmPipName = pipinfo[i].pipPmName
            this.pmPipData = pipinfo[i].pipPmData
          }
        }

        // 筛选条件
        if (val == '全国') {
          this.aqiValue = 47.66
          this.pm2Vallue = 30.88
          this.pm10Value = 38.72
          this.so2Value = 10.62
          this.no2Value = 8.33
          this.coValue = 0.39
          this.o3Value = 68.49

          this.temp_aqiValue = 47.66
          this.temp_pm2Vallue = 30.88
          this.temp_pm10Value = 38.72
          this.temp_so2Value = 10.62
          this.temp_no2Value = 8.33
          this.temp_coValue = 0.39
          this.temp_o3Value = 68.49

          // 改变地图center
          this.mapZoom = 5
          this.mapCenter = [104.114129, 37.550339]
          this.mapData = {
            data: [
              { name: '北京', value: 93.41 },
              { name: '上海', value: 77.61 },
              { name: '天津', value: 119.4 },
              { name: '重庆', value: 76.51 },
              { name: '安徽', value: 92.32 },
              { name: '福建', value: 44.73 },
              { name: '甘肃', value: 37.57 },
              { name: '广东', value: 58.09 },
              { name: '广西', value: 67.87 },
              { name: '贵州', value: 70.79 },
              { name: '海南', value: 33.61 },
              { name: '河北', value: 99.95 },
              { name: '河南', value: 120.35 },
              { name: '黑龙江', value: 34.36 },
              { name: '湖北', value: 92.87 },
              { name: '湖南', value: 86.76 },
              { name: '江苏', value: 90.97 },
              { name: '江西', value: 67.39 },
              { name: '吉林', value: 50.72 },
              { name: '辽宁', value: 64.67 },
              { name: '内蒙古', value: 30.33 },
              { name: '宁夏', value: 53.64 },
              { name: '青海', value: 26.35 },
              { name: '山东', value: 111.62 },
              { name: '山西', value: 78.91 },
              { name: '陕西', value: 74.21 },
              {name: '四川', value: 52.44},
              {name: '西藏', value: 28.6},
              {name: '新疆', value: 33.86},
              {name: '云南', value: 42.24},
              {name: '浙江', value: 70.53},
              {name: '香港', value: 44.81}
            ],
            geoCoordMap: {
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
            },
          }
        }
        if (val == '华北地区') {
          this.aqiValue = 45.21
          this.pm2Vallue = 31.54
          this.pm10Value = 43.67
          this.so2Value = 14.86
          this.no2Value = 10.38
          this.coValue = 0.5
          this.o3Value = 59.75

          this.temp_aqiValue = 45.21
          this.temp_pm2Vallue = 31.54
          this.temp_pm10Value = 43.67
          this.temp_so2Value = 14.86
          this.temp_no2Value = 10.38
          this.temp_coValue = 0.5
          this.temp_o3Value = 59.75

          // 改变地图center
          this.mapZoom = 6
          this.mapCenter = [112.395645,39.929986]
          this.mapCoords = {
            coords: [
              [120.395645,43.929986],
              [118.210813,39.14393],
              [114.822082,36.248958],
              [110.350864,34.190277],
              [111,39.890277],
              [100,41.828319]
            ]
          }
          this.mapData = {
            data: [
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
              { name: '延庆区', value: 70.0 },
              { name: '和平区', value: 23.69 },
              { name: '河东区', value: 108.04 },
              { name: '东丽区', value: 120.6 },
              { name: '西青区', value: 127.33 },
              { name: '津南区', value: 114.62 },
              { name: '北辰区', value: 131.63 },
              { name: '武清区', value: 128.15 },
              { name: '宝坻区', value: 124.77 },
              { name: '滨海新区', value: 110.0 },
              { name: '宁河区', value: 119.92 },
              { name: '静海区', value: 118.81 },
              { name: '蓟州区', value: 111.05 },
              {name: '石家庄', value: 145.14},
              {name: '保定', value: 124.04},
              {name: '沧州', value: 127.33},
              {name: '承德', value: 54.96},
              {name: '邯郸', value: 152.0},
              {name: '衡水', value: 149.53},
              {name: '廊坊', value: 128.83},
              {name: '秦皇岛', value: 83.36},
              {name: '唐山', value: 110.79},
              {name: '邢台', value: 161.29},
              {name: '张家口', value: 53.79},
              {name: '太原', value: 76.68},
              {name: '长治', value: 95.41},
              {name: '大同', value: 64.32},
              {name: '晋城', value: 104.58},
              {name: '晋中', value: 88.03},
              {name: '临汾', value: 83.27},
              {name: '吕梁', value: 68.45},
              {name: '朔州', value: 62.14},
              {name: '忻州', value: 58.64},
              {name: '阳泉', value: 86.19},
              {name: '运城', value: 106.87},
              {name: '呼和浩特', value: 71.81},
              {name: '阿拉善盟', value: 32.13},
              {name: '包头', value: 46.67},
              {name: '巴彦淖尔', value: 31.93},
              {name: '赤峰', value: 31.37},
              {name: '鄂尔多斯', value: 46.58},
              {name: '呼伦贝尔', value: 18.86},
              {name: '通辽', value: 32.78},
              {name: '乌海', value: 61.44},
              {name: '乌兰察布', value: 45.56},
              {name: '锡林郭勒盟', value: 26.39},
              {name: '兴安盟', value: 21.22}
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
              '延庆区': [115.985006,40.465325],
              '和平区': [117.195907,39.118327],
              '河东区': [117.226568,39.122125],
              '东丽区': [117.313967,39.087764],
              '西青区': [117.012247,39.139446],
              '津南区': [117.382549,38.989577],
              '北辰区': [117.13482,39.225555],
              '武清区': [117.057959,39.376925],
              '宝坻区': [117.308094,39.716965],
              '滨海新区': [117.654173,39.032846],
              '宁河区': [117.82828,39.328886],
              '静海区': [116.925304,38.935671],
              '蓟州区': [117.407449,40.045342],
              '石家庄': [114.522082,38.048958],
              '保定': [115.49481,38.886565],
              '沧州': [116.863806,38.297615],
              '承德': [117.933822,40.992521],
              '邯郸': [114.482694,36.609308],
              '衡水': [115.686229,37.746929],
              '廊坊': [116.703602,39.518611],
              '秦皇岛': [119.604368,39.945462],
              '唐山': [118.183451,39.650531],
              '邢台': [114.520487,37.069531],
              '张家口': [114.893782,40.811188],
              '太原': [112.550864,37.890277],
              '长治': [113.120292,36.201664],
              '大同': [113.290509,40.113744],
              '晋城': [112.867333,35.499834],
              '晋中': [112.738514,37.693362],
              '临汾': [111.538788,36.099745],
              '吕梁': [111.143157,37.527316],
              '朔州': [112.479928,39.337672],
              '忻州': [112.727939,38.461031],
              '阳泉': [113.569238,37.869529],
              '运城': [111.006854,35.038859],
              '呼和浩特': [111.660351,40.828319],
              '阿拉善盟': [105.695683,38.843075],
              '包头': [109.846239,40.647119],
              '巴彦淖尔': [107.423807,40.76918],
              '赤峰': [118.930761,42.297112],
              '鄂尔多斯': [109.993706,39.81649],
              '呼伦贝尔': [119.760822,49.201636],
              '通辽': [122.260363,43.633756],
              '乌海': [106.831999,39.683177],
              '乌兰察布': [113.112846,41.022363],
              '锡林郭勒盟': [116.02734,43.939705],
              '兴安盟': [122.048167,46.083757]
            },
          }

        }
      },
      dicName: function (val,oldVal) {
        let dicName = val
        // 比例柱状图
        for (let i = 0; i < proprotionalbar.length; i++) {
          if (proprotionalbar[i].provinceName == dicName) {
            this.proProBarData = proprotionalbar[i]
          }
        }

        // 详细信息以及柱状图
        for (let i = 0; i < prodetailinfo.length; i++) {
          if (prodetailinfo[i].proName == dicName) {
            this.so2Info = prodetailinfo[i]
            this.noInfo = prodetailinfo[i]
            this.pmInfo = prodetailinfo[i]
            this.totalInfo = prodetailinfo[i]
          }
        }
        for (let i = 0; i < pipinfo.length; i++) {
          if (pipinfo[i].proName == dicName) {
            this.so2PipName = pipinfo[i].pipSo2Name
            this.so2PipData = pipinfo[i].pipSo2Data
            this.no2PipName = pipinfo[i].pipNo2Name
            this.no2PipName = pipinfo[i].pipNo2Data
            this.pmPipName = pipinfo[i].pipPmName
            this.pmPipData = pipinfo[i].pipPmData
          }
        }
      },
      value2: function (val, oldVal) {
        let industryName = val

        if (industryName == '石油和天然气') {
          this.pointData = {
            data1: [
              {
                'name': '中国石油天然气集团公司',
                'value': 97.25
              },
              {
                'name': '大庆油田有限责任公司',
                'value': 68.34
              },
              {
                'name': '辽河油田',
                'value': 83.58
              },
              {
                'name': '中国石油天然气股份有限公司长庆油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司塔里木油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司新疆油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司西南油气田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司吉林油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司大港油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司青海油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司吐哈油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司华北油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司冀东油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司玉门油田分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司浙江油田分公司',
                'value': 97.25
              },
              {
                'name': '中石油煤层气有限责任公司',
                'value': 102.69
              },
              {
                'name': '南方石油勘探开发有限责任公司',
                'value': 100.23
              },
              {
                'name': '中国石油天然气股份有限公司大庆石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司吉林石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司抚顺石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司辽阳石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司兰州石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司独山子石化分公司',
                'value': 97.25
              },
              {
                'name': '乌鲁木齐石化分公司',
                'value': 51.73
              },
              {
                'name': '中国石油天然气股份有限公司宁夏石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司大连石化分公司',
                'value': 97.25
              },
              {
                'name': '大连西太平洋石油化工有限公司',
                'value': 68.48
              },
              {
                'name': '中国石油天然气股份有限公司锦州石化分公司',
                'value': 97.25
              },
              {
                'name': '四川石化有限责任公司锦西石化分公司',
                'value': 105.15
              },
              {
                'name': '中国石油天然气股份有限公司大庆炼化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司哈尔滨石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司广西石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司四川石化有限责任公司',
                'value': 90.77
              },
              {
                'name': '中国石油天然气股份有限公司广东石化项目筹备组',
                'value': 90.77
              },
              {
                'name': '中国石油天然气股份有限公司大港石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司华北石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司呼和浩特石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司辽河石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司长庆石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司克拉玛依石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司庆阳石化分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司炼化工程建设项目部',
                'value': 90.77
              },
              {
                'name': '中国石油天然气股份有限公司东北化工销售分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司西北化工销售分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司华北化工销售分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司华东化工销售分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司华南化工销售分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司西南化工销售分公司',
                'value': 97.25
              },
              {
                'name': '北京油气调控中心',
                'value': 90.77
              },
              {
                'name': '中国石油天然气股份有限公司管道建设项目经理部',
                'value': 90.77
              },
              {
                'name': '中国石油天然气股份有限公司管道公司',
                'value': 90.77
              },
              {
                'name': '中国石油天然气股份有限公司西气东输管道分公司',
                'value': 97.25
              },
              {
                'name': '北京天然气管道有限公司',
                'value': 70.0
              },
              {
                'name': '中国石油天然气股份有限公司西部管道分公司',
                'value': 97.25
              },
              {
                'name': '中国石油天然气股份有限公司西南管道分公司筹备组',
                'value': 97.25
              },
              {
                'name': '昆仑燃气有限公司',
                'value': 67.46
              },
              {
                'name': '昆仑能源有限公司',
                'value': 90.77
              },
              {
                'name': '昆仑天然气利用有限公司',
                'value': 68.17
              },
              {
                'name': '中国石油天然气股份有限公司华北天然气销售分公司',
                'value': 97.25
              },
              {
                'name': '公司京唐液化天然气有限公司',
                'value': 98.78
              },
              {
                'name': '大连液化天然气有限公司',
                'value': 96.52
              },
              {
                'name': '江苏液化天然气有限公司',
                'value': 100.72
              },
              {
                'name': '中国石油化工集团公司',
                'value': 111.23
              },
              {
                'name': '胜利油田分公司',
                'value': 110.56
              },
              {
                'name': '中原油田分公司',
                'value': 147.91
              },
              {
                'name': '河南油田分公司',
                'value': 126.72
              },
              {
                'name': '江汉油田分公司',
                'value': 72.34
              },
              {
                'name': '江苏油田分公司',
                'value': 92.55
              },
              {
                'name': '南方勘探开发分公司',
                'value': 95.23
              },
              {
                'name': '上海海洋油气分公司',
                'value': 67.46
              },
              {
                'name': '西北油田分公司',
                'value': 29.88
              },
              {
                'name': '西南分公司',
                'value': 118.97
              },
              {
                'name': '华东分公司',
                'value': 83.34
              },
              {
                'name': '华北分公司',
                'value': 121.65
              },
              {
                'name': '东北分公司',
                'value': 23.69
              },
              {
                'name': '中南分公司',
                'value': 65.89
              },
              {
                'name': '天然气分公司',
                'value': 90.77
              },
              {
                'name': '中国石化西部新区勘探指挥部',
                'value': 120.38
              },
              {
                'name': '石家庄炼化分公司',
                'value': 197.8
              },
              {
                'name': '北京燕山分公司',
                'value': 97.25
              },
              {
                'name': '齐鲁分公司',
                'value': 124.36
              },
              {
                'name': '上海高桥分公司',
                'value': 67.46
              },
              {
                'name': '金陵分公司',
                'value': 95.15
              },
              {
                'name': '茂名分公司',
                'value': 53.75
              },
              {
                'name': '天津分公司',
                'value': 110.0
              },
              {
                'name': '巴陵分公司',
                'value': 79.82
              },
              {
                'name': '长岭分公司',
                'value': 48.67
              },
              {
                'name': '广州分公司',
                'value': 68.51
              },
              {
                'name': '安庆分公司',
                'value': 105.47
              },
              {
                'name': '荆门分公司',
                'value': 107.01
              },
              {
                'name': '洛阳分公司',
                'value': 147.58
              },
              {
                'name': '九江分公司',
                'value': 87.18
              },
              {
                'name': '湖北化肥分公司',
                'value': 70.0
              },
              {
                'name': '济南分公司',
                'value': 137.66
              },
              {
                'name': '武汉分公司',
                'value': 120.46
              },
              {
                'name': '沧州分公司',
                'value': 127.22
              },
              {
                'name': '润滑油分公司',
                'value': 53.75
              },
              {
                'name': '管道储运分公司',
                'value': 109.55
              },
              {
                'name': '北海分公司',
                'value': 100.23
              },
              {
                'name': '催化剂分公司',
                'value': 97.25
              },
              {
                'name': '塔河分公司',
                'value': 18.55
              },
              {
                'name': '西安分公司',
                'value': 136.45
              },
              {
                'name': '天津石油分公司',
                'value': 114.62
              },
              {
                'name': '安徽石油分公司',
                'value': 105.47
              },
              {
                'name': '北京石油分公司',
                'value': 111.55
              },
              {
                'name': '福建石油分公司',
                'value': 131.63
              },
              {
                'name': '广东石油分公司',
                'value': 123.45
              },
              {
                'name': '广西石油分公司',
                'value': 81.36
              },
              {
                'name': '贵州石油分公司',
                'value': 64.16
              },
              {
                'name': '海南石油分公司',
                'value': 24.66
              },
              {
                'name': '河北石油分公司',
                'value': 132.56
              },
              {
                'name': '河南石油分公司',
                'value': 24.92
              },
              {
                'name': '湖北石油分公司',
                'value': 123.45
              },
              {
                'name': '湖南石油分公司',
                'value': 136.67
              },
              {
                'name': '江苏石油分公司',
                'value': 94.11
              },
              {
                'name': '江西石油分公司',
                'value': 99.92
              },
              {
                'name': '山东石油分公司',
                'value': 118.74
              },
              {
                'name': '山西石油分公司',
                'value': 110.76
              },
              {
                'name': '上海石油分公司',
                'value': 67.46
              },
              {
                'name': '深圳石油分公司',
                'value': 64.01
              },
              {
                'name': '云南石油分公司',
                'value': 71.5
              },
              {
                'name': '浙江石油分公司',
                'value': 71.87
              },
              {
                'name': '辽宁石油分公司',
                'value': 100.23
              },
              {
                'name': '四川石油分公司',
                'value': 105.15
              },
              {
                'name': '重庆石油分公司',
                'value': 89.69
              },
              {
                'name': '陕西石油分公司',
                'value': 75.22
              },
              {
                'name': '内蒙古石油分公司',
                'value': 71.87
              },
              {
                'name': '新疆石油分公司',
                'value': 120.38
              },
              {
                'name': '吉林石油分公司',
                'value': 71.7
              },
              {
                'name': '黑龙江石油分公司',
                'value': 85.73
              },
              {
                'name': '青海石油分公司',
                'value': 100.23
              },
              {
                'name': '甘肃石油分公司',
                'value': 89.79
              },
              {
                'name': '宁夏石油分公司\xa0',
                'value': 111.29
              }
            ],
            data2:  {
              '中国石油天然气集团公司': [116.01912387659344, 39.709299746729386],
              '大庆油田有限责任公司': [124.92065199248033, 46.62170247618628],
              '辽河油田': [122.91411165573811, 41.53343917254981],
              '中国石油天然气股份有限公司长庆油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司塔里木油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司新疆油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司西南油气田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司吉林油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司大港油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司青海油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司吐哈油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司华北油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司冀东油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司玉门油田分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司浙江油田分公司': [116.01912387659344, 39.709299746729386],
              '中石油煤层气有限责任公司': [112.60613758471195, 37.74166878282097],
              '南方石油勘探开发有限责任公司': [120.18115907390077, 30.24731085615178],
              '中国石油天然气股份有限公司大庆石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司吉林石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司抚顺石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司辽阳石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司兰州石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司独山子石化分公司': [116.01912387659344, 39.709299746729386],
              '乌鲁木齐石化分公司': [87.6985113331356, 43.96641551284898],
              '中国石油天然气股份有限公司宁夏石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司大连石化分公司': [116.01912387659344, 39.709299746729386],
              '大连西太平洋石油化工有限公司': [121.86081323171297, 38.99423431448455],
              '中国石油天然气股份有限公司锦州石化分公司': [116.01912387659344, 39.709299746729386],
              '四川石化有限责任公司锦西石化分公司': [104.6494037048691, 28.75800702855183],
              '中国石油天然气股份有限公司大庆炼化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司哈尔滨石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司广西石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司四川石化有限责任公司': [116.44157539860383, 39.95201121539695],
              '中国石油天然气股份有限公司广东石化项目筹备组': [116.44157539860383, 39.95201121539695],
              '中国石油天然气股份有限公司大港石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司华北石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司呼和浩特石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司辽河石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司长庆石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司克拉玛依石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司庆阳石化分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司炼化工程建设项目部': [116.44157539860383, 39.95201121539695],
              '中国石油天然气股份有限公司东北化工销售分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司西北化工销售分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司华北化工销售分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司华东化工销售分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司华南化工销售分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司西南化工销售分公司': [116.01912387659344, 39.709299746729386],
              '北京油气调控中心': [116.43928265345072, 39.94888436347234],
              '中国石油天然气股份有限公司管道建设项目经理部': [116.44157539860383, 39.95201121539695],
              '中国石油天然气股份有限公司管道公司': [116.44157539860383, 39.95201121539695],
              '中国石油天然气股份有限公司西气东输管道分公司': [116.01912387659344, 39.709299746729386],
              '北京天然气管道有限公司': [115.92277800556232, 40.394853032338965],
              '中国石油天然气股份有限公司西部管道分公司': [116.01912387659344, 39.709299746729386],
              '中国石油天然气股份有限公司西南管道分公司筹备组': [116.01912387659344, 39.709299746729386],
              '昆仑燃气有限公司': [121.53786269917639, 31.231518689021847],
              '昆仑能源有限公司': [116.41262804252811, 40.00181004952795],
              '昆仑天然气利用有限公司': [122.15866187440093, 37.420116774277126],
              '中国石油天然气股份有限公司华北天然气销售分公司': [116.01912387659344, 39.709299746729386],
              '公司京唐液化天然气有限公司': [120.17094695720223, 30.375708987470908],
              '大连液化天然气有限公司': [121.62163148459285, 38.9189536667856],
              '江苏液化天然气有限公司': [118.76955164466914, 32.066776944293416],
              '中国石油化工集团公司': [116.39472292727267, 39.95803130459444],
              '胜利油田分公司': [118.49465210267513, 37.46829084447717],
              '中原油田分公司': [115.34913780350895, 35.82130342439147],
              '河南油田分公司': [112.61829327521188, 32.690797188055726],
              '江汉油田分公司': [107.27794560759958, 29.75938048205549],
              '江苏油田分公司': [119.4176173565297, 32.38708071173744],
              '南方勘探开发分公司': [122.08882760405525, 41.122443748048774],
              '上海海洋油气分公司': [121.53595128471225, 31.241642724142658],
              '西北油田分公司': [84.2679676600616, 41.788652889206105],
              '西南分公司': [104.07480619029096, 30.550791922573957],
              '华东分公司': [121.45488100904777, 31.068600836198296],
              '华北分公司': [116.30552640030382, 39.83550246209148],
              '东北分公司': [123.39744188114301, 41.738283299983685],
              '中南分公司': [120.2994462366742, 31.54406006402177],
              '天然气分公司': [116.43188160418457, 39.99105682578654],
              '中国石化西部新区勘探指挥部': [116.38738044752577, 39.88145834832466],
              '石家庄炼化分公司': [114.69923532637215, 37.99973483743079],
              '北京燕山分公司': [115.99723288995969, 39.73856056043073],
              '齐鲁分公司': [117.95108636062088, 36.67077495962622],
              '上海高桥分公司': [121.56832001698385, 31.338034863465424],
              '金陵分公司': [117.1081526717696, 40.31741725102371],
              '茂名分公司': [110.931542579969, 21.669064031332095],
              '天津分公司': [117.8180380620464, 39.031214457303676],
              '巴陵分公司': [113.1699711507022, 29.41011863754646],
              '长岭分公司': [123.9743741033988, 44.28163828005157],
              '广州分公司': [113.37331697570669, 22.98471164422369],
              '安庆分公司': [117.09824795521659, 30.542237904379125],
              '荆门分公司': [112.20639298023002, 31.041732575569622],
              '洛阳分公司': [112.4539022889193, 34.624047343982824],
              '九江分公司': [115.97859653861954, 29.706910013852095],
              '湖北化肥分公司': [115.99944703338069, 40.465236029816914],
              '济南分公司': [116.91851983962997, 36.696173862856924],
              '武汉分公司': [112.15917166465647, 32.05142570158253],
              '沧州分公司': [116.8308630083052, 38.29665571607656],
              '润滑油分公司': [110.90876074376853, 21.687694911130915],
              '管道储运分公司': [114.38943904074037, 30.597118802636235],
              '北海分公司': [109.11311486384571, 21.473514218700252],
              '催化剂分公司': [115.99723288995969, 39.73856056043073],
              '塔河分公司': [124.71651251448932, 52.34030508111336],
              '西安分公司': [108.87897379156543, 34.259160237347736],
              '天津石油分公司': [117.41646217195182, 38.995705092347684],
              '安徽石油分公司': [117.06360390491879, 30.53095656804304],
              '北京石油分公司': [116.62426702406788, 40.04802309621132],
              '福建石油分公司': [117.1422858557239, 39.229162080290905],
              '广东石油分公司': [113.39942236263188, 22.5223146707905],
              '广西石油分公司': [110.18619487315159, 25.24169878354397],
              '贵州石油分公司': [104.91249214626991, 25.09396734941651],
              '海南石油分公司': [100.62662114445924, 36.2921024798988],
              '河北石油分公司': [117.20359278135501, 39.15348514470478],
              '河南石油分公司': [101.62247338027404, 34.740396071091155],
              '湖北石油分公司': [114.27692636544619, 30.596594778072472],
              '湖南石油分公司': [117.12639941261048, 36.65655420178723],
              '江苏石油分公司': [120.632869035185, 31.278485972035682],
              '江西石油分公司': [104.8374375648582, 30.538218972179482],
              '山东石油分公司': [117.9774040171467, 37.3881961960769],
              '山西石油分公司': [113.12255886984902, 36.2012683721548],
              '上海石油分公司': [121.49540878077482, 31.24568289287693],
              '深圳石油分公司': [114.14692007385615, 22.56865268476035],
              '云南石油分公司': [103.72351177196889, 27.34408386024681],
              '浙江石油分公司': [113.2661739216338, 23.21033029637662],
              '辽宁石油分公司': [123.45536506957916, 41.838941723594814],
              '四川石油分公司': [104.6494037048691, 28.75800702855183],
              '重庆石油分公司': [106.58074420152344, 29.56262834898062],
              '陕西石油分公司': [108.95438608997532, 34.26801925929182],
              '内蒙古石油分公司': [113.23525649175433, 23.192427338700643],
              '新疆石油分公司': [116.37749100216642, 39.88624710609514],
              '吉林石油分公司': [126.55563450495482, 43.84356783457924],
              '黑龙江石油分公司': [126.61394278726681, 45.75196133634989],
              '青海石油分公司': [118.72231532739357, 32.00050491826547],
              '甘肃石油分公司': [98.29620384300111, 39.77796014739059],
              '宁夏石油分公司\xa0': [120.41180961359262, 36.08524139986461]
            },
          }
        }

        if (industryName == '煤炭开采和洗选业') {
          this.pointData = {
            data1: [
              {
                'name': '鞍钢大连',
                'value': 123.56
              },
              {
                'name': '广州南沙钢铁物流有限公司',
                'value': 66.41
              },
              {
                'name': '大连船舶重工集团钢业有限公司',
                'value': 62.09
              },
              {
                'name': '鞍钢新轧-蒂森克虏伯镀锌钢板有限公司',
                'value': 90.77
              },
              {
                'name': '鞍钢莆田',
                'value': 48.94
              },
              {
                'name': '鞍钢天铁',
                'value': 90.77
              },
              {
                'name': '宁波国贸',
                'value': 74.84
              },
              {
                'name': '烟台国贸',
                'value': 85.37
              },
              {
                'name': '广州鞍钢钢材加工有限公司',
                'value': 66.9
              },
              {
                'name': '鞍钢财务公司',
                'value': 66.59
              },
              {
                'name': '煤峪口矿',
                'value': 67.47
              },
              {
                'name': '同煤大唐塔山煤矿有限公司',
                'value': 79.37
              },
              {
                'name': '同家梁矿（梵王寺煤矿公司） ',
                'value': 67.47
              },
              {
                'name': '四老沟矿（内蒙古同煤鄂尔多斯矿业投资有限公司） ',
                'value': 67.47
              },
              {
                'name': '忻州窑矿',
                'value': 67.47
              },
              {
                'name': '同煤大唐热电有限公司 ',
                'value': 79.37
              },
              {
                'name': '同煤大唐塔山发电有限责任公司 ',
                'value': 79.37
              },
              {
                'name': '山西同华电力有限公司 ',
                'value': 110.76
              },
              {
                'name': '同煤国电王坪发电有限责任公司',
                'value': 79.37
              },
              {
                'name': '阳方口矿业有限责任公司',
                'value': 52.24
              },
              {
                'name': '虎峰煤业公司 ',
                'value': 89.2
              },
              {
                'name': '万杰煤业公司',
                'value': 86.87
              },
              {
                'name': '同煤华盛矿业有限公司 ',
                'value': 79.37
              },
              {
                'name': '金海煤业有限公司',
                'value': 70.06
              },
              {
                'name': '半沟煤业有限公司',
                'value': 78.33
              },
              {
                'name': '石门煤矿',
                'value': 89.63
              },
              {
                'name': '青磁窑煤矿 ',
                'value': 67.47
              },
              {
                'name': '杏儿沟煤业有限责任公司焦煤矿有限责任公司 ',
                'value': 86.02
              },
              {
                'name': '姜家湾煤矿 ',
                'value': 83.34
              },
              {
                'name': '马口煤矿 ',
                'value': 75.86
              },
              {
                'name': '东周窑煤矿 ',
                'value': 61.54
              },
              {
                'name': '运销公司 ',
                'value': 86.72
              },
              {
                'name': '资产管理公司',
                'value': 90.77
              },
              {
                'name': '新高山煤炭集运有限责任公司 （新高山能源公司）',
                'value': 118.97
              },
              {
                'name': '铁峰煤业有限责任公司 ',
                'value': 79.34
              },
              {
                'name': '王坪煤电有限责任公司 ',
                'value': 95.14
              },
              {
                'name': '小峪煤矿 ',
                'value': 119.65
              },
              {
                'name': '煤炭运销公司 ',
                'value': 86.72
              },
              {
                'name': '同朔同盛煤业公司',
                'value': 95.79
              },
              {
                'name': '树儿里煤业有限公司 ',
                'value': 46.65
              },
              {
                'name': '宏达煤业有限公司 ',
                'value': 97.25
              },
              {
                'name': '精通兴旺煤业有限公司 ',
                'value': 63.07
              },
              {
                'name': '峪沟煤业有限公司 ',
                'value': 104.75
              },
              {
                'name': '安平煤业有限公司',
                'value': 164.59
              },
              {
                'name': '千井煤业有限公司 ',
                'value': 83.34
              },
              {
                'name': '浩然煤业有限公司 ',
                'value': 127.1
              },
              {
                'name': '恒宝源煤业有限公司 ',
                'value': 58.99
              },
              {
                'name': '同安煤业有限公司 ',
                'value': 48.61
              },
              {
                'name': '同基煤业有限公司',
                'value': 133.81
              },
              {
                'name': '中央机厂 ',
                'value': 67.47
              },
              {
                'name': '科工安全仪器有限责任公司 ',
                'value': 61.41
              },
              {
                'name': '力泰有限责任公司 ',
                'value': 86.87
              },
              {
                'name': '中北机械有限公司 ',
                'value': 87.67
              },
              {
                'name': '大同同比机械制造有限公司 ',
                'value': 76.68
              },
              {
                'name': '同中电气有限责任公司',
                'value': 80.58
              },
              {
                'name': '天晟电气有限公司 ',
                'value': 75.49
              },
              {
                'name': '泰宝密封有限责任公司 ',
                'value': 88.73
              },
              {
                'name': '大同同力采掘机械制造有限责任公司',
                'value': 67.47
              },
              {
                'name': '大同菲利普采矿机械制造有限公司 ',
                'value': 76.68
              },
              {
                'name': '同吉液压有限公司 ',
                'value': 65.06
              },
              {
                'name': '研发中心',
                'value': 111.55
              },
              {
                'name': '锦程煤业有限公司 ',
                'value': 128.3
              },
              {
                'name': '豁口煤业有限公司 ',
                'value': 90.08
              },
              {
                'name': '雪坪煤业有限公司 ',
                'value': 95.79
              },
              {
                'name': '隆博煤业有限公司 ',
                'value': 41.04
              },
              {
                'name': '胜利煤业有限公司',
                'value': 65.13
              },
              {
                'name': '大同有限公司 ',
                'value': 76.68
              },
              {
                'name': '朔州有限公司 ',
                'value': 58.99
              },
              {
                'name': '忻州有限公司（安顺煤业有限公司、同舟煤业有限公司、同华煤业有限公司）',
                'value': 56.31
              },
              {
                'name': '朔州矿业有限公司',
                'value': 64.78
              },
              {
                'name': '陕西省煤炭物资供应公司 ',
                'value': 75.22
              },
              {
                'name': '陕西煤业股份有限公司 ',
                'value': 65.74
              },
              {
                'name': '陕西省煤炭运销（集团）有限责任公司 ',
                'value': 56.23
              },
              {
                'name': '陕西煤业化工集团公司安全技术研究中心 ',
                'value': 64.01
              },
              {
                'name': '陕西煤业化工技术开发中心有限责任公司 ',
                'value': 64.01
              },
              {
                'name': '陕西煤化工技术工程中心有限公司 ',
                'value': 64.01
              },
              {
                'name': '陕西煤业化工建设（集体）有限公司',
                'value': 64.01
              },
              {
                'name': ' 陕西煤业集体投资有限责任公司 ',
                'value': 64.01
              },
              {
                'name': '西安重工装备制造集团有限公司 ',
                'value': 135.63
              },
              {
                'name': '西安煤矿机械有限公司 ',
                'value': 135.63
              },
              {
                'name': '开源证券有限责任公司',
                'value': 70.03
              },
              {
                'name': '太原钢铁（集团）有限公司',
                'value': 111.71
              },
              {
                'name': '太原钢铁（集团）不锈钢工业园有限公司',
                'value': 111.71
              },
              {
                'name': '太钢新材料事业管理部',
                'value': 120.6
              },
              {
                'name': '太原钢铁（集团）国际经济贸易有限公司',
                'value': 111.71
              },
              {
                'name': '山西太钢工程技术有限公司',
                'value': 110.76
              },
              {
                'name': '太钢集团财务有限公司',
                'value': 93.36
              },
              {
                'name': '山西太钢投资公司',
                'value': 110.76
              },
              {
                'name': '通信分公司',
                'value': 50.42
              },
              {
                'name': '天溪煤制油分公司 ',
                'value': 45.91
              },
              {
                'name': '装备物资分公司 ',
                'value': 59.87
              },
              {
                'name': '凤凰山矿',
                'value': 111.03
              },
              {
                'name': '寺河煤矿',
                'value': 139.98
              },
              {
                'name': '深圳分公司',
                'value': 61.41
              },
              {
                'name': '阳泉煤业集团长沟煤矿有限责任公司',
                'value': 53.39
              },
              {
                'name': '阳泉煤业集团和顺新大地煤业有限公司',
                'value': 83.73
              },
              {
                'name': '山西阳煤集团碾沟煤业有限公司',
                'value': 103.04
              },
              {
                'name': '阳煤集团寿阳博奇发电有限责任公司',
                'value': 83.71
              },
              {
                'name': '山西昔阳运裕煤业有限责任公司',
                'value': 87.57
              },
              {
                'name': '昔阳县坪上煤业有限责任公司',
                'value': 87.57
              },
              {
                'name': '山西石港煤业有限责任公司',
                'value': 110.76
              },
              {
                'name': '阳泉市大阳泉煤炭有限责任公司',
                'value': 53.39
              },
              {
                'name': '山西阳煤集团南岭煤业有限公司',
                'value': 93.89
              },
              {
                'name': '华润电力(宁武)有限公司',
                'value': 104.15
              },
              {
                'name': '阳泉市南煤龙川发电有限责任公司',
                'value': 91.19
              },
              {
                'name': '阳泉煤业集团华越机械有限公司',
                'value': 90.23
              },
              {
                'name': '阳煤忻州通用机械有限责任公司',
                'value': 67.68
              },
              {
                'name': '西山煤电集团公司',
                'value': 84.47
              },
              {
                'name': '汾西矿业集团公司',
                'value': 77.72
              },
              {
                'name': '霍州煤电集团公司',
                'value': 84.9
              },
              {
                'name': '华晋焦煤有限责任公司',
                'value': 111.71
              },
              {
                'name': '煤钢联能源公司',
                'value': 50.42
              },
              {
                'name': '煤炭销售总公司和投资有限公司',
                'value': 86.56
              },
              {
                'name': '长治子公司',
                'value': 110.76
              },
              {
                'name': '大同子公司',
                'value': 76.68
              },
              {
                'name': '朔州子公司',
                'value': 58.99
              },
              {
                'name': '太原子公司',
                'value': 111.71
              },
              {
                'name': '晋城子公司',
                'value': 40.32
              },
              {
                'name': '吕梁孝义子公司',
                'value': 81.18
              },
              {
                'name': '晋中子公司',
                'value': 92.45
              },
              {
                'name': '运城子公司',
                'value': 112.98
              },
              {
                'name': '阳泉子公司',
                'value': 40.32
              },
              {
                'name': '临汾子公司',
                'value': 95.06
              },
              {
                'name': '吕梁交城子公司',
                'value': 70.44
              },
              {
                'name': '股份公司',
                'value': 114.75
              },
              {
                'name': '新钢公司',
                'value': 45.91
              },
              {
                'name': '迁钢公司',
                'value': 104.75
              },
              {
                'name': '首秦公司',
                'value': 79.37
              },
              {
                'name': '高新技术公司',
                'value': 45.91
              },
              {
                'name': '机电公司',
                'value': 107.75
              },
              {
                'name': '特钢公司',
                'value': 57.89
              },
              {
                'name': '首建公司',
                'value': 104.65
              },
              {
                'name': '房地产公司',
                'value': 104.15
              },
              {
                'name': '实业公司',
                'value': 90.77
              },
              {
                'name': '国际贸易工程公司',
                'value': 90.77
              },
              {
                'name': '武钢国际资源开发投资有限公司',
                'value': 88.73
              },
              {
                'name': '武汉钢铁集团矿业有限责任公司',
                'value': 80.95
              },
              {
                'name': '武汉钢铁集团交通运输有限责任公司',
                'value': 80.95
              },
              {
                'name': '武钢集团武汉江北钢铁有限责任公司',
                'value': 109.55
              },
              {
                'name': '武钢集团国际经济贸易总公司(武钢外事办公室)',
                'value': 80.95
              },
              {
                'name': '武汉钢铁工程技术集团有限责任公司',
                'value': 80.95
              },
              {
                'name': '武汉钢铁集团经营开发有限责任公司',
                'value': 80.95
              },
              {
                'name': '武汉钢铁建工集团有限责任公司',
                'value': 80.95
              },
              {
                'name': '武汉钢铁集团耐火材料有限责任公司',
                'value': 80.95
              },
              {
                'name': '武汉钢铁重工集团有限公司',
                'value': 80.95
              },
              {
                'name': '武汉钢铁集团海外事业部',
                'value': 80.95
              },
              {
                'name': '武汉钢铁股份有限公司',
                'value': 80.95
              },
              {
                'name': '武汉钢铁集团财务有限责任公司',
                'value': 80.95
              },
              {
                'name': '武汉钢电股份有限公司',
                'value': 109.55
              },
              {
                'name': '武钢巴西冶金投资有限公司',
                'value': 88.73
              },
              {
                'name': '武钢鄂城钢铁有限责任公司',
                'value': 105.26
              },
              {
                'name': '武钢广西钢铁集团有限公司',
                'value': 81.36
              },
              {
                'name': '武钢昆明钢铁股份有限公司',
                'value': 45.82
              },
              {
                'name': '江苏沙钢集团有限公司',
                'value': 92.88
              },
              {
                'name': '江苏沙钢集团锡兴特钢有限公司',
                'value': 92.88
              },
              {
                'name': '沙钢集团安阳永兴钢铁有限公司',
                'value': 144.46
              },
              {
                'name': '江苏沙钢物资贸易有限公司',
                'value': 94.11
              },
              {
                'name': '沙钢集团淮钢特钢有限公司',
                'value': 92.88
              },
              {
                'name': '沙钢集团国际贸易有限公司',
                'value': 92.88
              },
              {
                'name': '沙钢财务有限公司',
                'value': 92.88
              },
              {
                'name': '江苏沙钢煤焦化有限公司',
                'value': 94.11
              },
              {
                'name': '江苏沙钢农村小额贷款公司',
                'value': 92.88
              },
              {
                'name': '江苏省（沙钢》钢铁研究院张家港市沙钢铜业有限公司',
                'value': 92.88
              },
              {
                'name': '沙钢集团鑫瑞特钢有限公司',
                'value': 92.88
              },
              {
                'name': '江苏永钢集团有限公司',
                'value': 92.88
              },
              {
                'name': '张家港浦项不锈钢有限公司',
                'value': 92.88
              },
              {
                'name': '宣化钢铁集团有限责任公司',
                'value': 58.67
              },
              {
                'name': '唐山钢铁集团生活服务有限责任公',
                'value': 65.89
              },
              {
                'name': '唐山不锈钢有限公司',
                'value': 125.3
              },
              {
                'name': '唐山唐龙新型建材有限公司',
                'value': 54.59
              },
              {
                'name': '唐钢滦县司家营铁矿有限责任公司',
                'value': 118.71
              },
              {
                'name': '河北唐银钢铁有限公司',
                'value': 134.44
              },
              {
                'name': '承德钢铁集团有限公司',
                'value': 62.63
              },
              {
                'name': '国际贸易有限公司',
                'value': 90.77
              },
              {
                'name': '唐钢矿业有限公司',
                'value': 80.98
              },
              {
                'name': '唐山钢铁股份有限公司',
                'value': 74.86
              },
              {
                'name': '唐山唐昂新型建材有限公司',
                'value': 129.56
              },
              {
                'name': '承德新新钒钛股份有限公司',
                'value': 66.38
              },
              {
                'name': '唐山中厚板材有限公司',
                'value': 94.72
              },
              {
                'name': '唐山曹妃甸实业港务有限公司',
                'value': 104.95
              },
              {
                'name': '二炼钢厂',
                'value': 118.13
              },
              {
                'name': '考伯斯(中国)碳素化工有限公司',
                'value': 88.73
              },
              {
                'name': '唐山钢铁设计研究院有限公司',
                'value': 89.56
              },
              {
                'name': '唐山钢联焦化有限责任公司',
                'value': 100.23
              },
              {
                'name': '唐山时创耐火材料有限公司',
                'value': 125.3
              },
              {
                'name': '一轧钢厂',
                'value': 50.42
              },
              {
                'name': '唐山建筑安装有限责任公司',
                'value': 70.45
              },
              {
                'name': '邯钢青岛钢材销售分公司',
                'value': 82.0
              },
              {
                'name': '邯钢南京钢材销售分公司',
                'value': 99.07
              },
              {
                'name': '邯钢西安钢材销售分公司',
                'value': 136.45
              },
              {
                'name': '邯钢成都钢材销售分公司',
                'value': 95.79
              },
              {
                'name': '邯钢广州钢材销售分公司',
                'value': 71.93
              },
              {
                'name': '邯钢无锡钢材销售分公司',
                'value': 99.43
              },
              {
                'name': '邯钢驻郑州销售公司',
                'value': 98.78
              },
              {
                'name': '邯钢驻北京销售公司',
                'value': 171.79
              },
              {
                'name': '邯钢驻上海销售公司',
                'value': 171.79
              },
              {
                'name': '一炼钢厂',
                'value': 118.13
              },
              {
                'name': '二轧钢厂',
                'value': 50.42
              },
              {
                'name': '宝山钢铁股份有限公司',
                'value': 50.42
              },
              {
                'name': '宝钢集团上海第一钢铁有限公司',
                'value': 50.42
              },
              {
                'name': '宝钢集团上海浦东钢铁有限公司',
                'value': 50.42
              },
              {
                'name': '宝钢集团上海五钢有限公司',
                'value': 50.42
              },
              {
                'name': '新疆八一钢铁有限公司',
                'value': 94.76
              },
              {
                'name': '宁波钢铁有限公司',
                'value': 50.21
              },
              {
                'name': '广东韶关钢铁有限公司',
                'value': 63.45
              },
              {
                'name': '宝钢不锈钢有限公司',
                'value': 50.42
              },
              {
                'name': '宝钢特钢有限公司',
                'value': 50.42
              }
            ],
            data2:  {
              '鞍钢大连': [121.62163148459285, 38.9189536667856],
              '广州南沙钢铁物流有限公司': [113.67144427266537, 22.679146441605184],
              '大连船舶重工集团钢业有限公司': [121.2255700225324, 38.91765848912453],
              '鞍钢新轧-蒂森克虏伯镀锌钢板有限公司': [116.47377354265907, 39.89401094016436],
              '鞍钢莆田': [119.0145209781265, 25.45986545592271],
              '鞍钢天铁': [116.47377354265907, 39.89401094016436],
              '宁波国贸': [121.1303020282827, 30.054121213876822],
              '烟台国贸': [121.41098306453891, 37.54433308119206],
              '广州鞍钢钢材加工有限公司': [113.07529567879816, 23.397872580250738],
              '鞍钢财务公司': [123.00325823692062, 41.11708066959319],
              '煤峪口矿': [113.1525161908096, 40.03581247809592],
              '同煤大唐塔山煤矿有限公司': [119.58979557362719, 39.95399192981483],
              '同家梁矿（梵王寺煤矿公司） ': [113.09840559061894, 40.024181183276895],
              '四老沟矿（内蒙古同煤鄂尔多斯矿业投资有限公司） ': [113.05061097646892, 39.99076744061998],
              '忻州窑矿': [113.1487380076652, 40.047113344933926],
              '同煤大唐热电有限公司 ': [119.58979557362719, 39.95399192981483],
              '同煤大唐塔山发电有限责任公司 ': [119.58979557362719, 39.95399192981483],
              '山西同华电力有限公司 ': [113.12255886984902, 36.2012683721548],
              '同煤国电王坪发电有限责任公司': [119.58979557362719, 39.95399192981483],
              '阳方口矿业有限责任公司': [112.34116539656982, 39.11132237830699],
              '虎峰煤业公司 ': [106.32499635342555, 29.508603832205285],
              '万杰煤业公司': [120.9565104544893, 31.48166058349773],
              '同煤华盛矿业有限公司 ': [119.58979557362719, 39.95399192981483],
              '金海煤业有限公司': [121.5065790301303, 30.923222197029506],
              '半沟煤业有限公司': [116.76968831324515, 40.69417871555754],
              '石门煤矿': [111.386451407024, 29.590365966649998],
              '青磁窑煤矿 ': [113.19893567888498, 40.11299206636149],
              '杏儿沟煤业有限责任公司焦煤矿有限责任公司 ': [111.62221098335597, 33.79036740452232],
              '姜家湾煤矿 ': [121.50592173998865, 31.05548158665761],
              '马口煤矿 ': [107.17928354567412, 28.913885164443098],
              '东周窑煤矿 ': [112.885565035629, 40.0167845693306],
              '运销公司 ': [105.53596755306383, 29.376721849176732],
              '资产管理公司': [116.48384803895348, 39.917904050951975],
              '新高山煤炭集运有限责任公司 （新高山能源公司）': [104.0835962893672, 30.380622239513233],
              '铁峰煤业有限责任公司 ': [108.4101591950657, 30.974649944196994],
              '王坪煤电有限责任公司 ': [103.26082506768738, 30.570645571867598],
              '小峪煤矿 ': [109.07166661159427, 33.96676550230726],
              '煤炭运销公司 ': [105.53596755306383, 29.376721849176732],
              '同朔同盛煤业公司': [103.48756591230817, 30.411943601765664],
              '树儿里煤业有限公司 ': [115.35812084341411, 22.977901896830208],
              '宏达煤业有限公司 ': [115.74988886948427, 39.569033301709865],
              '精通兴旺煤业有限公司 ': [113.80788232703668, 22.68207854428979],
              '峪沟煤业有限公司 ': [118.5778579200285, 39.948453403186136],
              '安平煤业有限公司': [115.5255492853222, 38.24050692219121],
              '千井煤业有限公司 ': [121.38919331693614, 31.17732982221394],
              '浩然煤业有限公司 ': [104.11638057776769, 30.684370532921754],
              '恒宝源煤业有限公司 ': [112.32271060817283, 39.39992535343743],
              '同安煤业有限公司 ': [118.15856347661324, 24.729113975346568],
              '同基煤业有限公司': [113.04228242676369, 34.48139283069675],
              '中央机厂 ': [113.16138659839845, 40.010052106216236],
              '科工安全仪器有限责任公司 ': [113.92952304389978, 22.525246983696288],
              '力泰有限责任公司 ': [121.02506212422784, 31.361822789382092],
              '中北机械有限公司 ': [120.52484734845739, 30.613266650230198],
              '大同同比机械制造有限公司 ': [113.37336244450448, 40.102783001859564],
              '同中电气有限责任公司': [121.22968507024305, 31.60318803040563],
              '天晟电气有限公司 ': [121.24934457615947, 37.51659076434129],
              '泰宝密封有限责任公司 ': [121.19724456336121, 31.12774362423274],
              '大同同力采掘机械制造有限责任公司': [113.1590330379623, 40.00559635548095],
              '大同菲利普采矿机械制造有限公司 ': [113.37336244450448, 40.102783001859564],
              '同吉液压有限公司 ': [108.4107192756515, 22.314368763350704],
              '研发中心': [116.64887682215814, 40.0925657694961],
              '锦程煤业有限公司 ': [104.02596882310495, 30.641552240782847],
              '豁口煤业有限公司 ': [115.42373650661847, 30.234836067475342],
              '雪坪煤业有限公司 ': [103.22030834511808, 30.477660865905605],
              '隆博煤业有限公司 ': [122.28930981082222, 43.61741656373858],
              '胜利煤业有限公司': [109.46416216010233, 31.437798392746533],
              '大同有限公司 ': [113.30074064233078, 40.07042616503727],
              '朔州有限公司 ': [112.4393709396677, 39.337108370541735],
              '忻州有限公司（安顺煤业有限公司、同舟煤业有限公司、同华煤业有限公司）': [111.09434564534399, 39.02808713072739],
              '朔州矿业有限公司': [113.10979520617995, 39.83674762002197],
              '陕西省煤炭物资供应公司 ': [108.94733079849995, 34.28607218977778],
              '陕西煤业股份有限公司 ': [108.89379196976637, 34.19682706399633],
              '陕西省煤炭运销（集团）有限责任公司 ': [108.89369171887147, 34.196993226475605],
              '陕西煤业化工集团公司安全技术研究中心 ': [114.11822568062152, 22.569747576708668],
              '陕西煤业化工技术开发中心有限责任公司 ': [114.11822568062152, 22.569747576708668],
              '陕西煤化工技术工程中心有限公司 ': [114.11822568062152, 22.569747576708668],
              '陕西煤业化工建设（集体）有限公司': [114.11822568062152, 22.569747576708668],
              ' 陕西煤业集体投资有限责任公司 ': [114.11822568062152, 22.569747576708668],
              '西安重工装备制造集团有限公司 ': [109.01487358132023, 34.49516185063724],
              '西安煤矿机械有限公司 ': [109.01483100163907, 34.495517008259085],
              '开源证券有限责任公司': [113.24976053251365, 22.84829904448187],
              '太原钢铁（集团）有限公司': [112.56663334228297, 37.92145356065619],
              '太原钢铁（集团）不锈钢工业园有限公司': [112.56663334228297, 37.92145356065619],
              '太钢新材料事业管理部': [117.45162184961235, 39.04387740023621],
              '太原钢铁（集团）国际经济贸易有限公司': [112.56663334228297, 37.92145356065619],
              '山西太钢工程技术有限公司': [113.12255886984902, 36.2012683721548],
              '太钢集团财务有限公司': [112.54497690321786, 37.92318082570186],
              '山西太钢投资公司': [113.12255886984902, 36.2012683721548],
              '通信分公司': [121.35017793236568, 31.3221815599778],
              '天溪煤制油分公司 ': [114.2564693290673, 22.695710504658884],
              '装备物资分公司 ': [104.06735097320255, 30.667674847851956],
              '凤凰山矿': [116.98858389652509, 36.64393459768836],
              '寺河煤矿': [113.6561685122751, 34.46669265830058],
              '深圳分公司': [113.95939538514928, 22.57317194613294],
              '阳泉煤业集团长沟煤矿有限责任公司': [113.56761301611817, 37.87568599895289],
              '阳泉煤业集团和顺新大地煤业有限公司': [113.58743062380434, 37.35927969069011],
              '山西阳煤集团碾沟煤业有限公司': [112.65237292015776, 36.13588687103211],
              '阳煤集团寿阳博奇发电有限责任公司': [113.24111678190314, 37.98905703266573],
              '山西昔阳运裕煤业有限责任公司': [113.71361290387442, 37.61788404299596],
              '昔阳县坪上煤业有限责任公司': [113.65417041132925, 37.643571057254256],
              '山西石港煤业有限责任公司': [113.12255886984902, 36.2012683721548],
              '阳泉市大阳泉煤炭有限责任公司': [113.57948645902685, 37.8711588593094],
              '山西阳煤集团南岭煤业有限公司': [112.68811883199412, 36.320542196571786],
              '华润电力(宁武)有限公司': [116.55719701943751, 39.787605594700835],
              '阳泉市南煤龙川发电有限责任公司': [113.71744300907731, 37.7984590124428],
              '阳泉煤业集团华越机械有限公司': [113.55271812262669, 37.87630223337681],
              '阳煤忻州通用机械有限责任公司': [112.74861063520548, 38.42491912929998],
              '西山煤电集团公司': [112.46662660680703, 37.860284930166564],
              '汾西矿业集团公司': [111.56954629571415, 36.65878226423185],
              '霍州煤电集团公司': [111.80097872052187, 36.57459955995836],
              '华晋焦煤有限责任公司': [112.57591840769518, 37.88053121012726],
              '煤钢联能源公司': [121.3490101352027, 31.309594715663742],
              '煤炭销售总公司和投资有限公司': [119.87520699686839, 36.91169610779473],
              '长治子公司': [113.12255886984902, 36.2012683721548],
              '大同子公司': [113.37336244450448, 40.102783001859564],
              '朔州子公司': [112.4393709396677, 39.337108370541735],
              '太原子公司': [112.55639149167204, 37.87698902884778],
              '晋城子公司': [112.85857823132879, 35.49628458647257],
              '吕梁孝义子公司': [112.00636082452357, 37.39017341855777],
              '晋中子公司': [112.75959475565928, 37.69283940975972],
              '运城子公司': [111.01338945447925, 35.03270691290923],
              '阳泉子公司': [113.58761666287546, 37.862360847859385],
              '临汾子公司': [111.52553022403073, 36.093741895419726],
              '吕梁交城子公司': [112.16256770863693, 37.55777223625885],
              '股份公司': [118.32260090597678, 35.09814753666622],
              '新钢公司': [114.26151394331801, 22.751526350627206],
              '迁钢公司': [118.56769503047192, 39.99495704788315],
              '首秦公司': [119.53431496770322, 40.019030071459404],
              '高新技术公司': [114.30544503528567, 22.79024390037963],
              '机电公司': [116.26904729151023, 39.923991144523605],
              '特钢公司': [116.19254804343325, 39.92856506325526],
              '首建公司': [118.58379410249955, 31.703948949608595],
              '房地产公司': [116.65984297650174, 39.8665193609861],
              '实业公司': [116.50365720256787, 39.98030915187989],
              '国际贸易工程公司': [116.51913303023265, 39.91784310947214],
              '武钢国际资源开发投资有限公司': [121.29023400568485, 31.10933083245545],
              '武汉钢铁集团矿业有限责任公司': [114.4459477573205, 30.637555798713123],
              '武汉钢铁集团交通运输有限责任公司': [114.38674771743248, 30.62559934505711],
              '武钢集团武汉江北钢铁有限责任公司': [114.34677276291626, 30.600070399314],
              '武钢集团国际经济贸易总公司(武钢外事办公室)': [114.44580528606662, 30.610257104746694],
              '武汉钢铁工程技术集团有限责任公司': [114.4459477573205, 30.637555798713123],
              '武汉钢铁集团经营开发有限责任公司': [114.4459477573205, 30.637555798713123],
              '武汉钢铁建工集团有限责任公司': [114.4459477573205, 30.637555798713123],
              '武汉钢铁集团耐火材料有限责任公司': [114.38674771743248, 30.62559934505711],
              '武汉钢铁重工集团有限公司': [114.4459477573205, 30.637555798713123],
              '武汉钢铁集团海外事业部': [114.38674771743248, 30.62559934505711],
              '武汉钢铁股份有限公司': [114.4459477573205, 30.637555798713123],
              '武汉钢铁集团财务有限责任公司': [114.4459477573205, 30.637555798713123],
              '武汉钢电股份有限公司': [114.4781157183106, 30.64442953230699],
              '武钢巴西冶金投资有限公司': [121.29023400568485, 31.10933083245545],
              '武钢鄂城钢铁有限责任公司': [114.87684595621067, 30.40717692942031],
              '武钢广西钢铁集团有限公司': [110.18619487315159, 25.24169878354397],
              '武钢昆明钢铁股份有限公司': [102.49877201126067, 24.907611033504335],
              '江苏沙钢集团有限公司': [120.64538835975536, 31.97712972220932],
              '江苏沙钢集团锡兴特钢有限公司': [120.65109376754089, 31.97481672049019],
              '沙钢集团安阳永兴钢铁有限公司': [114.16780497311326, 36.14977486356506],
              '江苏沙钢物资贸易有限公司': [120.632869035185, 31.278485972035682],
              '沙钢集团淮钢特钢有限公司': [120.64538835975536, 31.97712972220932],
              '沙钢集团国际贸易有限公司': [120.76987203393661, 31.94844398884811],
              '沙钢财务有限公司': [120.6486031256839, 31.97435351579327],
              '江苏沙钢煤焦化有限公司': [120.632869035185, 31.278485972035682],
              '江苏沙钢农村小额贷款公司': [120.76987203393661, 31.94844398884811],
              '江苏省（沙钢》钢铁研究院张家港市沙钢铜业有限公司': [120.76987203393661, 31.94844398884811],
              '沙钢集团鑫瑞特钢有限公司': [120.64538835975536, 31.97712972220932],
              '江苏永钢集团有限公司': [120.74611760235295, 31.846020251525612],
              '张家港浦项不锈钢有限公司': [120.58000501355052, 31.98310897926066],
              '宣化钢铁集团有限责任公司': [115.07389501897958, 40.61391797788002],
              '唐山钢铁集团生活服务有限责任公': [118.2229181892983, 39.64442550462457],
              '唐山不锈钢有限公司': [118.48192814410962, 39.73535120684984],
              '唐山唐龙新型建材有限公司': [118.18645947203979, 39.63658372414733],
              '唐钢滦县司家营铁矿有限责任公司': [118.75669267078547, 39.676403154612544],
              '河北唐银钢铁有限公司': [118.22444198493488, 39.7058501159517],
              '承德钢铁集团有限公司': [117.7424246330328, 40.95747300011912],
              '国际贸易有限公司': [116.46084333314846, 39.915146411556286],
              '唐钢矿业有限公司': [118.21666742023767, 39.65727365464793],
              '唐山钢铁股份有限公司': [118.65003874402736, 40.59970217144786],
              '唐山唐昂新型建材有限公司': [118.05689031070544, 39.633048674127366],
              '承德新新钒钛股份有限公司': [117.96939750996681, 40.95785601233803],
              '唐山中厚板材有限公司': [119.03409084955548, 39.28104571664203],
              '唐山曹妃甸实业港务有限公司': [118.5108083069332, 38.92936678684741],
              '二炼钢厂': [117.85676823461743, 36.094775692964824],
              '考伯斯(中国)碳素化工有限公司': [121.28853620827098, 31.041645942265365],
              '唐山钢铁设计研究院有限公司': [118.18348239774917, 39.65161570691917],
              '唐山钢联焦化有限责任公司': [118.18645947203979, 39.63658372414733],
              '唐山时创耐火材料有限公司': [118.42534909020806, 39.73394203435418],
              '一轧钢厂': [121.48523403358551, 31.3715829119026],
              '唐山建筑安装有限责任公司': [118.18645947203979, 39.63658372414733],
              '邯钢青岛钢材销售分公司': [120.02772148601356, 35.89557065790105],
              '邯钢南京钢材销售分公司': [118.72577299513203, 31.965973996408955],
              '邯钢西安钢材销售分公司': [108.87197724927042, 34.28474899743573],
              '邯钢成都钢材销售分公司': [103.68560895012388, 30.315881899703292],
              '邯钢广州钢材销售分公司': [113.34165916242615, 23.11249474973216],
              '邯钢无锡钢材销售分公司': [120.13949575417854, 31.625507380502565],
              '邯钢驻郑州销售公司': [113.63141920733915, 34.75343885045448],
              '邯钢驻北京销售公司': [114.49728367145197, 36.59781603874793],
              '邯钢驻上海销售公司': [114.49728367145197, 36.59781603874793],
              '一炼钢厂': [117.85676823461743, 36.094775692964824],
              '二轧钢厂': [121.48523403358551, 31.3715829119026],
              '宝山钢铁股份有限公司': [121.48742958208244, 31.416352050451618],
              '宝钢集团上海第一钢铁有限公司': [121.48985347984002, 31.35214529180672],
              '宝钢集团上海浦东钢铁有限公司': [121.47816185396655, 31.34829677060325],
              '宝钢集团上海五钢有限公司': [121.49632541171721, 31.38645684703554],
              '新疆八一钢铁有限公司': [87.30353143090915, 43.86408249222576],
              '宁波钢铁有限公司': [121.8736951848708, 29.915710001473744],
              '广东韶关钢铁有限公司': [113.6299288140438, 24.697758127912767],
              '宝钢不锈钢有限公司': [121.49450607356786, 31.35348288513263],
              '宝钢特钢有限公司': [121.48752597026368, 31.37585785586988]
            },
          }
        }

        if (industryName == '烟草制品业') {
          this.pointData = {
            data1: [
              {
                'name': '中国烟草总公司海南省公司',
                'value': 90.77
              },
              {
                'name': '福建贝森蜂窝新型材料有限公司',
                'value': 131.63
              },
              {
                'name': '江苏格瑞实业有限责任公司',
                'value': 100.72
              },
              {
                'name': '厦门鑫叶物流服务有限公司',
                'value': 80.89
              },
              {
                'name': '北京海南金龙烟草贸易中心',
                'value': 90.77
              },
              {
                'name': '上海烟草集团北京卷烟厂有限公司',
                'value': 104.15
              },
              {
                'name': '遵义银江生态农业开发有限公司',
                'value': 74.38
              },
              {
                'name': '将军盛世康养文旅投资发展(烟台)有限公司',
                'value': 74.59
              },
              {
                'name': '云南中烟工业有限责任公司',
                'value': 71.5
              },
              {
                'name': '上海新型烟草制品研究院有限公司',
                'value': 67.46
              },
              {
                'name': '中国烟叶公司',
                'value': 79.34
              },
              {
                'name': '中烟国际货运代理有限责任公司',
                'value': 100.72
              },
              {
                'name': '福建红狼实业有限责任公司',
                'value': 41.24
              },
              {
                'name': '龙岩富健房地产综合开发有限公司',
                'value': 41.24
              },
              {
                'name': '颐中(青岛)物流有限公司',
                'value': 100.23
              },
              {
                'name': '山东将军开元纸业有限公司',
                'value': 131.64
              },
              {
                'name': '云南九九物业管理有限公司',
                'value': 71.5
              },
              {
                'name': '上海海烟投资管理有限公司',
                'value': 67.46
              },
              {
                'name': '中国烟草上海进出口有限责任公司',
                'value': 78.59
              },
              {
                'name': '厦门鑫恒晟印务有限公司',
                'value': 50.98
              },
              {
                'name': '山东将军烟草新材料科技有限公司',
                'value': 60.23
              },
              {
                'name': '云南九九彩印有限公司',
                'value': 71.5
              },
              {
                'name': '颐中(青岛)烟草机械有限公司',
                'value': 56.89
              },
              {
                'name': '上海烟草集团有限责任公司',
                'value': 47.23
              },
              {
                'name': '昆明重久房地产开发有限公司',
                'value': 47.94
              },
              {
                'name': '海南烟草物资供应有限公司',
                'value': 24.66
              },
              {
                'name': '厦门五福印务有限公司',
                'value': 50.98
              },
              {
                'name': '福建金闽再造烟叶发展有限公司',
                'value': 41.92
              },
              {
                'name': '中国烟草总公司广东省公司',
                'value': 50.12
              },
              {
                'name': '上海金叶大厦有限公司',
                'value': 67.46
              },
              {
                'name': '上海高扬国际烟草有限公司',
                'value': 65.23
              },
              {
                'name': '贵阳黄果树纸业有限公司',
                'value': 67.15
              },
              {
                'name': '昭通龙泉实业有限责任公司',
                'value': 71.5
              },
              {
                'name': '颐中(滕州)实业有限公司',
                'value': 120.77
              },
              {
                'name': '颐中(菏泽)实业有限公司',
                'value': 138.0
              },
              {
                'name': '上海烟草集团苏州中华园大饭店有限责任公司',
                'value': 80.29
              },
              {
                'name': '云南九九集团有限公司',
                'value': 71.5
              },
              {
                'name': '贵州福贵投资管理有限公司',
                'value': 64.16
              },
              {
                'name': '安徽焦甜香生物科技有限公司',
                'value': 109.2
              },
              {
                'name': '上海烟草集团友谊门市部',
                'value': 91.5
              },
              {
                'name': '上海海烟烟行连锁企业管理有限公司',
                'value': 70.06
              },
              {
                'name': '广东二十支商业连锁有限公司',
                'value': 52.23
              },
              {
                'name': '新疆红雪莲商务服务有限公司',
                'value': 41.56
              },
              {
                'name': '江西中烟工业有限责任公司',
                'value': 68.41
              },
              {
                'name': '青岛颐中物业管理有限公司',
                'value': 64.23
              },
              {
                'name': '贵州中烟工业有限责任公司',
                'value': 64.16
              },
              {
                'name': '滁州红三环大酒店有限责任公司',
                'value': 92.28
              },
              {
                'name': '江西金圣实业发展有限公司',
                'value': 91.77
              },
              {
                'name': '厦门悦宾贸易有限公司',
                'value': 52.17
              },
              {
                'name': '厦门悦宾贸易有限公司',
                'value': 52.17
              },
              {
                'name': '海南卷烟厂',
                'value': 24.66
              },
              {
                'name': '颐中(烟台)实业有限公司',
                'value': 75.49
              },
              {
                'name': '云南中烟新材料科技有限公司',
                'value': 71.5
              },
              {
                'name': '山东省烟草物资设备有限公司',
                'value': 118.74
              },
              {
                'name': '福建中烟置业有限责任公司',
                'value': 131.63
              },
              {
                'name': '云南九九物流有限公司',
                'value': 71.5
              },
              {
                'name': '上海烟草集团香精香料研究所',
                'value': 56.29
              },
              {
                'name': '将军烟草集团有限公司',
                'value': 80.59
              },
              {
                'name': '厦门鑫叶房地产开发有限公司',
                'value': 50.98
              },
              {
                'name': '颐中烟草(集团)有限公司',
                'value': 63.07
              },
              {
                'name': '海南烟草兴隆温泉度假村',
                'value': 76.9
              },
              {
                'name': '山东将军三名置业有限公司',
                'value': 80.59
              },
              {
                'name': '济南九州纸业有限公司',
                'value': 142.89
              },
              {
                'name': '上海白玉兰烟草材料有限公司',
                'value': 67.46
              },
              {
                'name': '厦门鑫叶印务有限公司',
                'value': 52.17
              },
              {
                'name': '莱州通亚印刷制品有限公司',
                'value': 85.04
              },
              {
                'name': '山东将军盛世(泰安)置业有限公司',
                'value': 100.23
              },
              {
                'name': '青岛颐中国际大酒店有限公司',
                'value': 133.41
              },
              {
                'name': '厦门通仙实业有限公司',
                'value': 50.98
              },
              {
                'name': '将军控股有限公司',
                'value': 45.26
              },
              {
                'name': '厦门红狼投资管理有限公司',
                'value': 48.61
              },
              {
                'name': '山东将军春天物业管理有限公司',
                'value': 59.26
              },
              {
                'name': '山东泰山品牌文化传播有限公司',
                'value': 43.19
              },
              {
                'name': '海南琼烟购销有限公司',
                'value': 24.66
              },
              {
                'name': '将军集团德州实业有限公司',
                'value': 59.29
              },
              {
                'name': '青岛颐中投资发展有限公司',
                'value': 104.15
              },
              {
                'name': '福建中烟工业有限责任公司',
                'value': 131.63
              },
              {
                'name': '福建省石狮市富兴包装材料有限公司',
                'value': 50.6
              },
              {
                'name': '云南红塔烟叶物资有限责任公司',
                'value': 97.2
              },
              {
                'name': '上海海烟烟草糖酒有限公司',
                'value': 80.29
              },
              {
                'name': '云南红云房地产开发有限公司',
                'value': 71.77
              },
              {
                'name': '青岛颐中科技有限公司',
                'value': 78.59
              },
              {
                'name': '贵州新贵物业管理有限公司',
                'value': 64.16
              },
              {
                'name': '上海浦杨经贸有限公司',
                'value': 67.46
              },
              {
                'name': '上海烟草集团太仓海烟烟草薄片有限公司',
                'value': 78.59
              },
              {
                'name': '厦门鑫叶包装材料有限公司',
                'value': 50.98
              },
              {
                'name': '将军集团沂水实业有限公司',
                'value': 68.79
              },
              {
                'name': '江苏中烟工业有限责任公司',
                'value': 99.07
              },
              {
                'name': '北京中烟永发经贸公司',
                'value': 121.65
              },
              {
                'name': '将军集团临清实业有限公司',
                'value': 148.82
              },
              {
                'name': '昆明九通物业管理有限公司',
                'value': 57.28
              },
              {
                'name': '重庆中烟工业有限责任公司',
                'value': 82.85
              },
              {
                'name': '许昌帝豪物业管理有限公司',
                'value': 148.93
              },
              {
                'name': '颐中(潍坊)实业有限公司',
                'value': 115.87
              },
              {
                'name': '红塔烟草(集团)有限责任公司',
                'value': 48.84
              },
              {
                'name': '南通烟滤嘴有限责任公司',
                'value': 86.93
              },
              {
                'name': '山东鲁烟莱州印务有限公司',
                'value': 118.74
              },
              {
                'name': '上海海烟实业有限公司',
                'value': 83.34
              },
              {
                'name': '龙岩烟草工业有限责任公司',
                'value': 41.24
              },
              {
                'name': '广东粤烟投资管理有限公司',
                'value': 59.26
              }
            ],
            data2: {
              '中国烟草总公司海南省公司': [116.57887313139328, 40.01421054240745],
              '福建贝森蜂窝新型材料有限公司': [117.1422858557239, 39.229162080290905],
              '江苏格瑞实业有限责任公司': [118.76818738809115, 32.100226935104395],
              '厦门鑫叶物流服务有限公司': [118.09643549976651, 24.485406605176305],
              '北京海南金龙烟草贸易中心': [116.48853997846265, 39.91524305015348],
              '上海烟草集团北京卷烟厂有限公司': [116.64377444686146, 39.87212783578556],
              '遵义银江生态农业开发有限公司': [106.94884895870298, 27.50046694668598],
              '将军盛世康养文旅投资发展(烟台)有限公司': [120.13898089066942, 23.211837619816166],
              '云南中烟工业有限责任公司': [103.72351177196889, 27.34408386024681],
              '上海新型烟草制品研究院有限公司': [121.63218702348784, 31.137543821023105],
              '中国烟叶公司': [108.36916771803439, 30.85714351025727],
              '中烟国际货运代理有限责任公司': [117.20540403475478, 34.277619727172876],
              '福建红狼实业有限责任公司': [117.01066674547528, 25.04648273928783],
              '龙岩富健房地产综合开发有限公司': [117.02344756677536, 25.081219844871676],
              '颐中(青岛)物流有限公司': [120.35053197272114, 36.09401691504958],
              '山东将军开元纸业有限公司': [117.19189917920943, 36.980633000207526],
              '云南九九物业管理有限公司': [103.72152840323406, 27.33046784717545],
              '上海海烟投资管理有限公司': [121.7812432160807, 31.19114882914185],
              '中国烟草上海进出口有限责任公司': [121.48541001163493, 31.23653090109175],
              '厦门鑫恒晟印务有限公司': [118.00101703937543, 24.53049246670311],
              '山东将军烟草新材料科技有限公司': [120.13898089066942, 23.211837619816166],
              '云南九九彩印有限公司': [103.72351177196889, 27.34408386024681],
              '颐中(青岛)烟草机械有限公司': [120.35450508816122, 36.09245230871723],
              '上海烟草集团有限责任公司': [121.52316830747472, 31.26793118062545],
              '昆明重久房地产开发有限公司': [102.60119303259138, 24.680522470695404],
              '海南烟草物资供应有限公司': [100.62662114445924, 36.2921024798988],
              '厦门五福印务有限公司': [118.00101703937543, 24.53049246670311],
              '福建金闽再造烟叶发展有限公司': [119.54403515572713, 26.490750175983266],
              '中国烟草总公司广东省公司': [113.7473883679121, 23.027674769638278],
              '上海金叶大厦有限公司': [121.6033370437294, 31.27839785962646],
              '上海高扬国际烟草有限公司': [121.48053886017651, 31.235929042252014],
              '贵阳黄果树纸业有限公司': [106.66288480817595, 26.57621474626698],
              '昭通龙泉实业有限责任公司': [103.72017528564483, 27.32696075888559],
              '颐中(滕州)实业有限公司': [117.17256521920983, 35.120034809573916],
              '颐中(菏泽)实业有限公司': [115.45531697580503, 35.257993924470604],
              '上海烟草集团苏州中华园大饭店有限责任公司': [121.52028133322675, 31.266970009592246],
              '云南九九集团有限公司': [103.72351177196889, 27.34408386024681],
              '贵州福贵投资管理有限公司': [104.91249214626991, 25.09396734941651],
              '安徽焦甜香生物科技有限公司': [116.39681499097486, 34.429997975196756],
              '上海烟草集团友谊门市部': [121.41733076076407, 31.218479550873433],
              '上海海烟烟行连锁企业管理有限公司': [121.47591582069997, 30.918270493500465],
              '广东二十支商业连锁有限公司': [113.36927496023532, 22.504161957803987],
              '新疆红雪莲商务服务有限公司': [87.63347320573824, 43.79923810128996],
              '江西中烟工业有限责任公司': [114.89456438853962, 25.86469876155314],
              '青岛颐中物业管理有限公司': [120.35053197272114, 36.09401691504958],
              '贵州中烟工业有限责任公司': [104.91249214626991, 25.09396734941651],
              '滁州红三环大酒店有限责任公司': [118.33402501646937, 32.30736208303739],
              '江西金圣实业发展有限公司': [115.94590010450872, 28.66182085115517],
              '厦门悦宾贸易有限公司': [118.1302596666142, 24.498868621533465],
              '海南卷烟厂': [100.62662114445924, 36.2921024798988],
              '颐中(烟台)实业有限公司': [121.22836698656826, 37.53319921471479],
              '云南中烟新材料科技有限公司': [103.72351177196889, 27.34408386024681],
              '山东省烟草物资设备有限公司': [117.9774040171467, 37.3881961960769],
              '福建中烟置业有限责任公司': [117.1422858557239, 39.229162080290905],
              '云南九九物流有限公司': [103.72351177196889, 27.34408386024681],
              '上海烟草集团香精香料研究所': [121.52316830747472, 31.26793118062545],
              '将军烟草集团有限公司': [120.13898089066942, 23.211837619816166],
              '厦门鑫叶房地产开发有限公司': [118.00105440888463, 24.530488932816493],
              '颐中烟草(集团)有限公司': [113.80937522096323, 22.691042105294414],
              '海南烟草兴隆温泉度假村': [117.50742737263927, 40.42345402963516],
              '山东将军三名置业有限公司': [120.13898089066942, 23.211837619816166],
              '济南九州纸业有限公司': [116.961111108944, 36.72639093842993],
              '上海白玉兰烟草材料有限公司': [121.62806685543578, 31.199204471012823],
              '厦门鑫叶印务有限公司': [118.1340824955412, 24.52936531613638],
              '莱州通亚印刷制品有限公司': [119.94859307736998, 37.18263660907421],
              '山东将军盛世(泰安)置业有限公司': [120.13898089066942, 23.211837619816166],
              '青岛颐中国际大酒店有限公司': [116.51499561471479, 39.80222139790079],
              '厦门通仙实业有限公司': [117.99409990728977, 24.51986857392083],
              '将军控股有限公司': [120.13898089066942, 23.211837619816166],
              '厦门红狼投资管理有限公司': [118.13777893288298, 24.70899873467168],
              '山东将军春天物业管理有限公司': [120.13898089066942, 23.211837619816166],
              '山东泰山品牌文化传播有限公司': [117.14141108581828, 36.199444601195346],
              '海南琼烟购销有限公司': [100.62662114445924, 36.2921024798988],
              '将军集团德州实业有限公司': [120.13898089066942, 23.211837619816166],
              '青岛颐中投资发展有限公司': [116.73332553501511, 39.94773273301524],
              '福建中烟工业有限责任公司': [117.1422858557239, 39.229162080290905],
              '福建省石狮市富兴包装材料有限公司': [118.67055126456722, 24.76766677238464],
              '云南红塔烟叶物资有限责任公司': [105.05196009529483, 27.84854735232925],
              '上海海烟烟草糖酒有限公司': [121.54206227743553, 31.28120267908488],
              '云南红云房地产开发有限公司': [102.7370928223013, 25.112750121036623],
              '青岛颐中科技有限公司': [120.35450508816122, 36.09245230871723],
              '贵州新贵物业管理有限公司': [104.90243795168335, 25.064289245673255],
              '上海浦杨经贸有限公司': [121.53480064518453, 31.212316015181564],
              '上海烟草集团太仓海烟烟草薄片有限公司': [121.52526513219611, 31.267764195616177],
              '厦门鑫叶包装材料有限公司': [118.00105440888463, 24.530488932816493],
              '将军集团沂水实业有限公司': [120.13898089066942, 23.211837619816166],
              '江苏中烟工业有限责任公司': [118.75623920616403, 32.009015669050704],
              '北京中烟永发经贸公司': [116.33417399183087, 39.83314609477986],
              '将军集团临清实业有限公司': [115.73256414941882, 36.85345543305536],
              '昆明九通物业管理有限公司': [102.73495431620496, 25.033323866228027],
              '重庆中烟工业有限责任公司': [108.7855297037997, 29.53141074461196],
              '许昌帝豪物业管理有限公司': [113.84220174440573, 34.04473464461156],
              '颐中(潍坊)实业有限公司': [118.48741292806189, 36.680225603823196],
              '红塔烟草(集团)有限责任公司': [102.5658374345108, 24.338009203942203],
              '南通烟滤嘴有限责任公司': [120.9388153630621, 32.03870912815487],
              '山东鲁烟莱州印务有限公司': [117.9774040171467, 37.3881961960769],
              '上海海烟实业有限公司': [121.36242713646918, 31.110213389517057],
              '龙岩烟草工业有限责任公司': [117.04362494581162, 25.053244048433193],
              '广东粤烟投资管理有限公司': [113.85738965045569, 23.09918224537564]
            },
          }
        }
        // 文字
        for (let i = 0; i < industryproinfo.length; i++) {
          if (industryproinfo[i].industryName == industryName) {
            this.industryData = industryproinfo[i].industryData
          }
        }
        // 柱形图
        for (let i = 0; i < industrybar.length; i++) {
          if (industrybar[i].industryName == industryName) {
            this.barData = industrybar[i].barData
          }
        }
      },
      proDataChange: function (val,oldVal) {
        let pm2Vallue = val.pm2Vallue
        let pm10Value = val.pm10Value
        let so2Value = val.so2Value
        let no2Value = val.no2Value
        let coValue = val.coValue
        let o3Value = val.o3Value

        let temp_pm2 = this.temp_pm2Vallue - pm2Vallue
        let temp_pm10 = this.temp_pm10Value - pm10Value
        let temp_so2 = this.temp_so2Value - so2Value
        let temp_no2 = this.temp_no2Value - no2Value
        let temp_co = this.temp_coValue - coValue
        let temp_o3 = this.temp_o3Value - o3Value

        if (temp_pm2 >= 0 && temp_pm10 >= 0 && temp_so2 >= 0 && temp_no2 >= 0 && temp_co >= 0 && temp_o3 >= 0 ) {
          this.change_pm2Vallue = parseFloat((temp_pm2 * 8.38).toFixed(2))
          this.change_pm10Value = parseFloat((temp_pm10 * 8.38).toFixed(2))
          this.change_so2Value = parseFloat((temp_so2 * 8.38).toFixed(2))
          this.change_no2Value = parseFloat((temp_no2 * 8.38).toFixed(2))
          this.change_coValue = parseFloat((temp_co * 8.38).toFixed(2))
          this.change_o3Value = parseFloat((temp_o3 * 8.38).toFixed(2))

          this.total_change = this.change_pm2Vallue + this.change_pm10Value + this.change_so2Value + this.change_no2Value + this.change_coValue + this.change_o3Value

          let total = this.change_o3Value + this.change_coValue + this.change_no2Value + this.change_so2Value + this.change_pm2Vallue + this.change_pm10Value
          let toaal_value = (total * 83.81 * 365).toFixed(2)
          this.emData = parseFloat(toaal_value)
          this.countData = parseInt((this.emData / 33.4716).toFixed(2))
          this.costData = 67 * this.countData
          this.addCostData = parseInt((this.emData / 33.4716).toFixed(2)) * 67
          this.addCountData = parseInt((this.emData / 33.4716).toFixed(2))
          // this.addCostData = 67 * this.addCountData
          // this.subEmData = parseFloat(((parseFloat(toaal_value) * 365 - this.addCostData * 33.4716) * 0.000001).toFixed(2))
        }

        let val_pm2 = this.calculationPM2Number(pm2Vallue)
        let val_pm10 = this.calculationPM10Number(pm10Value)
        let val_so2 = this.calculationSO2Number(so2Value)
        let val_no2 = this.calculationNO2Number(no2Value)
        let val_co = this.calculationCONumber(coValue)
        let val_o3 = this.calculationO3Number(o3Value)

        let aqi_pm2 = (((val_pm2[0] - val_pm2[1]) / (val_pm2[2] - val_pm2[3])) * (pm2Vallue - val_pm2[3])) + val_pm2[1]
        let aqi_pm10 = (((val_pm10[0] - val_pm10[1]) / (val_pm10[2] - val_pm10[3])) * (pm10Value - val_pm10[3])) + val_pm10[1]
        let aqi_so2 = (((val_so2[0] - val_so2[1]) / (val_so2[2] - val_so2[3])) * (so2Value - val_so2[3])) + val_so2[1]
        let aqi_no2 = (((val_no2[0] - val_no2[1]) / (val_no2[2] - val_no2[3])) * (no2Value - val_no2[3])) + val_no2[1]
        let aqi_co = (((val_co[0] - val_co[1]) / (val_co[2] - val_co[3])) * (coValue - val_co[3])) + val_co[1]
        let aqi_o3 = (((val_o3[0] - val_o3[1]) / (val_o3[2] - val_o3[3])) * (o3Value - val_o3[3])) + val_o3[1]
        this.aqiValue = Math.max(aqi_pm2,aqi_pm10,aqi_so2,aqi_no2,aqi_co,aqi_o3).toFixed(2)
      },
      addCountData: function (val, oldVal) {
        let count = val
        this.addCostData = count * 67
        this.total_change = parseFloat((this.total_change + (this.countData - this.addCountData) * 0.001).toFixed(2))
      }
    },
    components: {
      ProportionalBar,
      ProMap,
      IndustryBar,
      MulticolorProBar,
      DetailPip,
      PreBubble
      },
    data() {
      return {
        value: '全国',
        bubbleData1: {
          data: [[0,0,3757797],[0,1,3779244],[0,2,3523351],[0,3,3293561],[0,4,3267607],[0,5,3179798]]
        },
        bubbleData2: {
          data: [[0,0,448648],[0,1,413941],[0,2,361583],[0,3,329408],[0,4,293294],[0,5,249455]]
        },
        bubbleData3: {
          data: [[0,0,351879],[0,1,369671],[0,2,384750],[0,3,384237],[0,4,396254],[0,5,358707]]
        },
        bubbleData4: {
          data: [[0,0,2940651],[0,1,2975793],[0,2,2756704],[0,3,2560573],[0,4,2559785],[0,5,2555263]]
        },
        value2: '',
        mapCenter: [104.114129, 37.550339],
        mapZoom: 5,
        mapCoords: {
          coords: []
        },
        pointData: {
          data1: [],
          data2:  {},
        },
        mapData: {
          data: [
            { name: '北京', value: 93.41 },
            { name: '上海', value: 77.61 },
            { name: '天津', value: 119.4 },
            { name: '重庆', value: 76.51 },
            { name: '安徽', value: 92.32 },
            { name: '福建', value: 44.73 },
            { name: '甘肃', value: 37.57 },
            { name: '广东', value: 58.09 },
            { name: '广西', value: 67.87 },
            { name: '贵州', value: 70.79 },
            { name: '海南', value: 33.61 },
            { name: '河北', value: 99.95 },
            { name: '河南', value: 120.35 },
            { name: '黑龙江', value: 34.36 },
            { name: '湖北', value: 92.87 },
            { name: '湖南', value: 86.76 },
            { name: '江苏', value: 90.97 },
            { name: '江西', value: 67.39 },
            { name: '吉林', value: 50.72 },
            { name: '辽宁', value: 64.67 },
            { name: '内蒙古', value: 30.33 },
            { name: '宁夏', value: 53.64 },
            { name: '青海', value: 26.35 },
            { name: '山东', value: 111.62 },
            { name: '山西', value: 78.91 },
            { name: '陕西', value: 74.21 },
            {name: '四川', value: 52.44},
            {name: '西藏', value: 28.6},
            {name: '新疆', value: 33.86},
            {name: '云南', value: 42.24},
            {name: '浙江', value: 70.53},
            {name: '香港', value: 44.81}
          ],
          geoCoordMap: {
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
          },
        },
        aqiValue: 47.66,
        pm2Vallue: 30.88,
        pm10Value: 38.72,
        so2Value: 10.62,
        no2Value: 8.33,
        coValue: 0.39,
        o3Value: 68.49,

        temp_aqiValue: 47.66,
        temp_pm2Vallue: 30.88,
        temp_pm10Value: 38.72,
        temp_so2Value: 10.62,
        temp_no2Value: 8.33,
        temp_coValue: 0.39,
        temp_o3Value: 68.49,

        change_aqiValue: 0.00,
        change_pm2Vallue: 0.00,
        change_pm10Value: 0.00,
        change_so2Value: 0.00,
        change_no2Value: 0.00,
        change_coValue: 0.00,
        change_o3Value: 0.00,
        total_change: 0,

        emData: 0,        // 增加的污染物的个数
        countData: 0,     // 设施数
        addCostData: 0,  // 增加的设备数
        costData: 0,      // 运行费用
        addCountData: 0,

        dicName: '',
        industryData: '',
        barData: [2799,795,2326],
        so2PipName: pipinfo[0].pipSo2Name,
        so2PipData: pipinfo[0].pipSo2Data,
        no2PipName: pipinfo[0].pipNo2Name,
        no2PipData: pipinfo[0].pipNo2Data,
        pmPipName: pipinfo[0].pipPmName,
        pmPipData: pipinfo[0].pipPmData,
        so2Info: prodetailinfo[0],
        noInfo: prodetailinfo[0],
        pmInfo: prodetailinfo[0],
        totalInfo: prodetailinfo[0],
        proProBarData: proprotionalbar[0],
        mulDataBar: multicolorprobar[0].mulDataBar,
        zoomData: [
          {
            type: 'slider',
            show: true,
            height: 5,
            bottom: 30,
            borderColor: 'transparent',
            backgroundColor: 'rgba(128, 128, 128,0.1)',
            // 拖拽手柄样式 svg 路径
            handleIcon: 'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
            handleColor: '#aab6c6',
            handleSize: 8,
            handleStyle: {
              borderColor: '#aab6c6',
              shadowBlur: 4,
              shadowOffsetX: 1,
              shadowOffsetY: 1,
              shadowColor: '#e5e5e5'
            },
            start: 0,
            end: 20,
          }
        ],
        tabPosition: 'top',
        // zoomData: ,
        options: [{
          value: '全国',
          label: '全国'
        },{
          value: '华北地区',
          label: '华北地区'
        }, {
          value: '华东地区',
          label: '华东地区'
        }, {
          value: '华南地区',
          label: '华南地区'
        }, {
          value: '华中地区',
          label: '华中地区'
        }, {
          value: '西北地区',
          label: '西北地区'
        }, {
          value: '西南地区',
          label: '西南地区'
        }, {
          value: '东北地区',
          label: '东北地区'
        }],
        options2: [{
          value2: '农、林、牧、渔服务业',
          label2: '农、林、牧、渔服务业'
        }, {
          value2: '煤炭开采和洗选业',
          label2: '煤炭开采和洗选业'
        }, {
          value2: '石油和天然气',
          label2: '石油和天然气'
        }, {
          value2: '黑色金属矿采选业',
          label2: '黑色金属矿采选业'
        }, {
          value2: '有色金属矿采选业',
          label2: '有色金属矿采选业'
        }, {
          value2: '非金属矿采选业',
          label2: '非金属矿采选业'
        }, {
          value2: '开采辅助活动',
          label2: '开采辅助活动'
        }, {
          value2: '其他采矿业',
          label2: '其他采矿业'
        }, {
          value2: '农副食品加工业',
          label2: '农副食品加工业'
        }, {
          value2: '食品制造业',
          label2: '食品制造业'
        }, {
          value2: '酒、饮料和精制茶',
          label2: '酒、饮料和精制茶'
        }, {
          value2: '烟草制品业',
          label2: '烟草制品业'
        }, {
          value2: '纺织业',
          label2: '纺织业'
        }, {
          value2: '纺织服装、服饰业',
          label2: '纺织服装、服饰业'
        }, {
          value2: '皮革、毛皮、羽毛及其制品和制鞋业',
          label2: '皮革、毛皮、羽毛及其制品和制鞋业'
        }, {
          value2: '木材加工及木、竹、藤、棕、草制品业',
          label2: '木材加工及木、竹、藤、棕、草制品业'
        }, {
          value2: '家具制造业',
          label2: '家具制造业'
        }, {
          value2: '造纸及纸制品业',
          label2: '造纸及纸制品业'
        }, {
          value2: '印刷和记录媒介复制业',
          label2: '印刷和记录媒介复制业'
        }, {
          value2: '文教、工美、体育和娱乐用品制造业',
          label2: '文教、工美、体育和娱乐用品制造业'
        }, {
          value2: '石油加工、炼焦和核燃料加工业',
          label2: '石油加工、炼焦和核燃料加工业'
        }, {
          value2: '化学原料和化学制品制造业',
          label2: '化学原料和化学制品制造业'
        }],
      }
    },
    methods: {
      getDicName(dicName) {
        this.dicName = dicName
      },
      calculationPM2Number(C) {
        let PM2data = []
        let Ih = 0
        let Ii = 0
        let Ch = 0
        let Ci = 0
        if (C >= 0 && C <= 35) {
          Ih = 50
          Ii = 0
          Ch = 35
          Ci = 0
        } else if (C >= 35 && C <= 75) {
          Ih = 100
          Ii = 50
          Ch = 75
          Ci = 35
        } else if (C >= 75 && C <= 115) {
          Ih = 150
          Ii = 100
          Ch = 115
          Ci = 75
        } else if (C >= 115 && C <= 150) {
          Ih = 200
          Ii = 150
          Ch = 150
          Ci = 115
        } else if (C >= 150 && C <= 250) {
          Ih = 300
          Ii = 200
          Ch = 250
          Ci = 150
        } else if (C >= 250 && C <= 350) {
          Ih = 400
          Ii = 300
          Ch = 350
          Ci = 250
        } else if (C >= 350 && C <= 500) {
          Ih = 500
          Ii = 400
          Ch = 500
          Ci = 350
        }  else if (C > 500) {
          Ih = 500
          Ii = 400
          Ch = 500
          Ci = 350
        }
        PM2data.push(Ih)
        PM2data.push(Ii)
        PM2data.push(Ch)
        PM2data.push(Ci)
        return PM2data
      },
      calculationPM10Number(C) {
        let PM10data = []
        let Ih = 0
        let Ii = 0
        let Ch = 0
        let Ci = 0
        if (C >= 0 && C <= 50) {
          Ih = 50
          Ii = 0
          Ch = 50
          Ci = 0
        } else if (C >= 50 && C <= 150) {
          Ih = 100
          Ii = 50
          Ch = 150
          Ci = 50
        } else if (C >= 150 && C <= 250) {
          Ih = 150
          Ii = 100
          Ch = 250
          Ci = 150
        } else if (C >= 250 && C <= 350) {
          Ih = 200
          Ii = 150
          Ch = 350
          Ci = 250
        } else if (C >= 350 && C <= 420) {
          Ih = 300
          Ii = 200
          Ch = 420
          Ci = 350
        } else if (C >= 420 && C <= 500) {
          Ih = 400
          Ii = 300
          Ch = 500
          Ci = 420
        } else if (C >= 500 && C <= 600) {
          Ih = 500
          Ii = 400
          Ch = 600
          Ci = 500
        }  else if (C > 600) {
          Ih = 500
          Ii = 400
          Ch = 600
          Ci = 500
        }
        PM10data.push(Ih)
        PM10data.push(Ii)
        PM10data.push(Ch)
        PM10data.push(Ci)
        return PM10data
      },
      calculationSO2Number(C) {
        let SO2data = []
        let Ih = 0
        let Ii = 0
        let Ch = 0
        let Ci = 0
        if (C >= 0 && C <= 50) {
          Ih = 50
          Ii = 0
          Ch = 50
          Ci = 0
        } else if (C >= 50 && C <= 150) {
          Ih = 100
          Ii = 50
          Ch = 150
          Ci = 50
        } else if (C >= 150 && C <= 475) {
          Ih = 150
          Ii = 100
          Ch = 475
          Ci = 150
        } else if (C >= 475 && C <= 800) {
          Ih = 200
          Ii = 150
          Ch = 800
          Ci = 475
        } else if (C >= 800 && C <= 1600) {
          Ih = 300
          Ii = 200
          Ch = 1600
          Ci = 800
        } else if (C >= 1600 && C <= 2100) {
          Ih = 400
          Ii = 300
          Ch = 2100
          Ci = 1600
        } else if (C >= 2100 && C <= 2620) {
          Ih = 500
          Ii = 400
          Ch = 2620
          Ci = 2100
        }  else if (C > 2620) {
          Ih = 500
          Ii = 400
          Ch = 2620
          Ci = 2100
        }
        SO2data.push(Ih)
        SO2data.push(Ii)
        SO2data.push(Ch)
        SO2data.push(Ci)
        return SO2data
      },
      calculationNO2Number(C) {
        let NO2data = []
        let Ih = 0
        let Ii = 0
        let Ch = 0
        let Ci = 0
        if (C >= 0 && C <= 40) {
          Ih = 50
          Ii = 0
          Ch = 40
          Ci = 0
        } else if (C >= 40 && C <= 80) {
          Ih = 100
          Ii = 50
          Ch = 80
          Ci = 40
        } else if (C >= 80 && C <= 180) {
          Ih = 150
          Ii = 100
          Ch = 180
          Ci = 80
        } else if (C >= 180 && C <= 280) {
          Ih = 200
          Ii = 150
          Ch = 280
          Ci = 180
        } else if (C >= 280 && C <= 565) {
          Ih = 300
          Ii = 200
          Ch = 565
          Ci = 280
        } else if (C >= 565 && C <= 750) {
          Ih = 400
          Ii = 300
          Ch = 750
          Ci = 565
        } else if (C >= 750 && C <= 940) {
          Ih = 500
          Ii = 400
          Ch = 940
          Ci = 750
        }  else if (C > 940) {
          Ih = 500
          Ii = 400
          Ch = 940
          Ci = 750
        }
        NO2data.push(Ih)
        NO2data.push(Ii)
        NO2data.push(Ch)
        NO2data.push(Ci)
        return NO2data
      },
      calculationO3Number(C) {
        let O3data = []
        let Ih = 0
        let Ii = 0
        let Ch = 0
        let Ci = 0
        if (C >= 0 && C <= 160) {
          Ih = 50
          Ii = 0
          Ch = 160
          Ci = 0
        } else if (C >= 160 && C <= 200) {
          Ih = 100
          Ii = 50
          Ch = 200
          Ci = 160
        } else if (C >= 200 && C <= 300) {
          Ih = 150
          Ii = 100
          Ch = 300
          Ci = 200
        } else if (C >= 300 && C <= 400) {
          Ih = 200
          Ii = 150
          Ch = 400
          Ci = 300
        } else if (C >= 400 && C <= 800) {
          Ih = 300
          Ii = 200
          Ch = 800
          Ci = 400
        } else if (C >= 800 && C <= 1000) {
          Ih = 400
          Ii = 300
          Ch = 1000
          Ci = 800
        } else if (C >= 1000 && C <= 1200) {
          Ih = 500
          Ii = 400
          Ch = 1200
          Ci = 1000
        }  else if (C > 1200) {
          Ih = 500
          Ii = 400
          Ch = 1200
          Ci = 1000
        }
        O3data.push(Ih)
        O3data.push(Ii)
        O3data.push(Ch)
        O3data.push(Ci)
        return O3data
      },
      calculationCONumber(C) {
        let COdata = []
        let Ih = 0
        let Ii = 0
        let Ch = 0
        let Ci = 0
        if (C >= 0 && C <= 2) {
          Ih = 50
          Ii = 0
          Ch = 2
          Ci = 0
        } else if (C >= 2 && C <= 4) {
          Ih = 100
          Ii = 50
          Ch = 4
          Ci = 2
        } else if (C >= 4 && C <= 14) {
          Ih = 150
          Ii = 100
          Ch = 14
          Ci = 4
        } else if (C >= 14 && C <= 24) {
          Ih = 200
          Ii = 150
          Ch = 24
          Ci = 14
        } else if (C >= 24 && C <= 36) {
          Ih = 300
          Ii = 200
          Ch = 36
          Ci = 24
        } else if (C >= 36 && C <= 48) {
          Ih = 400
          Ii = 300
          Ch = 48
          Ci = 36
        } else if (C >= 48 && C <= 60) {
          Ih = 500
          Ii = 400
          Ch = 60
          Ci = 48
        }  else if (C > 60) {
          Ih = 500
          Ii = 400
          Ch = 60
          Ci = 48
        }
        COdata.push(Ih)
        COdata.push(Ii)
        COdata.push(Ch)
        COdata.push(Ci)
        return COdata
      },
    },
    computed: {
      detailInfo: function () {
        return this.value + '2013年废气排放及处理情况'
      },
      aqiInfo: function () {
        return this.value + '2013年AQI排名图'
      },
      so2DetailInfo: function () {
        return '工业：' + this.so2Info.so2Value.value2 + ' 吨  ' + '| 生活：' + this.so2Info.so2Value.value3 + ' 吨'
      },
      noDetailInfo: function () {
        return '工业：' + this.noInfo.noValue.value2 + ' 吨   ' + '| 生活：' + this.noInfo.noValue.value3 + ' 吨'
      },
      pmDetailInfo: function () {
        return '工业：' + this.pmInfo.pmValue.value2 + ' 吨  ' + '| 生活：' + this.pmInfo.pmValue.value3 + ' 吨'
      },
      proDataChange: function () {
        const {pm2Vallue, pm10Value, so2Value,no2Value,coValue,o3Value} = this;
        return {pm2Vallue, pm10Value, so2Value,no2Value,coValue,o3Value}
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/precontaminants/basestyle.css";
  @import "../../assets/css/precontaminants/precon_panel.css";
  @import "../../assets/css/precontaminants/selectstyle.css";
  @import "../../assets/css/precontaminants/pol_select.css";
  .my_select{
    display: block;
    height: 5px;
    width: 150px;
    line-height: 10px;
    margin-top: 10px;
    margin-left: 1px;
  }
  .my_select>>>.el-input--mini .el-input__inner {
    background: none;
  }
  .my_select>>>.el-input__inner {
    color: #fff;
    border: none;
    font-size: 10px;
  }
  .ansuer_panel>>>.el-tabs__item{
    font-size:13px !important;
    color: #fff;
  }
  .dicaqi_panel>>>.el-tabs__item{
    font-size:13px !important;
    color: #fff;
  }
  .select1 p {
    height: 30px;
    font-size: 13px;
    color: #fff;
    margin-left: 140px;
  }
  .select2 p {
    height: 35px;
    font-size: 14px;
    color: #fff;
    margin-left: 90px;
    margin-top: 12px;
  }
  .my-button1 {
    width: 20px;
    height: 20px;
    background: url("../../assets/img/skip.svg");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    border: 0px;
    margin-left: 18px;
    margin-top: 3px;
    float: left;
  }
</style>