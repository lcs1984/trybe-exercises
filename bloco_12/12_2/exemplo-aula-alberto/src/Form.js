import React from "react";

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
    const { name, value } = target;
    this.setState({ [name]: value });
    // console.log(target.name);
  }
  render() {
    return (
      <div>
        <h1>Estados e React</h1>
        <form className="form">
          <label>
            <textarea
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
