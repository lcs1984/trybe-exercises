import React from "react";
import "./App.css";
import colors from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputTextValue: ''
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    // console.log("clicou");
    this.setState({inputTextValue: event.target.value})
  }

  render() {
    // console.log(colors);
    console.log(this);
    const {inputTextValue} = this.state;
    return (
      <main>
        <input type="text" onChange={this.handleChange}/>
        <ul>
          {colors.filter((color)=>color.color===inputTextValue).map((color, index) => (
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
