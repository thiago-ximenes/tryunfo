import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
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
          onInputChange={ () => {} }
          onSaveButtonClick={ () => {} }
        />
      </div>
    );
  }
}

export default App;
