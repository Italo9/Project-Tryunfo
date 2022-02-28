import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const CARTAS_DO_BARALHO = [];

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  cartas: CARTAS_DO_BARALHO,
  hasTrunfo: false,
  searchInput: '',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.onInputChange = this.onInputChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.validarChaveState = this.validarValueDaChaveState.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validaCheked = this.validaCheked.bind(this);
    this.removeCarta = this.removeCarta.bind(this);
    this.filtroNomeCarta = this.filtroNomeCarta.bind(this);
  }

  onInputChange = (event) => {
    console.log(event.target);
    const { name } = event.target;
    const value = (event.target.type === 'checkbox')
      ? event.target.checked : event.target.value;
    this.updateState(name, value);
    // console.log(value);
    this.setState({ [name]: value }, () => this.validarValueDaChaveState());
  }

  onSaveButtonClick(e) {
    // console.log();
    e.preventDefault();
    this.setState(
      (estadoAnterior) => (
        { cartas: [...estadoAnterior.cartas, {
          cardName: estadoAnterior.cardName,
          cardDescription: estadoAnterior.cardDescription,
          cardAttr1: estadoAnterior.cardAttr1,
          cardAttr2: estadoAnterior.cardAttr2,
          cardAttr3: estadoAnterior.cardAttr3,
          cardImage: estadoAnterior.cardImage,
          cardRare: estadoAnterior.cardRare,
          cardTrunfo: estadoAnterior.cardTrunfo,
        }] }),
    );
    // console.log(this.state);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      isSaveButtonDisabled: true,
    }, () => this.validaCheked());
    // console.log(this.state);
  }

  filtroNomeCarta(event) {
    // console.log(event);
    const { target: { value } } = event;
    // console.log({ target: { value } });
    this.setState({ searchInput: value });
    // console.log(value);
  }

  updateState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  validaCheked() {
    const {
      cartas,
    } = this.state;
    // console.log(cartas.some((carta) => carta.cardTrunfo === true));
    if (cartas.some((carta) => carta.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    } else (this.setState({ hasTrunfo: false }));
  }

  validarValueDaChaveState() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;
    const noventa = 90;
    const dozentoseDez = 210;
    if (cardName === ''
    || cardDescription === ''
    || cardAttr1 === ''
    || cardAttr2 === ''
    || cardAttr3 === ''
    || cardImage === ''
    || cardRare === ''
    || parseFloat(cardAttr1) > noventa
    || parseFloat(cardAttr1) < 0
    || parseFloat(cardAttr2) > noventa
    || parseFloat(cardAttr2) < 0
    || parseFloat(cardAttr3) > noventa
    || parseFloat(cardAttr3) < 0
    || parseFloat(cardAttr1)
     + parseFloat(cardAttr2) + parseFloat(cardAttr3) > dozentoseDez) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  removeCarta(cardName) {
    const { cartas } = this.state;
    this.setState({
      cartas: cartas.filter((carta) => carta.cardName !== cardName) },
    () => this.validaCheked());
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cartas,
      searchInput,
    } = this.state;
    return (
      <div>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <input
          type="text"
          placeholder="Buscar cartas"
          data-testid="name-filter"
          onChange={ this.filtroNomeCarta }
          defaultValue={ searchInput }
        />
        <section>
          {cartas
            .filter((carta) => carta.cardName.includes(searchInput))
            .map((carta) => (
              <div className="" key={ carta.cardName }>
                <Card
                  key={ carta.cardName }
                  cardName={ carta.cardName }
                  cardDescription={ carta.cardDescription }
                  cardAttr1={ carta.cardAttr1 }
                  cardAttr2={ carta.cardAttr2 }
                  cardAttr3={ carta.cardAttr3 }
                  cardImage={ carta.cardImage }
                  cardRare={ carta.cardRare }
                  cardTrunfo={ carta.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCarta(carta.cardName) }
                >
                  Excluir

                </button>
              </div>))}
        </section>
      </div>
    );
  }
}

export default App;
