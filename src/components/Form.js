import React from 'react';

function Form(props) {
  return (

    <div className="form-wrapper">
      <form className="submit-form" onSubmit={props.handleSubmit}>
        {/* <input type="text" name="category" onChange={props.handleChange} placeholder="category" /> */}
        <input type="text" name="value" onChange={props.handleChange} placeholder="Type here :)" />
        <input type="submit" value="🔍" />
      </form>
    </div>

  );
}

export default Form;