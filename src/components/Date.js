import React from 'react';

// Importing custom components
import { getFacts } from '../services/Api-helper';
import Form from './Form';

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "date",
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
        <h4>Month/Day format only.</h4>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* Conditional rendering, div with a fact only apears after user submits a number and a fact exists */}
        {this.state.fact &&
          <div className="number-fact">{this.state.fact}</div>
        }
        {this.state.fact &&
          <form className="load-more" onSubmit={this.handleSubmit} >
            <input type="submit" value= "Load more" />
          </form>
        }
      </div >
    );
  }

}

export default Date;