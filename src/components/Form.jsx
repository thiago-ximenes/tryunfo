import React from 'react';
import '../css/Form.css';
import Attributes from './Attributes';
import Description from './Description';
import Name from './Name';
import SelectItem from './SelectItem';
import Checkbox from './Checkbox';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Name />
        <Description />
        <Attributes />
        <SelectItem />
        <Checkbox />
      </form>
    );
  }
}

export default Form;
