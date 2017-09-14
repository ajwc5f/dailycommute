// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import DailyMinute from './components/DailyMinute'
import Pocket from './components/Pocket'
import About from './components/About'
import Contact from './components/Contact'

Vue.use(VueResource);
Vue.use(VueRouter);

//set up all of our routes
const routes = [
  { name: 'home',
    path: '/',
    component: Home },
  { name: 'dailyminute',
    path: '/dailyminute',
    component: DailyMinute },
  { name: 'pocket',
    path: '/pocket',
    component: Pocket },
  { name: 'about',
    path: '/about',
    component: About },
  { name: 'contact',
    path: '/contact',
    component: Contact }
]

const router = new VueRouter ({
  routes
})

//setup the vue object, specifying we want vue to exist in element vue, using out router,
//the app template, and the app component as our main entry.
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
