import Vue from 'vue'
import Router from 'vue-router'
import PetLand from '@/Views/PetView/Index.vue'

Vue.use(Router)

const routes = [
  {
    id: 1,
    path: "/",
    name: "PetLand",
    component: PetLand,
  },
]

const router = new Router({
  routes
})


export default router