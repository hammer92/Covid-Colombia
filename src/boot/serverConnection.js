import firebaseService from '../services/firebase'
import env from '../../.quasar.env.json'

export default ({ router, store, Vue }) => {
  const config = env.FIREBASE_CONFIG
  firebaseService.fBInit(config)

  // Tell the application what to do when the
  // authentication state has changed
  firebaseService.auth().onAuthStateChanged((user) => {
    firebaseService.handleOnAuthStateChanged(store, user)
  }, (error) => {
    console.error(error)
  })

  // Setup the router to be intercepted on each route.
  // This allows the application to halt rendering until
  // Firebase is finished with its initialization process,
  // and handle the user accordingly
  firebaseService.routerBeforeEach(router, store)

  Vue.prototype.$fb = firebaseService
  store.$fb = firebaseService
}
