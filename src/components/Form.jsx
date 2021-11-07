import React from 'react';
import '../css/Form.css';
import Attributes from './Attributes';
import Description from './Description';
import Name from './Name';
import SelectItem from './SelectItem';
import Checkbox from './Checkbox';
import Button from './Button';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Name />
        <Description />
        <Attributes />
        <SelectItem />
        <Checkbox />
        <Button />
      </form>
    );
  }
}

export default Form;
