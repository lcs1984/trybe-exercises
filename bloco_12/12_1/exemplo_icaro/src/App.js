import React from "react";
import "./App.css";
import colors from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputTextValue: ''
    }
  }

  handleChange() {
    console.log('xablau');

  }

  render() {
    // console.log(colors);
    console.log(this);
    return (
      <main>
        <input type="text" onChange={this.handleChange}/>
        <ul>
          {colors.map((color, index) => (
            <li key={index}>
              <div className="color-square" style = {{backgroundColor: color.value}}></div>
                {color.color}
            </li>
        ))}
        </ul>
      </main>
    );
  }
}

export default App;
