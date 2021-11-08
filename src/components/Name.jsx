import React from 'react';
import '../css/Name.css';
import { PropTypes } from 'prop-types';

class Name extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;

    return (
      <label
        htmlFor="name"
      >
        Nome
        <input
          value={ cardName }
          onChange={ onInputChange }
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

Name.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Name;
