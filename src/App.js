import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";

// Importing custom components
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import Number from './components/Number';

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
        <Header />
        <Nav />

        <main>

          <Route
            path="/Home" render={() => <Home />}
          />

          <Route
            path="/Number" render={() => <Number />}
          />


        </main>

        <Footer />

      </div>
    )
  }


}

export default App;