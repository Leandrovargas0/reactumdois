import React from 'react';
import logo from './logo.svg';
import './App.css';

function App2() {
  return(
    <h1>Teste</h1>
  )
}

class App extends React.Component{

  state = {
      agora: Date().toLocaleString()
  }

  render() {
    return (<div><p>{ this.state.agora }</p></div> ); }
}

export default App;
