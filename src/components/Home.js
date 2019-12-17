import React from 'react';
import { Route, Link } from "react-router-dom";

function Home() {

  return (
    <div className="front-categories">

      <div>
      <Link to="/Second">Number</Link>
      </div>

      <div>
      <Link to="/Second">Date</Link>
      </div>

      <div>
      <Link to="/Second">Year</Link>
      </div>

      <div>
      <Link to="/Second">Math</Link>
      </div>

      <div>
      <Link to="/Second">Random</Link>
      </div>


    </div>
  )
}

export default Home;
