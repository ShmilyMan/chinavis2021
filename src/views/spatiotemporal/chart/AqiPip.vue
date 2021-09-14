<template>
  <div style="height: 250px;width:250px;" ref='aqi_pip'></div>
</template>

<script>
  export default {
    name: "AqiPip",
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
        this.myChart = this.$echarts.init(this.$refs.aqi_pip)
        let option;
        option = {
          color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
          grid: {
            width: 50,
            height: 50
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          label: {
            position: 'inner',
            color: '#fff'
          },
          toolbox: {
            show : true,
          },
          series : [
            {
              type:'pie',
              radius : [20, 35],
              data:[
                {value:26, name:'优'},
                {value:0, name:'重度污染'},
                {value:39, name:'轻度污染'},
                {value:3, name:'中度污染'},
                {value:121, name:'良'},
                {value:0, name:'严重污染'}
              ]
            }
          ]
        };

        option && this.myChart.setOption(option);
      }
    },
  }
</script>

<style scoped>

</style>