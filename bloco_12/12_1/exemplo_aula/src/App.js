import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numeroDeCliques: 0
    }
  }
    // console.log("compente sendo contruído");
 
  
  handleClick() {
    // console.log(this);
    // console.log("Clicou");
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    console.log(this)
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
