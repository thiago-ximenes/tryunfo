import React from 'react';
import { Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import '../css/Attributes.css';

class Attributes extends React.Component {
  render() {
    const { cardAttr, onInputChange } = this.props;
    return (
      <Form.Group className="attributes">
        <Form.Label htmlFor="attribute1">
          Attr 1
          <Form.Control
            value={ cardAttr[0] }
            onChange={ onInputChange }
            id="attribute1"
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
          />
        </Form.Label>
        <Form.Label htmlFor="attribute2">
          Attr 2
          <Form.Control
            value={ cardAttr[1] }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
          />
        </Form.Label>
        <Form.Label htmlFor="attribute3">
          Attr 3
          <Form.Control
            value={ cardAttr[2] }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
          />
        </Form.Label>
      </Form.Group>
    );
  }
}

Attributes.propTypes = {
  cardAttr: PropTypes.arrayOf(PropTypes.string).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attributes;
