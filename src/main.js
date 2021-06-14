import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ListBrand from './components/ListBrand/ListBrand'
import EditBrand from './components/EditBrand/EditBrand'
Vue.use(VueRouter);
Vue.config.productionTip = false
const routes = [
  {path: '/' , name:"ListBrand",component: ListBrand},
  {path: '/listbrand' , name:"ListBrand",component: ListBrand},
  {path: '/editbrand/:requestId', name:"EditBrand",component: EditBrand}
]
const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
