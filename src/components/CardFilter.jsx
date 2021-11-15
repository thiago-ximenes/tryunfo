import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

class CardFilter extends Component {
  render() {
    const { onChange, searchByName } = this.props;
    return (
      <Form>
        <Form.Group>
          <Form.Label>Pesquise pelo nome da Carta</Form.Label>
          <Form.Control
            value={ searchByName }
            onChange={ onChange }
            name="searchByName"
            placeholder="Nome da Carta"
            type="text"
            data-testid="name-filter"
          />
        </Form.Group>
      </Form>
    );
  }
}

CardFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchByName: PropTypes.string.isRequired,
};

export default CardFilter;
