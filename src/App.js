import React from 'react';
import './App.css';
import { Route, Link, withRouter } from "react-router-dom";
import { getFacts } from './services/Api-helper';

// Importing custom components
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import Number from './components/Number';
import Date from './components/Date';
import Year from './components/Year';
import Math from './components/Math';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      value: "",
      fact: ""
    }
  }

  componentDidMount() {
    this.props.history.push("/Home")
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <main>
          <Route path="/Home" render={() => <Home />} />
          <Route path="/Number" render={() => <Number />} />
          <Route path="/Date" render={() => <Date />} />
          <Route path="/year" render={() => <Year />} />
          <Route path="/Math" render={() => <Math />} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);