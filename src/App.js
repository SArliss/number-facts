import React from 'react';
import './App.css';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "18",
      type: "math"
    }
  }


  componentDidMount = async () => {
    const type = this.state.type;
    console.log(type);
    const value = this.state.value;
    console.log(value);
    let response = "";

    switch (type) {
      case "number":
        response = await axios.get(`http://numbersapi.com/${value}`);
        break;

      case "year":
        response = await axios.get(`http://numbersapi.com/${value}/year`);
        break;

      case "date":
        response = await axios.get(`http://numbersapi.com/${value}/date`);
        break;

      case "math":
        response = await axios.get(`http://numbersapi.com/${value}/math`);
        break;

      case "random":
        response = await axios.get(`http://numbersapi.com/random`);
        break;

      default:
        response = await axios.get(`http://numbersapi.com/random`);
        break;
    }


    this.setState({
      value: response.data
    })
  }


  render() {
    return (
      <div className="app">
        {this.state.value}
      </div >
    );
  }
}

export default App;