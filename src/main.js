import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router';
import store from './store';
import './api/mock'
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';

Vue.config.productionTip = false
Vue.use(ElementUI);
const originalPush = VueRouter.prototype.push
 
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//添加全局前置导航守卫
router.beforeEach((to,from,next) =>{
  const token = Cookies.get('token')
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else if (token && to.name ==='login'){ 
    next({name:'home'})
  }else{
    next ()
  }

})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
