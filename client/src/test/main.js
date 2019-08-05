import Vue from 'vue';
import App from './App.vue';

import Axios from 'axios';
Vue.prototype.$axios = Axios;
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App)
});
