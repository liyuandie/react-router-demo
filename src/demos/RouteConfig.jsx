import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const routes = path => [
  {
    path: `${path}/sandwiches`,
    component: Sandwiches
  },
  {
    path: `${path}/tacos`,
    component: Tacos,
    routes: [
      {
        path: `${path}/tacos/bus`,
        component: Bus
      },
      {
        path: `${path}/tacos/cart`,
        component: Cart
      }
    ]
  }
]

const RouteConfig = props => {
  const { url, path } = props.match
  const ROUTES = routes(path)
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/tacos`}>Tocas</Link>
        </li>
        <li>
          <Link to={`${url}/sandwiches`}>Sandwiches</Link>
        </li>
      </ul>
      {ROUTES.map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />
      })}
    </div>
  )
}

const Sandwiches = () => <h3>Sandwiches</h3>
const Bus = () => <h3>bus</h3>
const Cart = () => <h3>cart</h3>

const RouteWithSubRoutes = route => {
  return <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} />
}

const Tacos = ({ routes, match }) => {
  const { url, path } = match
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to={`${url}/bus`}>Bus</Link>
        </li>
        <li>
          <Link to={`${url}/cart`}>Cart</Link>
        </li>
      </ul>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  )
}

export default RouteConfig
