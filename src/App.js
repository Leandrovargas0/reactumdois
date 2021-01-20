import React from 'react';
import logo from './logo.svg';
import './App.css';

function App2() {
  return(
    <h1>Teste</h1>
  )
}

class App1 extends React.Component{

  state = {
      agora: Date().toLocaleString()
  }

  render() {
    return (<div><p>{ this.state.agora }</p></div> ); }
}

class App extends React.Component{
  state = {
      nome : ''
  }
  modificarNome = (event) => {
    this.setState({
      nome : event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ["Doce","salgado"];
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>);

    return(
      <select>{comboBoxOpcoes}</select>
    );
  }

  componentDidMount(){
    console.log('didmoint');
  }

  render() {
    console.log('render');
    return (<React.Fragment>
      <input type="text" value={this.state.nome} onChange={this.modificarNome} ></input>
      <h1>{ this.state.nome }</h1>
      <h2>{ this.props.nome }</h2>
      <h3>{this.criaComboBox()}</h3>
    </React.Fragment> ); }
}


export default App;