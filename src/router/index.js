import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BasicLayout from '@src/layout/BasicLayout'
import ComponentsLayout from '@src/layout/ComponentsLayout'

const Router = () => {
  return (
    <Switch>
      <Route path='/components' component={ComponentsLayout} />
      <Route path='/' component={BasicLayout} />
    </Switch>
  )
}

export default Router