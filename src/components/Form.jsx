import React from 'react';
import Name from './Name';
import Description from './Description';
import Attributes from './Attributes';
import '../css/Form.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Name />
        <Description />
        <Attributes />
      </form>
    );
  }
}

export default Form;
