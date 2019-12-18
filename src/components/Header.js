import React from 'react';
import { Link } from "react-router-dom";


function Header() {

  return (
    <header>
      <h1><Link to="/Home">NUMBER FACTS</Link></h1>
      <h3>Bringing interesting facts to your metrics!</h3>
    </header>
  )
}

export default Header;
