// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCcfYVFV31_UnKJfBL24uawHGKz_Z26sFE',
  authDomain: 'awesome-presentation.firebaseapp.com',
  databaseURL: 'https://awesome-presentation.firebaseio.com',
  projectId: 'awesome-presentation',
  storageBucket: 'awesome-presentation.appspot.com',
  messagingSenderId: '1021392727967'
}

const firebaseApp = Firebase.initializeApp(config)
Vue.prototype.$db = firebaseApp.database()
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
