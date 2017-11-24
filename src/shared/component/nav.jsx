// @prettier

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { APP_NAME } from '../config'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE
} from '../routes'

const handleNavLinkClick = () => {
  console.log('link clicked'); // eslint-disable-line no-console
}

const Nav = () => (
  <nav className="">
    <Link href={HOME_PAGE_ROUTE} to={HOME_PAGE_ROUTE} className="navbar-brand">{APP_NAME}</Link>
    <ul className="">
      {[
        { route: HOME_PAGE_ROUTE, label: 'Home' },
        { route: HELLO_PAGE_ROUTE, label: 'Say Hello' }
      ].map(link => (
        <li className="nav-item" key={link.route}>
          <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'white' }} exact onClick={handleNavLinkClick}>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
