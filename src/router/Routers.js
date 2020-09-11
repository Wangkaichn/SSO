import React, { Component, Suspense } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import NotFound from '@src/components/NotFound'

class MainRoutes extends Component {
  renderRedirects = (item, index) => {
    return <Redirect key={index} exact from={item.path} to={item.redirect} />
  }
  renderRoutes = (item, index) => {
    return item.component ? (
      <Route
        key={index}
        path={item.path}
        render={(props) => this.renderComponent(props, item)}
        exact={item.exact}
      />
    ) : null
  }
  renderComponent = (props, item) => {
    const { routerData, ...routeProps } = this.props
    return <item.component {...props} {...routeProps} />
  }
  splitRedirect = (routerData) => {
    const routes = []
    const redirects = []
    routerData.forEach((i) => {
      i.redirect ? redirects.push(i) : routes.push(i)
    })
    return [routes, redirects]
  }
  render() {
    const [routes, redirects] = this.splitRedirect(this.props.routerData)
    return (
      <Suspense fallback={null}>
        <Switch>
          {routes.map(this.renderRoutes)}
          {redirects.map(this.renderRedirects)}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    )
  }
}

export default MainRoutes
