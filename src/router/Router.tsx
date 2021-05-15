import React, { FC, useEffect } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { RoutesTree } from './routes'

const Router: FC = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        {Object.values(RoutesTree).map(({ name, path, component }) => (
          <Route
            exact
            path={path}
            key={`route-${name}`}
            component={component}
          />
        ))}

        <Redirect to={RoutesTree.main.path} />
      </Switch>
    </HashRouter>
  )
}

export default Router
