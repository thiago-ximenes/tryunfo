import React from 'react';
import '../css/Description.css';

class Description extends React.Component {
  render() {
    return (
      <label
        htmlFor="description"
      >
        Descrição
        <textarea
          className="input-description"
          id="description"
          type="text"
          data-testid="description-input"
          name="name"
        />
      </label>
    );
  }
}

export default Description;
