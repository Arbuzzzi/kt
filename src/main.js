import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

// firebase ---------
import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from '../config/firebase'

// styles -----------
import 'bootstrap/dist/css/bootstrap.min.css'

// fontawesome ------
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(firebase)
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
Vue.$db = db

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  // created(){
  //   let page = this.$route.params.page ? this.$route.params.page - 1 : 0
  //   console.log(this.$route)
  //   this.$store.dispatch('getTasks', {startItem: page, limit: 10})
  // }
}).$mount('#app')
