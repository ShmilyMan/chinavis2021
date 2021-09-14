<template>
  <div id="app">
    <div class="background">
      <img src="./assets/img/bg2.jpg" width="100%" height="100%" alt="" />
    </div>
    <div class="body">
      <!--导航栏以及主页面-->
      <navigation-bar />
    </div>
  </div>
</template>

<script>
  import NavigationBar from "@/components/NavigationBar"

  export default {
    name: 'App',
    components: {
      NavigationBar
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .background {
    width:100%;
    height:1020px;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
    background-color: #fff;
  }
  .BMap_cpyCtrl {
    display: none;
  }
  .anchorBL {
    display: none;
  }
  .popover-parm {
    background-color: #fff !important;
    width: 200px;
    height: 150px;
  }
  .pip-popover {
    background-color: rgba(128, 128, 128, 0.00001) !important;
    border-style: none !important;
    width: 200px !important;
    height: 200px;
  }
</style>
