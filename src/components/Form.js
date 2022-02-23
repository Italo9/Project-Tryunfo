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
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            MissiFonCard
            placeholder="Seu nome"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="descricao">
          Descrição:
          <textarea
            data-testid="description-input"
            id="descricao"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atributo">
          Atributo 1:
          <input
            type="number"
            data-testid="attr1-input"
            id="atributo"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atributo">
          Atributo 2:
          <input
            type="number"
            data-testid="attr2-input"
            id="atributo"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="atributo">
          Atributo 3:
          <input
            type="number"
            data-testid="attr3-input"
            id="atributo"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            id="imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="raridade">
          Raridade:
          <select
            data-testid="rare-input"
            id="raridade"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="cartaSuperTrunfo">
          Carta Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="cartaSuperTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
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
  //   hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
