import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      newTodo: target.value,
    });
  }

  handleClick() {
    const { addTodo } = this.props;
    const { newTodo } = this.state;

    addTodo(newTodo);
    this.setState({ newTodo: "" });
  }

  render() {
    const { newTodo } = this.state;
    return (
      <section>
        <label htmlFor="addTodo">
          Insira uma tarefa:
          <input
            value={newTodo}
            onChange={this.handleChange}
            type="text"
            name="newTodo"
            id="newTodo"
          />
        </label>
        <button onClick={this.handleClick}>Adicionar</button>
      </section>
    );
  }
}

export default TodoInput;
