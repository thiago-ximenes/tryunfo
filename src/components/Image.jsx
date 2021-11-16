import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <Form.Group>
        <Form.Control
          value={ cardImage }
          onChange={ onInputChange }
          type="text"
          data-testid="image-input"
          name="cardImage"
        />
      </Form.Group>
    );
  }
}

Image.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Image;
