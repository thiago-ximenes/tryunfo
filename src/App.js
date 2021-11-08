import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  onInputChange(event) {
    return console.log(event);
  }

  onSaveButtonClick(event) {
    return console.log(event);
  }

  render() {
    return (
      <div>
        <Form
          cardName="igual qualquer coisa aí"
          cardDescription="igual qualquer coisa aí"
          cardAttr1="1"
          cardAttr2="2"
          cardAttr3="3"
          cardImage="igual qualquer coisa aí"
          cardRare="igual qualquer coisa aí"
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled="igual qualquer coisa aí"
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
