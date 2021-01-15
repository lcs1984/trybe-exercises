import React from "react";
import "./App.css";
import colors from "./data";

class App extends React.Component {
  render() {
    console.log(colors);
    return (
      <ul>
        {colors.map((color, index) => (
          <li key={color.value}>
            <div className="color-square" style = {{backgroundColor: color.value}}></div>
            {color.color}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
