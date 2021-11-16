import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

class CardFilter extends Component {
  render() {
    const {
      onChange, searchByName, searchByRare, searchByTrunfo, searchInputs } = this.props;
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Pesquise pelo nome da Carta</Form.Label>
          <Form.Control
            disabled={ searchInputs }
            className="mb-3"
            value={ searchByName }
            onChange={ onChange }
            name="searchByName"
            placeholder="Nome da Carta"
            type="text"
            data-testid="name-filter"
          />
          <Form.Label>Escolha pela raridade</Form.Label>
          <Form.Select
            disabled={ searchInputs }
            value={ searchByRare }
            name="searchByRare"
            onChange={ onChange }
            data-testid="rare-filter"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </Form.Select>
          <Form.Label>
            Super Trunfo
            <Form.Check
              name="searchByTrunfo"
              checked={ searchByTrunfo }
              onChange={ onChange }
              data-testid="trunfo-filter"
              type="checkbox"
            />
          </Form.Label>
        </Form.Group>
      </Form>
    );
  }
}

CardFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchByName: PropTypes.string.isRequired,
  searchByRare: PropTypes.string.isRequired,
  searchByTrunfo: PropTypes.bool.isRequired,
  searchInputs: PropTypes.bool.isRequired,
};

export default CardFilter;
