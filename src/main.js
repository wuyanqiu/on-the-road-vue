// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from "./store"


Vue.prototype.axios = axios;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);

router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem("isLogin");
  if (to.path == '/logout') {
    sessionStorage.clear();
    next({path: "/login"});
  } else if (to.path == "/login") {
    if (isLogin == "true") {
      next({path: "/main"});
    } else {
      next();
    }
  } else if (isLogin == null) {
    next({path: "/login"});
  } else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store,
  render: h => h(App)
})
