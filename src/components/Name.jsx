import React from 'react';
import '../css/Name.css';

class Name extends React.Component {
  render() {
    return (
      <label
        htmlFor="name"
      >
        Nome
        <input
          className="input-name"
          id="name"
          type="text"
          data-testid="name-input"
          name="name"
        />
      </label>
    );
  }
}

export default Name;
