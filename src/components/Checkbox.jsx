import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;

    return (
      <Form.Check
        name="cardTrunfo"
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
