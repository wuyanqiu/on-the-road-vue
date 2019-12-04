import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Main from '../views/Main'
import UserAdd from '../views/user/Add'
import UserList from '../views/user/List'
import NotFound from '../views/404'

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
      component: Main,
      children:[
        {name:'UserAdd',path:'/user/add/:id',component:UserAdd},
        {name:'UserList',path:'/user/list/:id',component:UserList,props:true}
      ]
    },
    {
      path:'/home',
      redirect:'/main'
    },
    {
      name:'NotFound',
      path:'*',
      component:NotFound
    }
  ]
});
