import React from 'react'
import { Route, Link } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h3>Home</h3>
  },
  {
    path: '/user',
    sidebar: () => <div>user!</div>,
    main: () => <h3>User</h3>
  },
  {
    path: '/product',
    sidebar: () => <div>product!</div>,
    main: () => <h3>Product</h3>
  }
]

const Sidebar = ({ match }) => {
  return (
    <div style={{ display: 'flex', width: '50%' }}>
      <div style={{ padding: '10px', width: '40%', backgroundColor: '#f0f0f0' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to={`${match.url}`}>Home</Link>
          </li>
          <li>
            <Link to={`${match.url}/user`}>User</Link>
          </li>
          <li>
            <Link to={`${match.url}/product`}>Product</Link>
          </li>
        </ul>
        {routes.map((route, index) => {
          return <Route key={index} path={match.path + route.path} exact={route.exact} component={route.sidebar} />
        })}
      </div>
      <div style={{ paddingLeft: '10px' }}>
        {routes.map((route, index) => {
          return <Route key={index} path={match.path + route.path} exact={route.exact} component={route.main} />
        })}
      </div>
    </div>
  )
}

export default Sidebar
