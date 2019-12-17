import React from 'react';

// Importing custom components
import { getFacts } from '../services/Api-helper';
import Form from './Form';
import Nav from './Nav';

class Second extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
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
      <div className="second-page">

        
       
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <div className="number-fact">{this.state.fact}</div>
        

      </div >
    );
  }

}

export default Second;