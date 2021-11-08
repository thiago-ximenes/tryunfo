import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  onInputChange(event) {
    return console.log(event.target.value);
  }

  onSaveButtonClick(event) {
    prevent.default();
    return console.log(event);
  }

  render() {
    const { onInputChange, onSaveButtonClick } = this;
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
          isSaveButtonDisabled={ false }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName="Miguel"
          cardDescription="Manuella"
          cardAttr1="1"
          cardAttr2="2"
          cardAttr3="3"
          cardImage="igual qualquer coisa aí"
          cardRare="vixe"
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
