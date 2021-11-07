import React from 'react';
import Select from 'react-select';

class SelectItem extends React.Component {
  render() {
    const options = [
      { value: 'normal', label: 'Normal' },
      { value: 'raro', label: 'Raro' },
      { value: 'muito raro', label: 'Muito Raro' },
    ];
    return <Select placeholder="Raridade" data-testid="rare-input" options={ options } />;
  }
}

export default SelectItem;
