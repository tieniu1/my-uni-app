import Vue from 'vue'
import i18n from './i18n'
import App from './App'
import store from './store'
import {router} from "./router";

Vue.use(router)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  i18n,
  ...App,
  store
})
app.$mount()
