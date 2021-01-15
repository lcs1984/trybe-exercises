import React from "react";
import "./App.css";
import colors from "./data";

class App extends React.Component {
  render() {
    console.log(colors);
    return (
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <div className={color.color=== 'red' ? 'red-square' : 'default'}></div>
            {color.color}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
