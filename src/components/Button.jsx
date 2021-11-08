import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;

    return (
      <button
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
        data-testid="save-button"
        type="submit"
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Button;
