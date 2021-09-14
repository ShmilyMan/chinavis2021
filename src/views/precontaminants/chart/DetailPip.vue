<template>
  <div style="height: 98%;width:100%;" ref='detail_pip'></div>
</template>

<script>
  export default {
    name: "DetailPip",
    watch: {
      dataChange: function (val, oldVal) {
        this.initChart()
      }
    },
    props: {
      pipName: {
        type: Array
      },
      pipData: {
        type: Array
      },
      // pipColor: {
      //   type: Array,
      //   default: function () {
      //     return [
      //       "#166eff",
      //       "#69a0fd",
      //       "#9ec2ff",
      //       "#c4daff",
      //       "#c8cbd2",
      //       "#b0b7c4",
      //       "#98a4b9",
      //       "#778398",
      //       "#ffc0a9",
      //       "#ff9898"]
      //   }
      // }
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
        this.myChart = this.$echarts.init(this.$refs.detail_pip)
        let option;
        option = {
          backgroundColor:'rgba(128, 128, 128,0.001)',
          series: [{
            type: 'pie',
            radius: '56%',
            center: ['48%', '50%'],
            label: { //饼图图形上的文本标签
              normal: {
                show: true,
                textStyle: {
                  fontWeight: 400,
                  fontSize: 13, //文字的字体大小
                  color: '#fff'
                },
                formatter: '{b}',
              }
            },
            data: this.pipData
          }]
        }

        option && this.myChart.setOption(option);
      }
    },
    computed: {
      dataChange: function () {
        const {pipName, pipData} = this;
        return {pipName, pipData}
      },
    }
  }
</script>

<style scoped>

</style>