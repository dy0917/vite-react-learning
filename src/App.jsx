import { useState } from 'react';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';

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
import ErrorMessage from './Components/ErrorMessage.jsx';
import ExplodingBomb from './Components/BombComponent.jsx';
import CustomHook from './Components/CustomHook.jsx';
import ActivityFinder from './Pages/ActivityFinder';
import Clock from './Components/Clock.jsx';
import RefCounter from './Components/RefCounter';

const products = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function App() {
  return (
    <>
      <ActivityFinder></ActivityFinder>
      {/* <ErrorBoundary FallbackComponent={ErrorMessage}>
        <ActivityFinder></ActivityFinder>
      </ErrorBoundary> */}
      {/* <RefCounter></RefCounter> */}
    </>
  );
}

export default App;
