import React from 'react';
import '../css/Attributes.css';

class Attributes extends React.Component {
  render() {
    return (
      <div className="attributes">
        <label htmlFor="attribute1">
          Atributo 1
          <input
            id="attribute1"
            type="number"
            data-testid="attr1-input"
            name="attribute1"
          />
        </label>
        <label htmlFor="attribute2">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            name="attribute2"
          />
        </label>
        <label htmlFor="attribute3">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            name="attribute3"
          />
        </label>
      </div>
    );
  }
}

export default Attributes;
