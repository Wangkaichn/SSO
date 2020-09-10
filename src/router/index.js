import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BasicLayout from '../layout/Basic'

const Router = () => {
  return (
    <Switch>
      <Route path='/' component={BasicLayout} />
    </Switch>
  )
}

export default Router