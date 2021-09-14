<template>
  <div>
    <el-row>
      <el-col :span="5">
        <div class="grid-content bg-purple sunburst">
          <div class="panel sunburst-panel">
            <h2> 污染物对比图 </h2>
            <bubble
            style="float: left;"
            :bubble-data="bubbleData"
            />
            <sunburst
            style="width: 310px; height: 280px;"
            @emitMonAndDay="getMonAndDay"
            />
            <div class="panel-footer"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple-light calendar">
          <div class="panel sunburst-panel calendar-panel">
            <h2> 污染物时占比图 </h2>
            <calendar-time
            :time-data="timeData"
            />
            <div class="panel-footer"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple windflow">
          <div class="panel sunburst-panel windflow-panel">
            <h2> 周边地区污染物分布图 </h2>
            <radial-tree
            :tree-data="treeData"
            />
            <div class="panel-footer"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple-light scatter">
          <div class="panel sunburst-panel scatter-panel">
            <h2> AQI与气象要素时段关系图 </h2>
            <factor-line
            :line-data="lineData"
            />
            <div class="panel-footer"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple wind_map">
          <div class="panel sunburst-panel map-panel">
            <h2> 污染物粒子来源去向图 </h2>
            <wind-map
            :aqi-data="aqiData"
            :hours="hours"
            />
            <div class="panel-footer"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple sankey">
          <div class="panel sunburst-panel sankey-panel">
            <h2> 途经污染物来源去向图 </h2>
            <trajectory-map
            :map-data="mapData"
            :cover-data="coverData"
            />
            <div class="panel-footer"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark" style="line-height: 20px;">
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#040E41"
              text-color="#9BA5BC"
              active-text-color="#4E70F0">
            <el-menu-item index="1">北京</el-menu-item>
            <el-menu-item index="2">上海</el-menu-item>
            <el-menu-item index="3">天津</el-menu-item>
            <el-menu-item index="4">重庆</el-menu-item>
            <el-menu-item index="5">安徽</el-menu-item>
            <el-menu-item index="6">福建</el-menu-item>
            <el-menu-item index="7">甘肃</el-menu-item>
            <el-menu-item index="8">广东</el-menu-item>
            <el-menu-item index="9">广西</el-menu-item>
            <el-menu-item index="10">贵州</el-menu-item>
            <el-menu-item index="11">海南</el-menu-item>
            <el-menu-item index="12">河北</el-menu-item>
            <el-menu-item index="13">河南</el-menu-item>
            <el-menu-item index="14">黑龙江</el-menu-item>
            <el-menu-item index="15">湖北</el-menu-item>
            <el-menu-item index="16">湖南</el-menu-item>
            <el-menu-item index="17">江苏</el-menu-item>
            <el-menu-item index="18">江西</el-menu-item>
            <el-menu-item index="19">吉林</el-menu-item>
            <el-menu-item index="20">辽宁</el-menu-item>
            <el-menu-item index="21">内蒙古</el-menu-item>
            <el-menu-item index="22">宁夏</el-menu-item>
            <el-menu-item index="23">青海</el-menu-item>
            <el-menu-item index="24">山东</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Sunburst from "@/views/prepollution/chart/Sunburst"
  import CalendarTime from "@/views/prepollution/chart/CalendarTime"
  import Bubble from "@/views/prepollution/chart/Bubble"
  import WindMap from "@/views/prepollution/chart/map/WindMap"
  import FactorLine from "@/views/prepollution/chart/FactorLine"
  import RadialTree from "@/views/prepollution/chart/RadialTree"

  import bubble from "../../../public/prepollution/bubble/bubble"
  import calendartime from "../../../public/prepollution/calendartime/calendartime"
  import radialtree from "../../../public/prepollution/radialtree/radialtree"
  import linedata from "../../../public/prepollution/line/linedata"
  import aqidata from "../../../public/prepollution/aqidata/aqidata"
  import TrajectoryMap from "@/views/prepollution/chart/map/TrajectoryMap"
  import tremapdata from "../../../public/prepollution/tremapdata/tremapdata"
  import tracoverdata from "../../../public/prepollution/tracoverdata/tracoverdata"

  let my_dt = new Date();
  export default {
    name: "PreBody",
    watch: {
      yearAndDayChange: {
        handler: function (val, oldVal) {
          let year = val.year
          let day = val.day
          let activeIndex = val.activeIndex
          // 2013年1-5天的数据
          // bubble图
          for (let i = 0; i < bubble.length; i++) {
            if (bubble[i].year == year && bubble[i].day == day && bubble[i].activeIndex == activeIndex) {
              this.bubbleData = bubble[i].bubbleData
            }
          }
          // 日历图
          for (let i = 0; i < calendartime.length; i++) {
            if (calendartime[i].year == year && calendartime[i].day == day && calendartime[i].activeIndex == activeIndex) {
              this.timeData = calendartime[i].timeData
            }
          }

          // 树图
          for (let i = 0; i < radialtree.length; i++) {
            if (radialtree[i].year == year && radialtree[i].day == day && radialtree[i].activeIndex == activeIndex) {
              this.treeData = radialtree[i].treeData;
            }
          }

          // 折线图
          for (let i = 0; i < linedata.length; i++) {
            if (linedata[i].year == year && linedata[i].day == day && linedata[i].activeIndex == activeIndex) {
              this.lineData = linedata[i].lineData
            }
          }

          // 轨迹图
          for (let i = 0; i < tremapdata.length; i++) {
            if (tremapdata[i].year == year && tremapdata[i].day == day && tremapdata[i].activeIndex == activeIndex) {
              this.mapData = tremapdata[i].mapData
            }
          }

        },
        deep: true,
      },
    },
    components: {
      TrajectoryMap,
      Bubble,
      Sunburst,
      CalendarTime,
      WindMap,
      FactorLine,
      RadialTree
    },
    data() {
      return {
        hours: parseInt(my_dt.getHours()),
        bubbleData: bubble[0].bubbleData,
        timeData: calendartime[0].timeData,
        coverData: tracoverdata[0].coverData,
        treeData: radialtree[0].treeData,
        lineData: linedata[0].lineData,
        mapData: tremapdata[0].mapData,
        aqiData: aqidata,
        activeIndex: '1',   // 控制省份的选中状态
        year: '2013',
        day: '1'
      }
    },
    methods: {
      getMonAndDay(value) {
        if (value.length >= 4) {
          this.year = value
        }
        if (value.length <= 2) {
          this.day = value
        }
      },
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
    computed: {
      yearAndDayChange: function () {
        const {year,day,activeIndex} = this;
        return {year,day,activeIndex}
      },
      calendarTitle: function () {
        return '北京市' + this.year + '年' + '01月0' + this.day + '日' + '24时污染物占比图'
      },
      lineTitle: function () {
        return '北京市' + this.year + '年' + '1月0' + this.day + '日' + 'AQI与气象要素时段变化图'
      },
      treTitle: function () {
        return this.year + '年' + '1月0' + this.day + '日' + '途经北京市污染物传播轨迹图'

      },
      mapTitle: function () {
        return '北京市' + this.year + '年' + '1月' +  this.day + '日' + '污染物传播轨迹图'
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/prepollution/base.css";
  @import "../../assets/css/prepollution/pre_panel.css";
  .province {
    line-height: 40px;
    background-color: pink;
  }
</style>