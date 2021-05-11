import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/data">My Data</Link>
          </li>
          <li>
            <Link to="/notebooks">Notebooks</Link>
          </li>
          <li>
            <Link to="/dashboards">Dashboards</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav