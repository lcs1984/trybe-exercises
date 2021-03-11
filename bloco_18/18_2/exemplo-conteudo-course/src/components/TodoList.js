import React from "react";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
