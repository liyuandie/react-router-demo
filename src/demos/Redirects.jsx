import React, { Component } from 'react'
import { Route, Link, withRouter, Redirect } from 'react-router-dom'
import './style.css'

class Redirects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      redirectToReferrer: false
    }
  }

  Login = () => {
    const { url } = this.props.match
    const { redirectToReferrer } = this.state
    let { from } = this.props.location.state || { from: { pathname: `${url}/` } }
    if (redirectToReferrer) return <Redirect to={from} />
    return (
      <div>
        <p>you must log in to the view page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }

  AuthBtn = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome! <button onClick={() => fakeAuth.signout(history.push(`${this.props.match.url}/`))}>Sign out</button>
      </p>
    ) : (
      <p>you are not logged in</p>
    )
  )

  Public = () => {
    return <p>Public Page</p>
  }
  Protected = () => {
    return <p>Protected Page</p>
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        isLogin: true,
        redirectToReferrer: true
      })
    })
  }
  PrivateRoute = ({ component: Component, ...rest }) => {
    const { url } = this.props.match
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: `${url}/login`,
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  }

  render() {
    const { url, path } = this.props.match
    return (
      <div className="demo-container">
        <this.AuthBtn />
        <ul>
          <li>
            <Link to={`${url}/public`}>Public Page</Link>
          </li>
          <li>
            <Link to={`${url}/protected`}>Protected Page</Link>
          </li>
        </ul>
        <hr />
        <Route path={`${path}/public`} component={this.Public} />
        <Route path={`${path}/login`} component={this.Login} />
        <this.PrivateRoute path={`${path}/protected`} component={this.Protected} />
      </div>
    )
  }
}

// const Public = () => {
//   return <p>Public Page</p>
// }

// const Protected = () => {
//   return <p>Protected Page</p>
// }

// const AuthBtn = withRouter(({ history }) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome! <button onClick={() => fakeAuth.signout(history.push('/'))}>Sign out</button>
//     </p>
//   ) : (
//     <p>you are not logged in</p>
//   )
// )

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

export default Redirects
