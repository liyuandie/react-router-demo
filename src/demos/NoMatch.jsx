import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import './style.css'

class NoMatch extends Component {
  render() {
    const { url, path } = this.props.match
    return (
      <div className="demo-container">
        <ul>
          <li>
            <Link to={`${url}`}>Home</Link>
          </li>
          <li>
            <Link to={`${url}/old-match`}>Old Match, to be redirected</Link>
          </li>
          <li>
            <Link to={`${url}/will-match`}>Will Match</Link>
          </li>
          <li>
            <Link to={`${url}/will-not-match`}>Will Not Match</Link>
          </li>
          <li>
            <Link to={`${url}/also/will/not/match`}>Also Will Not Match</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path={`${path}`} exact component={Home} />
          <Redirect from={`${path}/old-match`} to={`${path}/will-match`} />
          <Route path={`${path}/will-match`} component={Matched} />
          <Route component={NotMatch} />
        </Switch>
      </div>
    )
  }
}

const Home = () => {
  return (
    <p>
      A <code>&lt;Switch&gt;</code> renders the first child <code>&lt;Route&gt;</code> that matches. A{' '}
      <code>&lt;Route></code> with no <code>path</code> always matches.
    </p>
  )
}

const Matched = () => {
  return <h3>Matched</h3>
}

const NotMatch = ({ location }) => {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export default NoMatch
