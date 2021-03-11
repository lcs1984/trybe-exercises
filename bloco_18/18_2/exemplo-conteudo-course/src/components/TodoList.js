// class TodoList extends React.Component {
//   render() {
//     const { todos } = this.props;
//     return (
//       <ul>
//         {todos.map((todo) => (
//           <li>{todo}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// Os componentes funcionais recebem como parâmetro as props

import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  );
}

export default TodoList;
