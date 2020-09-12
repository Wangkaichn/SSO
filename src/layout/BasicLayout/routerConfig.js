import { lazy } from 'react'

const Login = lazy(() => import('@src/pages/Login'))
const Register = lazy(() => import('@src/pages/Register'))

const routeConfig = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]

export default routeConfig