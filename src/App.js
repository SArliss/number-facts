import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";

// Importing custom components
import Second from './components/Second';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      value: "",
      fact: ""
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/Second">Second Page</Link>
          <Link to="/">Home</Link>
        </nav>
        <main>
          {/* create the routes; they will not appear on the page */}
          <Route
            path="/Second" render={() => <Second />}
          />

        </main>
      </div>
    )
  }


}

export default App;