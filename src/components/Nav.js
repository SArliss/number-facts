import React from 'react';
import { Route, Link } from "react-router-dom";


function Nav() {

  return (
    <nav>
      <div>
        <Link to="/Home">Home</Link>
      </div>
      <div>
        <Link to="/Second">Lets explore!</Link>
      </div>
    </nav>
  )
}

export default Nav;
