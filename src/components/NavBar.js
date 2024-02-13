import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return (
    <BrowserRouter>
  <div className='navbar'>

   <nav>
      <ul>
        
        <li>
          <NavLink to="/movies" activeClassName="active">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/directors" activeClassName="active">
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink to="/actors" activeClassName="active">
            Actors
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
</div>
</BrowserRouter>
);
}

export default NavBar;
