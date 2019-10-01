import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n';

Vue.config.productionTip = false;
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

library.add(
  faUser
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
