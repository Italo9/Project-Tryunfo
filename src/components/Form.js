import React from 'react';
import PropType from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="cardName">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="cardName"
            placeholder="Seu nome"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            name="cardDescription"
            data-testid="description-input"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="cardAttr1">
          Atributo 1:
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            id="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="cardAttr2">
          Atributo 2:
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            id="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="cardAttr3">
          Atributo 3:
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            id="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="cardImage">
          Imagem:
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="cardRare">
          Raridade:
          <select
            name="cardRare"
            data-testid="rare-input"
            id="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="cardTrunfo">
          Carta Super Trunfo:
          {!hasTrunfo
            ? (
              <input
                type="checkbox"
                name="cardTrunfo"
                data-testid="trunfo-input"
                id="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />)
            : <p>Você já tem um Super Trunfo em seu baralho</p>}
        </label>
        <br />
        <label htmlFor="cartaSuperTrunfo">
          <input
            type="button"
            data-testid="save-button"
            value="Salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
