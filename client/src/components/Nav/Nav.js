import React from "react";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <p>Google Books</p>
      <nav>
        <ul className="Links">
          <NavLink to="/" exact>
            <li>Search</li>
          </NavLink>
          <NavLink to="/saved">
            <li>Saved</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
