import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter)

import HelloWorld from './components/HelloWorld';
import Basket from './components/basket';
import MyAccount from './components/my-account';
const routers = [{
  name:'Home',
  path:'/',
  component: HelloWorld
},
{
  name:'Basket',
  path:'/basket',
  component: Basket
},
{
  name:'MyAccount',
  path:'/my-account',
  component: MyAccount
}

]

const router = new VueRouter({ mode: 'history', routes:routers})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
