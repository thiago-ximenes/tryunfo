import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Attributes from './Attributes';
import Description from './Description';
import Name from './Name';
import SelectItem from './SelectItem';
import Image from './Image';
import Checkbox from './Checkbox';

// Recebi uma ajuda que economizou muito do meu tempo no requisito 2 da Fumagalli da Tribo for(ever)

class Forms extends React.Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <Container fluid>
        <Form>
          <Name cardName={ cardName } onInputChange={ onInputChange } />
          <Description
            cardDescription={ cardDescription }
            onInputChange={ onInputChange }
          />
          <Attributes
            cardAttr={ [cardAttr1, cardAttr2, cardAttr3] }
            onInputChange={ onInputChange }
          />
          <Image cardImage={ cardImage } onInputChange={ onInputChange } />
          <SelectItem cardRare={ cardRare } onInputChange={ onInputChange } />
          {!hasTrunfo
            ? <Checkbox cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />
            : <p>Você já tem um Super Trunfo em seu baralho</p>}
          <Button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </Button>
        </Form>
      </Container>
    );
  }
}

Forms.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Forms;
