import React from 'react';
import { PropTypes } from 'prop-types';

class SelectItem extends React.Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <div>
        <select
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </div>
    );
  }
}

SelectItem.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SelectItem;
