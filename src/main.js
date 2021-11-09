// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'Element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 使用component将它注册为全局可用组件，表格树
//Vue.component('tree-table', TreeTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
