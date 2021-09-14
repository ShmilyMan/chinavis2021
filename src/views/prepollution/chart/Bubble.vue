<template>
  <div style="height: 100%;width:98%" ref='bubble_chart'></div>
</template>

<script>
  export default {
    name: "Bubble",
    watch: {
      bubbleData: function (val, oldVal) {
        this.initChart()
      }
    },
    props: {
      bubbleData: {
        type: Array
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
        if (this.myChart != null && this.myChart != "" && this.myChart != undefined){
          this.myChart.dispose();
        }
        this.myChart = this.$echarts.init(this.$refs.bubble_chart)
        var option;

        option = {
          backgroundColor: 'rgba(128, 128, 128, 0.1)',
          tooltip: {},
          animationDurationUpdate: function(idx) {
            // 越往后的数据延迟越大
            return idx * 100;
          },
          animationEasingUpdate: 'bounceIn',
          color: ['#fff', '#fff', '#fff'],
          series: [{
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 100,
              edgeLength: 10
            },
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: this.bubbleData
          }]
        }

        option && this.myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>