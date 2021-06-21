
import HelloWorld from './components/product_list';
import Basket from './components/basket';
import MyAccount from './components/my-account';
import About from './components/about';
import Contact from './components/contact';
import Signin from './components/Signin';
import Login from './components/login';
import Home from './components/home';
import Promotion from './components/promotion';
import Single from './components/single';

export default [
 {
    name:'Home',
    path:'/',
    component: HelloWorld
  },
  {
    name:'Home',
    path:'/index',
    component: Home
  },
  {
    name:'Promotion',
    path:'/promo',
    component: Promotion
  },
  {
    name:'Single',
    path:'/single',
    component: Single
  },
  {
    name:'Basket',
    path:'/basket',
    component: Basket
  },
  {
    name:'Contact',
    path:'/contact',
    component: Contact
  },
  {
    name:'About',
    path:'/about',
    component: About
  },
  {
    name:'MyAccount',
    path:'/my-account',
    component: MyAccount
  },
  {
    name:'Signin',
    path:'/Signin',
    component: Signin
  }, 
  {
    name:'Login',
    path:'/login',
    component: Login
  }
]