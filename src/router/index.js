import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Main from '../views/Main'

Vue.use(Router);

export default new Router({
  routes:[
    {
      name:'Login',
      path:'/login',
      component:Login
    },
    {
      name:'Main',
      path:'/main',
      component: Main
    }
  ]
});
