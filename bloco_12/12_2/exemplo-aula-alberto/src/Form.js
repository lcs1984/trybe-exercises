import React from "react";
import EstadoFavorito from './EstadoFavorito';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: "",
      nome: "",
      email: "",
      idade: "",
      vaiComparecer: false,
      palavraFavorita: "",
    };
  }

  handleChange({ target }) {
    console.log("estou mudando o estado do pai");
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
    // console.log(target.name);
  }
  render() {
    return (
      <div>
        <h1>Estados e React</h1>
        <form className="form">
        <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
          <label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
