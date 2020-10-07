import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import LoginUser from 'components/user_login'


export const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
    display: 'Home',
    icon: 'home'
  },


  {
    name: 'login',
    path: '/login',
    component: LoginUser,
    display: 'Login',
    icon: 'login'
  }
]
