import React from "react";

class EstadoFavorito extends React.Component {
  render() {
      const {value, handleChange} = this.props;
      console.log(`estou no filho com o valor ${value}`);
      return (
        <label>
        <textarea
          name="estadoFavorito"
          value={value}
          onChange={handleChange}
        />
      </label>
      )
  }
}

export default EstadoFavorito;
