<template>
  <div style="height: 98%;width:98%;" ref='tree_chart'></div>
</template>

<script>
  export default {
    name: "RadialTree",
    watch: {
      treeData: function (val, oldVal) {
        this.initChart()
      }
    },
    props: {
      treeData: {
        type: Object
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    data() {
      return {
        myChart: ""
      }
    },
    methods: {
      initChart() {
        if (this.myChart != null && this.myChart != "" && this.myChart != undefined){
          this.myChart.dispose();
        }
        this.myChart = this.$echarts.init(this.$refs.tree_chart)
        var colors=[
          "rgba(5, 173, 212, 0.7)",
          "rgba(5, 173, 212, 0.7)",
          "rgba(188, 118, 232, 0.7)",
          "rgba(188, 118, 232, 0.7)",
          "rgba(188, 118, 232, 0.7)",
          "rgba(188, 118, 232, 0.7)",
          "rgba(32, 192, 244, 0.7)",
          "#95F300",
          "#04FDB8",
          "#AF5AFF"
        ]
        var getdata= () => {
          let arr=[]
          arr.push(this.treeData)
          //
          arr=handle(arr,0)
          return arr;
        }

        var handle=function handleData(data,index,color='rgba(0, 246, 255, 0.7)'){
          //index标识第几层
          return data.map((item,index2)=>{
            //计算出颜色
            if(index==1){
              color = colors.find((item, eq) => eq == index2 % 10);
            }
            // 设置节点大小
            if(index===0 || index===1){
              item.label= {
                position: "inside"
              }
            }
            // 设置label大小
            switch(index){
              case 0:
                item.symbolSize=40
                break;
              case 1:
                item.symbolSize=25
                break;
              case 2:
                item.symbolSize=data[index2].value / 2.5
                break;
            }
            // 设置线条颜色
            item.lineStyle= { color: color }

            if (item.children) {//存在子节点
              item.itemStyle = {
                borderColor: color,
                color:color
              };
              item.children=handle(item.children,index+1,color)
            } else {//不存在
              item.itemStyle = {
                color:'transparent',
                borderColor: color
              };
            }
            return item
          })
        }
        var option = {
          type: "tree",
          backgroundColor: "rgba(128, 128, 128, 0.1)",
          toolbox: { //工具栏
            show: true,
            iconStyle: {
              borderColor: "#03ceda"
            },
            feature: {
              restore: {}
            }
          },
          tooltip: {//提示框
            trigger: "item",
            triggerOn: "mousemove",
            backgroundColor: "rgba(1,70,86,1)",
            borderColor: "rgba(0,246,255,1)",
            borderWidth: 0.5,
            textStyle: {
              fontSize: 10,
              color: '#fff'
            }
          },
          series: [
            {
              type: "tree",
              hoverAnimation: true, //hover样式
              data:getdata(),
              top: 20,
              bottom: 20,
              left: 0,
              right: 0,
              layout: "radial",
              symbol: "circle",
              symbolSize: 10,
              nodePadding: 20,
              animationDurationUpdate: 750,
              expandAndCollapse: true, //子树折叠和展开的交互，默认打开
              initialTreeDepth: 2,
              roam: true, //是否开启鼠标缩放和平移漫游。scale/move/true
              focusNodeAdjacency: true,
              itemStyle: {
                borderWidth: 1,
              },
              label: { //标签样式
                color: "#fff",
                fontSize: 8,
                fontFamily: "SourceHanSansCN",
                position: "inside",
                rotate: 0,
              },
              lineStyle: {
                width: 1,
                curveness:0.5,
              }
            }
          ]
        };

        option && this.myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>