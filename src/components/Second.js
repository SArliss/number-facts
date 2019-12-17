import React from 'react';
import './App.css';

// Importing custom components
import { getFacts } from './services/Api-helper';
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';

class Second extends React.Component {
  constructor(props) {
    super(props);

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

    handleSubmit = async (e) => {
      e.preventDefault();

      const category = props.category;
      const value = props.value;
      // Calling the function getFacts that contains the API calls
      const response = await getFacts(category, value);
      const fact = response.data;

      this.setState({
        fact: fact
      });
    }


    render() {
      return (
        <div className="app">

          <Header />
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />

          <div className="number-fact">{props.fact}</div>
          <Footer />
        
        </div >
      );
    }

  }

export default Second;