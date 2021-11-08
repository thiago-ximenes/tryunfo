import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;

    return (
      <input
        checked={ cardTrunfo }
        onChange={ onInputChange }
        type="checkbox"
        data-testid="trunfo-input"
      />
    );
  }
}

Checkbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Checkbox;
