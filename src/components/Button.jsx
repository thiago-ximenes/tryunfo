import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button data-testid="save-button" type="submit">
        Salvar
      </button>
    );
  }
}

export default Button;
