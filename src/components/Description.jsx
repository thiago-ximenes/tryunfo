import React from 'react';
import '../css/Description.css';
import { PropTypes } from 'prop-types';

class Description extends React.Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label
        htmlFor="description"
      >
        Descrição
        <textarea
          value={ cardDescription }
          onChange={ onInputChange }
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

Description.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Description;
