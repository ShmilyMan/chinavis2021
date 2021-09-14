<template>
  <div style="width: 100%; height: 100%" ref="sunkey_chart"></div>
</template>

<script>
export default {
  name: "Sunkey",
  data() {
    return {
      myChart: ''
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart() {
      if (this.myChart != null && this.myChart != "" && this.myChart != undefined){
        this.myChart.dispose();
      }
      this.myChart = this.$echarts.init(this.$refs.sunkey_chart)
      var colors =  [
        "#4E70F0",
        "#2cb8cf",
        "#54c189",
        "#f5d523",
        "#2cb8cf",
        "#f5b823",
        "#8f23f5",
        "#0576ea",
        "#2cb8cf",
        "#8A7EE0",
        "#2cb8cf",
        "#4e70f0",
        "#1fa3de",
        "#bbc951",
        "#FFC14B",
        "#b785a6",
        "#4E70F0",
        "#2cb8cf",
        "#54c189",
        "#f5d523",
        "#2cb8cf",
        "#f5b823",
        "#8f23f5",
        "#0576ea",
        "#2cb8cf",
        "#8A7EE0",
        "#2cb8cf",
        "#4e70f0",
        "#1fa3de",
        "#bbc951",
        "#FFC14B",
        "#b785a6",
        "#4E70F0",
        "#2cb8cf",
        "#54c189",
        "#f5d523",
        "#2cb8cf",
        "#f5b823",
        "#8f23f5",
        "#0576ea",
        "#2cb8cf",
        "#8A7EE0",
        "#2cb8cf",
        "#4e70f0",
        "#1fa3de",
        "#bbc951",
        "#FFC14B",
        "#b785a6",
      ]
      let nodes = [
        {
          name: "北京"
        },
        {
          name: "西城区"
        },
        {
          name: "朝阳区"
        },
        {
          name: "丰台区"
        },
        {
          name: "海淀区"
        },
        {
          name: "门头沟区"
        },
        {
          name: "房山区"
        },
        {
          name: "通州区"
        },
        {
          name: "顺义区"
        },
        {
          name: "昌平区"
        },
        {
          name: "大兴区"
        },
        {
          name: "怀柔区"
        },
        {
          name: "平谷区"
        },
        {
          name: "密云区"
        },
        {
          name: "延庆区"
        },
        {
          name: "优"
        },
        {
          name: "良"
        },
        {
          name: "轻度污染"
        },
        {
          name: "中度污染"
        },
        {
          name: "重度污染"
        },
        {
          name: "严重污染"
        },
        {
          name: "NO"
        },
        {
          name: "CO"
        },
        {
          name: "PM2.5"
        },
        {
          name: "PM10"
        },
        {
          name: "NO2"
        },
        {
          name: "SO2"
        },
        {
          name: "东南风"
        },
        {
          name: "西北风"
        },
        {
          name: "东北风"
        },
        {
          name: "西南风"
        },
      ];
      var links = [
        {
          source: "北京",
          target: "西城区",
          value: 10,
        },
        {
          source: "北京",
          target: "朝阳区",
          value: 10,
        },
        {
          source: "北京",
          target: "丰台区",
          value: 10,
        },
        {
          source: "北京",
          target: "海淀区",
          value: 10,
        },
        {
          source: "北京",
          target: "门头沟区",
          value: 10,
        },
        {
          source: "北京",
          target: "房山区",
          value: 10,
        },
        {
          source: "北京",
          target: "通州区",
          value: 10,
        },
        {
          source: "北京",
          target: "顺义区",
          value: 10,
        },
        {
          source: "北京",
          target: "昌平区",
          value: 10,
        },
        {
          source: "北京",
          target: "大兴区",
          value: 10,
        },
        {
          source: "北京",
          target: "怀柔区",
          value: 10,
        },
        {
          source: "北京",
          target: "平谷区",
          value: 10,
        },
        {
          source: "北京",
          target: "密云区",
          value: 10,
        },
        {
          source: "北京",
          target: "延庆区",
          value: 10,
        },
        {
          source: "西城区",
          target: "优",
          value: 10,
        },
        {
          source: "朝阳区",
          target: "良",
          value: 10,
        },
        {
          source: "丰台区",
          target: "轻度污染",
          value: 10,
        },
        {
          source: "海淀区",
          target: "中度污染",
          value: 10,
        },
        {
          source: "门头沟区",
          target: "重度污染",
          value: 10,
        },
        {
          source: "房山区",
          target: "严重污染",
          value: 10,
        },
        {
          source: "通州区",
          target: "优",
          value: 10,
        },
        {
          source: "顺义区",
          target: "良",
          value: 10,
        },
        {
          source: "昌平区",
          target: "轻度污染",
          value: 10,
        },
        {
          source: "大兴区",
          target: "重度污染",
          value: 10,
        },
        {
          source: "怀柔区",
          target: "优",
          value: 10,
        },
        {
          source: "平谷区",
          target: "良",
          value: 10,
        },
        {
          source: "密云区",
          target: "严重污染",
          value: 10,
        },
        {
          source: "延庆区",
          target: "重度污染",
          value: 10,
        },
        {
          source: "优",
          target: "NO",
          value: 10,
        },
        {
          source: "优",
          target: "NO2",
          value: 10,
        },
        {
          source: "良",
          target: "SO2",
          value: 10,
        },
        {
          source: "轻度污染",
          target: "PM2.5",
          value: 10,
        },
        {
          source: "中度污染",
          target: "PM10",
          value: 10,
        },
        {
          source: "重度污染",
          target: "PM2.5",
          value: 10,
        },
        {
          source: "严重污染",
          target: "PM2.5",
          value: 10,
        },
        {
          source: "西城区",
          target: "东南风",
          value: 10,
        },
        {
          source: "西城区",
          target: "西北风",
          value: 10,
        },
        {
          source: "西城区",
          target: "东北风",
          value: 10,
        },
        {
          source: "西城区",
          target: "西南风",
          value: 10,
        },
      ];
      var option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: {
          type: "sankey",
          layout: "none",
          top: 50,
          left: "3%",
          right: "12%",
          nodeGap: 14,
          data: nodes.map((item, index) => {
            item.itemStyle = {
              normal: {
                color: colors[index]
              }
            }
            return item
          }), // 节点
          links: links, // 节点之间的连线
          draggable: false,
          focusNodeAdjacency: "allEdges", // 鼠标划上时高亮的节点和连线，allEdges表示鼠标划到节点上点亮节点上的连线及连线对应的节点
          levels: [
            {
              depth: 0,
              itemStyle: {
                color: "#F27E7E",
              },
              lineStyle: {
                color: "source",
                opacity: 0.2,
              },
            },
            {
              depth: 1,
              lineStyle: {
                color: "source",
                opacity: 0.2,
              },
            },
            {
              depth: 2,
              lineStyle: {
                color: "source",
                opacity: 0.2,
              },
            },
            {
              depth: 3,
              label: {
                fontSize: 12,
              },
            },
          ],
          label: {
            fontSize: 14,
            color: "#fff",
          },
          itemStyle: {
            normal: {
              borderWidth: 0,
            },
          },
        },
      };
      // 使用刚指定的配置项和数据显示图表。
      option && this.myChart.setOption(option);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
