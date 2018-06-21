import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import * as localStorage from './utils/localStorage'
class AuthorizedRoute extends React.Component {
  render() {
    const {
      component: Component,
      ...rest
    } = this.props
    const isLogged = localStorage.getItem("loginType") != null ? true : false;
    return (
      <Route {...rest} render={props => {
          return isLogged
              ? <Component {...props} />: <Redirect to="/login" />
    }
  }
  />
)
}
}

export default AuthorizedRoute