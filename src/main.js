import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import axios from 'axios'
import BaiduMap from 'vue-baidu-map'

Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(BaiduMap,{
  ak:"m6R4RiIh4QQ6mxyNk14NcjUNSmWOt8h9"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
