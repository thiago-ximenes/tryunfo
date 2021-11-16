import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/Name.css';
import { PropTypes } from 'prop-types';

class Name extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;

    return (
      <Form.Group>
        <Form.Label
          htmlFor="name"
        >
          Nome
          <Form.Control
            value={ cardName }
            onChange={ onInputChange }
            className="input-name"
            id="name"
            type="text"
            data-testid="name-input"
            name="cardName"
          />
        </Form.Label>
      </Form.Group>
    );
  }
}

Name.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Name;
