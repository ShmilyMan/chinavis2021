<template>
  <div>
    <!--导航栏-->
    <el-row class="bg">
      <el-col :span="8">
        <div class="grid-content bg-purple title">
          <h3>大气环境防治治理可视分析系统</h3>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light nav">
<!--          <router-link to="/spatiotemporal" class="left" active-class="active">全国时空态势分析</router-link>
          <router-link to="/airpropagation" class="center" active-class="active">省市时空态势分析</router-link>-->
<!--          <router-link to="/prepollution" class="right" active-class="active">污染传播分析预测</router-link>-->
          <router-link to="/precontaminants" class="prelast" active-class="active">行业污染分析预测</router-link>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple time">
          <div class="showTime">当前时间：2020年3月17-0时54分14秒</div>
        </div>
      </el-col>
    </el-row>
    <router-view />
  </div>

</template>

<script>
  var t = null;
  t = setTimeout(time, 1000); //開始运行
  function time() {
    clearTimeout(t); //清除定时器
    let dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours(); //获取时
    var m = dt.getMinutes(); //获取分
    var s = dt.getSeconds(); //获取秒
    document.querySelector(".showTime").innerHTML =
        "当前时间：" +
        y +
        "年" +
        mt +
        "月" +
        day +
        "日" +
        h +
        "时" +
        m +
        "分" +
        s +
        "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
  }

  export default {
    name: "NavigationBar",
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  @import "../assets/css/spatiotemporal/tab_bar.css";
  .active {
    background-image: url(../assets/img/s.png);
    /*background-repeat: repeat;*/
    background-attachment: scroll;
    background-size: 130px 55px;
  }
  .prelast {
    margin-left: 250px;
    display: inline-block;
    /*background-color: yellow;*/
    text-decoration: none;
    color: #5BB9FC;
  }
</style>