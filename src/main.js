import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/iconfontStyle.css'

Vue.use(VueRouter);
Vue.use(Element);
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

