import axios from 'axios';
import { createSelector } from 'reselect';
const initialState = {
  status: 'idle',
  entities: {},
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      const todo = action.payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [todo.id]: todo,
        },
      };
    }

    case 'todos/colorSelected': {
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color,
        };
      });
    }
    case 'todos/todoDeleted': {
      const newEntities = { ...state.entities };
      delete newEntities[action.payload];
      return {
        ...state,
        entities: newEntities,
      };
    }
    case 'todos/allCompleted': {
      return state.map((todo) => {
        return { ...todo, completed: true };
      });
    }
    case 'todos/completedCleared': {
      return state.filter((todo) => !todo.completed);
    }
    case 'todos/todosLoaded': {
      const newEntities = {};
      action.payload.forEach((todo) => {
        newEntities[todo.id] = todo;
      });
      return {
        ...state,
        status: 'idle',
        entities: newEntities,
      };
    }
    default:
      return state;
  }
}
export const todosLoaded = (todos) => {
  return {
    type: 'todos/todosLoaded',
    payload: todos,
  };
};
const selectTodoEntities = (state) => state.todos.entities;

export const selectTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
);

export const todoAdded = (todo) => ({ type: 'todos/todoAdded', payload: todo });

// Thunk function
export async function fetchTodos(dispatch, getState) {
  const response = await axios.get('http://localhost:8080/todos');

  dispatch(todosLoaded(response.data));
}

export function saveNewTodo(title) {
  return async (dispatch, getState) => {
    const initialTodo = { title };
    const response = await axios.post('http://localhost:8080/todos', {
      todo: initialTodo,
    });
    dispatch(todoAdded(response.data.todo));
  };
}
