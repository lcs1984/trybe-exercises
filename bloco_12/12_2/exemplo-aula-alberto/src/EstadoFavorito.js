import React from "react";

class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    console.log(`estou no filho com o valor ${value}`);

    let error = undefined;
    if (value.length > 120) error = "texto muito grande!";

    return (
      <label>
        <textarea name="estadoFavorito" value={value} onChange={handleChange} />
        <div>{error ? error : ""}</div>
      </label>
    );
  }
}

export default EstadoFavorito;
