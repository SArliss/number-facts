import React from 'react';

// Importing custom components
import { getFacts } from '../services/Api-helper';
import Form from './Form';

class Year extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "year",
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

    const category = this.state.category;
    const value = this.state.value;
    // Calling the function getFacts that contains the API calls
    const response = await getFacts(category, value);
    const fact = response.data;

    this.setState({
      fact: fact
    });
  }

  render() {
    return (
      <div className="category-wrapper">
        <h4>Choose a date, month/day format!</h4>
        
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <div className="number-fact">{this.state.fact}</div>
        

      </div >
    );
  }

}

export default Year;