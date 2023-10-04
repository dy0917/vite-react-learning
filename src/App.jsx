import { useState } from 'react';

import './App.css';

import ReducerComponent from './Components/ReducerComponent';
import CounterComponent from './Components/CounterComponent';
import MoodChanger from './Components/MoodChangerComponent';
import Env from './Components/EnvComponent';
import BirthdayTranslator from './Components/BirthdayTranslatorComponent';
import MoviesList from './Components/MovieListComponent';
import LoginForm from './Components/FormComponent';

import TodoList from './Components/TodoList';
import ReduxTodoList from './Components/ReduxTodoList';
import Home from './Home';
import Book from './Book';

function App() {
  const [env, setEnv] = useState('dev');
  const setEnvFn = (env) => {
    setEnv(env);
  };
  const consoleLog = (message) => {
    console.log('message', message);
  };
  return (
    <>
      <ReduxTodoList />
    </>
  );
}

export default App;
