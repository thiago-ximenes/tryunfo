import React from 'react';
import PropTypes from 'prop-types';
import '../css/Attributes.css';

class Attributes extends React.Component {
  render() {
    const { cardAttr } = this.props;
    return (
      <div className="attributes">
        <label htmlFor="attribute1">
          Attr 1
          <input
            value={ cardAttr[0] }
            id="attribute1"
            type="number"
            data-testid="attr1-input"
            name="attribute1"
          />
        </label>
        <label htmlFor="attribute2">
          Attr 2
          <input
            value={ cardAttr[1] }
            type="number"
            data-testid="attr2-input"
            name="attribute2"
          />
        </label>
        <label htmlFor="attribute3">
          Attr 3
          <input
            value={ cardAttr[2] }
            type="number"
            data-testid="attr3-input"
            name="attribute3"
          />
        </label>
      </div>
    );
  }
}

Attributes.propTypes = {
  cardAttr: PropTypes.string.isRequired,
};

export default Attributes;
