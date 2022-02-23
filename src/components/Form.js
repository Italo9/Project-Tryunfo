import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            id="name"
          />
        </label>
        <br />
        <label htmlFor="descricao">
          Descrição:
          <textarea
            data-testid="description-input"
            id="descricao"
          />
        </label>
        <br />
        <label htmlFor="atributo">
          Atributo 1:
          <input
            type="number"
            data-testid="attr1-input"
            id="atributo"
          />
        </label>
        <br />
        <label htmlFor="atributo">
          Atributo 2:
          <input
            type="number"
            data-testid="attr2-input"
            id="atributo"
          />
        </label>
        <br />
        <label htmlFor="atributo">
          Atributo 3:
          <input
            type="number"
            data-testid="attr3-input"
            id="atributo"
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            id="imagem"
          />
        </label>
        <br />
        <label htmlFor="raridade">
          Raridade:
          <select data-testid="rare-input" id="raridade">
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
          />
        </label>
        <br />
        <label htmlFor="cartaSuperTrunfo">
          <input
            type="button"
            data-testid="save-button"
            value="Salvar"
          />
        </label>
      </form>
    );
  }
}

export default Form;
