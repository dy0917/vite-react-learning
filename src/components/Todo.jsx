import { useState } from 'react';

function TodoComponent({ todo, onUpdate, onDelete, children }) {
  const [thisTodo, setTodo] = useState(todo);
  const onTodoChange = (event) => {
    const updateTodo = { ...thisTodo, completed: event.target.checked };
    setTodo(updateTodo);
    onUpdate(updateTodo);
  };
  const onDeleteClick = () => {
    onDelete(thisTodo);
  };
  return (
    <>
      <div className="todo-item">
        <input
          type="checkbox"
          checked={thisTodo.completed}
          onChange={onTodoChange}
        ></input>

        <span className="title">{thisTodo.title}</span>
        <span className="created-at"></span>
        <button>Edit</button>
        <button onClick={onDeleteClick}>Delete</button>
      </div>
      {children}
    </>
  );
}

export default TodoComponent;
