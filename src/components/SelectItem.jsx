import React from 'react';

class SelectItem extends React.Component {
  render() {
    return (
      <div>
        <select
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

export default SelectItem;
