import React from 'react';
import { Link } from "react-router-dom";


function Header() {

  return (
    <header>
      <h1><Link to="/Home">NUMBER FACTS</Link></h1>
      <h3>Tell me a number and I will tell you a fact!</h3>
    </header>
  )
}

export default Header;
