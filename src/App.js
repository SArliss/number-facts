import React from 'react';
import './App.css';

// Importing custom components
import { getFacts } from './services/Api-helper';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      format: "",
      value: "",
      fact: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const format = this.state.format;
    const value = this.state.value;

    console.log(format);
    console.log(value);

    const response = await getFacts(format, value);
    const fact = response.data;

    this.setState({
      fact: fact
    });
  }

  render() {
    return (
      <div className="app">

        <div className="main-section">

          <form className="submit-form" onSubmit={this.handleSubmit}>
            <input type="text" name="format" onChange={this.handleChange} placeholder="format" />
            <input type="text" name="value" onChange={this.handleChange} placeholder="number" />
            <input type="submit" value="Search" />
          </form>

          <div className="number-fact">{this.state.fact}</div>

        </div>
      </div >
    );
  }
}

export default App;