import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <input
        value={ cardImage }
        onChange={ onInputChange }
        type="text"
        data-testid="image-input"
      />
    );
  }
}

Image.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Image;
