// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Saved from './components/SavedArticles'
import Home from './components/Home'

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { name: 'home',
    path: '/',
    component: Home },
  { name: 'saved',
    path: '/saved',
    component: Saved }
]

const router = new VueRouter ({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
