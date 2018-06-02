import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom'

import {
  indexRouter,
  Public,
  Private,
  Admin
} from './Router';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute'

export const history = createHistory()

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            {
              indexRouter.map((R, k) => {
                return <Route key={k} path={R.path} component={R.component} exact={R.exact}/>
              })
            }
            {
              Private.map((R, k) => {
                return <PrivateRoute key={k} path={R.path} component={R.component} exact={R.exact}/>
              })
            }
            {
              Public.map((R, k) => {
                return <PublicRoute key={k} path={R.path} component={R.component} exact={R.exact}/>
              })
            }
            {
              Admin.map((R, k) => {
                return <AdminRoute key={k} path={R.path} component={R.component} exact={R.exact}/>
              })
            }
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppRouter
