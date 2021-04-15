import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Jogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", numero: ""};
  }

  sortearNumero() {
    return Math.floor(Math.random() * 99) + 1;
  }

  componentDidMount() {
    this.setState({numero: this.sortearNumero()});
  }

  atualizaValor(event) {
    this.setState({value: event.target.value});
  }

  verifica(event) {
    const u = this.state.value;
    const n = this.state.numero;

    if (u == n) alert("Parabéns, acertou!!");
    else if (u > n) alert("Sua aposta é maior");
    else alert ("Sua aposta é menor");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit = {(e) => this.verifica(e)}>
        <label>
          Seu palpite:
          <input type="number" min="1" max="100" value={this.state.value} onChange={(e) => this.atualizaValor(e)}/>
        </label>
        <input type="submit" value="Enviar"/>
      </form>
    );
  }
  
}