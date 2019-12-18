import React from 'react';
import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
      <h4>Choose a category:</h4>

      <div className="front-categories">

        <div>
          <Link to="/Number">Number</Link>
        </div>
        <div>
          <Link to="/Date">Date</Link>
        </div>
        <div>
          <Link to="/Year">Year</Link>
        </div>
        <div>
          <Link to="/Math">Math</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
