import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import AppRoutes from './Routes.jsx';
import Theme from './Components/Theme.jsx';
import './index.css';
import './app.css';
import { Provider } from 'react-redux';
import store from './Store/store.js';
import { fetchTodos } from './Store/Reducers/TodosSlice';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { UserProvider } from './Store/UserContext.jsx';
import { CounterProvider } from './Store/CounterContext.jsx';
import MyThemeProvider from './Store/MyThemeContext.jsx';
import MUITheme from './Components/MUI/Theme.jsx';

store.dispatch(fetchTodos());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserProvider>
      <CounterProvider>
        <MyThemeProvider>
          <BrowserRouter>
            <MUITheme>
              <NavBar></NavBar>
              <AppRoutes></AppRoutes>
            </MUITheme>
          </BrowserRouter>
        </MyThemeProvider>
      </CounterProvider>
    </UserProvider>
  </Provider>
);
