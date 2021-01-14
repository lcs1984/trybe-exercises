import React from 'react';
import './App.css';
import colors from './data';

class App extends React.Component {
  render() {
    console.log(colors)
    return (
      <ul>
        <li>{colors[0].color}</li>
      </ul>
    )
  }
}

export default App;
