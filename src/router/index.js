import Vue from 'vue'
import VueRouter from 'vue-router'

const SpaBody = () => import('../views/spatiotemporal/SpaBody')
const PreBody = () => import('../views/prepollution/PreBody')
const AirBody = () => import('../views/airpropagation/AirBody')
const PreContaminants = () => import('../views/precontaminants/PreContaminants')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/spatiotemporal'
  },
  {
    path: '/spatiotemporal',
    component: SpaBody,
  },
  {
    path: '/airpropagation',
    component: AirBody
  },
  {
    path: '/prepollution',
    component: PreBody
  },
  {
    path: '/precontaminants',
    component: PreContaminants
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
