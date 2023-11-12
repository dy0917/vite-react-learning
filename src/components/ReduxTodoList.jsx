import { useState } from 'react';

import TodoComponent from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, saveNewTodo } from '../Store/Reducers/TodosSlice';

function ReduxTodoList() {
  const createdAt = new Date();
  const dispatch = useDispatch();
  const { entities: todosA, status } = useSelector((state) => state.todo);
  const todos = useSelector(selectTodos);

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
    dispatch(saveNewTodo('this is a new todo'));
  };
  return (
    <>
      <div id="todo-list">
        <h2>To-Do </h2>
        <div id="todos">
          {todos.map((todo) => (
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

export default ReduxTodoList;
