import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './style.css'

class Basic extends Component {
  // componentWillReceiveProps(next) {
  //   console.log(next)
  // }
  render() {
    console.log('222222', this.props.match)
    const { path, url } = this.props.match
    return (
      <div className="demo-container">
        <ul>
          <li>
            <Link to={`${url}/about`}>About</Link>
          </li>
          <li>
            <Link to={`${url}/inbox`}>Inbox</Link>
          </li>
          <li>
            <Link to={`${url}/topics`}>topics</Link>
          </li>
        </ul>
        <hr />
        <Route path={`${path}/`} component={Home} exact />
        <Route path={`${path}/about`} component={About} />
        <Route path={`${path}/inbox`} component={Inbox} />
        <Route path={`${path}/topics`} component={Topics} />
      </div>
    )
  }
}

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  )
}

const Inbox = () => {
  return (
    <div>
      <h2>Inbox Page</h2>
    </div>
  )
}
const Topics = ({ match }) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route path={`${match.path}`} exact render={() => <h3>please choose a topic</h3>} />
    </div>
  )
}

const Topic = ({ match }) => {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
}

export default Basic
