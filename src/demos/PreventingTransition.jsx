import React, { Component } from 'react'
import { Route, Link, Prompt } from 'react-router-dom'
import './style.css'

class PreventingTransition extends Component {
  render() {
    const { url, path } = this.props.match
    return (
      <div className="demo-container">
        <ul>
          <li>
            <Link to={`${url}`}>Form</Link>
          </li>
          <li>
            <Link to={`${url}/one`}>One</Link>
          </li>
          <li>
            <Link to={`${url}/two`}>Two</Link>
          </li>
        </ul>
        <hr />
        <Route path={`${path}/`} exact component={Form} />
        <Route path={`${path}/one`} render={() => <h3>One</h3>} />
        <Route path={`${path}/two`} render={() => <h3>Two</h3>} />
      </div>
    )
  }
}

class Form extends Component {
  state = { isBlocking: false }
  render() {
    let { isBlocking } = this.state
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          event.target.reset()
          this.setState({
            isBlocking: false
          })
        }}
      >
        <Prompt when={isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`} />
        <p>Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope!'}</p>
        <p>
          <input
            placeholder="type something to block transition"
            size="50"
            onChange={event => {
              this.setState({
                isBlocking: event.target.value.length > 0
              })
            }}
          />
        </p>
        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    )
  }
}

export default PreventingTransition
