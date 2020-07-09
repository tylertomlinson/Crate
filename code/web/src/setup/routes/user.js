// App Imports
import Login from '../../modules/user/Login/Login'
import Signup from '../../modules/user/Signup/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'
import StylePreferences from '../../modules/user/StylePreferences'

// User routes
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  }, 

  stylepreferences: {
    path: '/user/style-preferences',
    component: StylePreferences,
    auth: true
  }
}
