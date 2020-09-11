import { lazy } from 'react'

const Login = lazy(() => import('@src/pages/Login'))

const routeConfig = [
  {
    path: '/login',
    component: Login
  }
]

export default routeConfig