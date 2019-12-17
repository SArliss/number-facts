import React from 'react';
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="front-categories">

      <div>
        <Link to="/Number">Number</Link>
      </div>

      <div>
        <Link to="/#">Date</Link>
      </div>

      <div>
        <Link to="/#">Year</Link>
      </div>

      <div>
        <Link to="/#">Math</Link>
      </div>

      <div>
        <Link to="/#">Random</Link>
      </div>


    </div>
  )
}

export default Home;
