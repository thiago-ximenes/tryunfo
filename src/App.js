import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => this.setState({ isSaveButtonDisabled: this.ableSubmitButton() }),
    );
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      savedCards,
      cardTrunfo,
    } = this.state;
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    console.log(savedCards);
    this.setState((prevState) => ({
      savedCards: [
        ...prevState.savedCards,
        {
          [cardName]: {
            cardImage,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardRare,
            cardTrunfo: { cardTrunfo },
          },
        },
      ],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
    }));
  };

  ableSubmitButton = () => {
    const NINETY = 90;
    const maxValue = 210;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const SUM = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (cardAttr1 > NINETY || cardAttr2 > NINETY || cardAttr3 > NINETY) return true;
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) return true;
    if (SUM > maxValue) return true;
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
    ) return false;
    return true;
  };

  render() {
    const { onInputChange, onSaveButtonClick } = this;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          alt={ cardName }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
