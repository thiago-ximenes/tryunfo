import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Forms from './components/Form';
import Card from './components/Card';
import CardFilter from './components/CardFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      searchByName: '',
      searchByRare: 'todas',
      searchByTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => this.setState({
        isSaveButtonDisabled: this.ableSubmitButton(),
      }),
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
      cardTrunfo,
    } = this.state;
    if (cardTrunfo) this.setState({ hasTrunfo: true, cardTrunfo: false });
    this.setState((prevState) => ({
      savedCards: [
        ...prevState.savedCards,
        {
          cardName,
          cardImage,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
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

  onDeleteButtonClick = (event) => {
    const { savedCards } = this.state;
    event.preventDefault();
    const cardNameFromDom = event.target.previousElementSibling.children[0].innerText;
    const newSavedCards = savedCards.filter((
      cards,
    ) => cards.cardName !== cardNameFromDom);
    this.setState({
      savedCards: newSavedCards,
    });
    if (savedCards.some((card) => !card.hasTrunfo)) this.setState({ hasTrunfo: false });
    event.target.previousElementSibling.remove();
  }

  render() {
    const { onInputChange, onSaveButtonClick, onDeleteButtonClick } = this;
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
      savedCards,
      searchByName,
      searchByRare,
      searchByTrunfo,
    } = this.state;
    return (
      <Container>
        <CardFilter
          onChange={ onInputChange }
          searchByName={ searchByName }
          searchByRare={ searchByRare }
          searchByTrunfo={ searchByTrunfo }
          searchInputs={ searchByTrunfo }
        />
        <Forms
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
        {savedCards
          .filter((
            card,
          ) => {
            if (searchByTrunfo) {
              return card.cardTrunfo === searchByTrunfo;
            }
            return true;
          })
          .filter((
            card,
          ) => {
            if (searchByRare !== 'todas') return card.cardRare === searchByRare;
            return true;
          })
          .filter((
            card,
          ) => {
            if (searchByName !== '') return card.cardName.includes(searchByName);
            return true;
          })
          .map((card) => (
            <Container key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                alt={ card.cardName }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <Button
                variant="danger"
                data-testid="delete-button"
                onClick={ onDeleteButtonClick }
              >
                Excluir
              </Button>
            </Container>
          ))}
      </Container>
    );
  }
}

export default App;
