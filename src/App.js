import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Basic, Parameters, Redirects } from './demos'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>react-router App Demos</h1>
          <div>
            <span className="title">
              <Link to="/basic">基础用法</Link>
            </span>
            <span className="title">
              <Link to="/url-parameters">Url带参数</Link>
            </span>
            <span className="title">
              <Link to="/redirects">Redirect(Auth)</Link>
            </span>
          </div>
          <hr />
          {/* <Route path="/:type" component={Demos} /> */}
          <Route path="/basic" component={Basic} />
          <Route path="/url-parameters" component={Parameters} />
          <Route path="/redirects" component={Redirects} />
          <Route path="/" exact render={() => <h3>请选择一个demo</h3>} />
        </div>
      </Router>
    )
  }
}

// const Demos = ({ match }) => {
//   console.log('333333333', match)
//   switch (match.params.type) {
//     case 'basic':
//       return <Basic />
//     case 'url-parameters':
//       return <Parameters />
//     default:
//       return <Basic />
//   }
// }

export default App
