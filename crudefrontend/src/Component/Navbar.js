import React from 'react';
import { Link} from 'react-router-dom'

function Navbar() {
    return (
        <ul className="nav justify-content-center bg-dark">
  <li className="nav-item">
    <Link className="nav-link" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/all">All Student</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/serch">Serch Student</Link>
  </li>
  
</ul>
    )
}

export default Navbar
