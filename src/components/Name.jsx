import React from 'react';
import '../css/Name.css';

class Name extends React.Component {
  render() {
    return (
      <label
        htmlFor="name"
        className="input-label"
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
