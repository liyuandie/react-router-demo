import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './style.css'

class Parameters extends Component {
  render() {
    const { path, url } = this.props.match
    return (
      <div className="demo-container">
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to={`${url}/tom`}>Tom</Link>
          </li>
          <li>
            <Link to={`${url}/tony`}>Tony</Link>
          </li>
          <li>
            <Link to={`${url}/mike`}>Mike</Link>
          </li>
          <li>
            <Link to={`${url}/lily`}>Lily</Link>
          </li>
        </ul>
        <hr />
        <Route path={`${path}/:id`} component={Child} />
      </div>
    )
  }
}

const Child = ({ match }) => {
  return (
    <div>
      <h3>your ID is: {match.params.id}</h3>
    </div>
  )
}

export default Parameters
