import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './style.css'

class CustomLink extends Component {
  Home = () => {
    return (
      <div>
        <h2>Home Page</h2>
      </div>
    )
  }

  About = () => {
    return (
      <div>
        <h2>About Page</h2>
      </div>
    )
  }

  CustomMenuLink = ({ label, to, isExact }) => {
    return (
      <Route
        path={to}
        exact={isExact}
        children={({ match }) => (
          <div className={match ? 'active' : ''}>
            {match ? '>' : ''}
            <Link to={to}>{label}</Link>
          </div>
        )}
      />
    )
  }

  render() {
    const { url, path } = this.props.match
    console.log('2222222222', url, path)
    return (
      <div className="demo-container">
        <this.CustomMenuLink label="Home" isExact={true} to={`${url}`} />
        <this.CustomMenuLink label="About" isExact={false} to={`${url}/about`} />
        <hr />
        <Route path={`${path}/`} exact component={this.Home} />
        <Route path={`${path}/about`} component={this.About} />
      </div>
    )
  }
}

export default CustomLink
