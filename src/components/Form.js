import React from 'react';

function Form(props) {
  return (

    <div className="main-section">
      <form className="submit-form" onSubmit={props.handleSubmit}>
        <input type="text" name="format" onChange={props.handleChange} placeholder="format" />
        <input type="text" name="value" onChange={props.handleChange} placeholder="number" />
        <input type="submit" value="Search" />
      </form>
      {/* <div className="number-fact">{props.fact}</div> */}
    </div>

  );
}

export default Form;