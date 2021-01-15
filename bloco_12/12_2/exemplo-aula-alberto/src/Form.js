import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = {
      estadoFavorito: "",
      nome: "",
      email: "",
      idade: "",
      vaiComparecer: false,
      palavraFavorita: "",
    };
  }

  handleTextAreaChange(event) {
    this.setState({estadoFavorito: event.target.value});
  }
  render() {
    return (
      <div>
        <h1>Estados e React</h1>
        <form className="form">
          <label>
            <textarea
              name="estadoFavorito"
              onChange={this.handleTextAreaChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
