import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n';

Vue.config.productionTip = false;
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faIdBadge, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faDesktop, faSwimmer, faGuitar, faPlane, faBriefcase, faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(
  faUser,
  faIdBadge,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faDesktop,
  faPaperPlane,
  faSwimmer,
  faGuitar,
  faPlane,
  faStar,
  faBriefcase,
  faGraduationCap
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
