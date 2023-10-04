import { useState } from 'react';

import TodoComponent from './Todo';

function TodoList() {
  const createdAt = new Date();
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'title', completed: true, createdAt },
    { id: 2, title: 'title2', completed: false, createdAt },
  ]);

  const updateTodo = (newTodo) => {
    const temp = [...todoList];
    const todoIndex = todoList.findIndex((todo) => todo.id === newTodo.id);
    temp.splice(todoIndex, 1, newTodo);
    setTodoList(temp);
  };

  const deleteTodo = (deleteTodo) => {
    const temp = [...todoList];
    const todoIndex = temp.findIndex((todo) => todo.id == deleteTodo.id);
    temp.splice(todoIndex, 1);
    setTodoList(temp);
  };

  const addTodo = () => {
    const maxId = Math.max(...todoList.map((todo) => todo.id));
    const newTodo = {
      id: maxId + 1,
      title: 'this is a new todo ',
      completed: false,
      createdAt,
    };
    setTodoList([...todoList, newTodo]);
  };
  return (
    <>
      <div id="todo-list">
        <h2>To-Do </h2>

        <div id="todos">
          {todoList.map((todo) => (
            <TodoComponent
              key={todo.id}
              todo={todo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            ></TodoComponent>
          ))}
        </div>
        <button onClick={addTodo}>Add todo</button>
      </div>
    </>
  );
}

export default TodoList;
