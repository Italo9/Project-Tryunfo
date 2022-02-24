import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.onInputChange = this.onInputChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.validarChaveState = this.validarValueDaChaveState.bind(this);
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.updateState(name, value);
    this.setState({ [name]: value }, () => this.validarValueDaChaveState());
  }

  updateState(name, value) {
    this.setState({
      [name]: value,
    });
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
      </div>
    );
  }
}

export default App;
