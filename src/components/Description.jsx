import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/Description.css';
import { PropTypes } from 'prop-types';

class Description extends React.Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <Form.Group>
        <Form.Label
          htmlFor="description"
        >
          Descrição
          <Form.Control
            as="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
            className="input-description"
            id="description"
            type="text"
            data-testid="description-input"
            name="cardDescription"
          />
        </Form.Label>
      </Form.Group>
    );
  }
}

Description.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Description;
